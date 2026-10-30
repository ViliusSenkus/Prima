"""Suranda YouTube nuorodas dainoms iš primary_data.csv ir įrašo peržiūrai į youtube_found.json.
Tęsia nuo vietos, kur sustojo (jau rastos dainos praleidžiamos); praleidžia dainas, kurios jau turi nuorodą
data.js arba links.js. links.js ir data.js NEKEIČIAMI.
Naudojimas: python find_youtube.py [--sample N | --limit N] [--delay S]"""
import argparse, csv, json, os, re, sys, time
import truststore
truststore.inject_into_ssl()  # sertifikatai tikrinami pagal Windows saugyklą (SSL tikrinimas lieka įjungtas)
from yt_dlp import YoutubeDL

HERE = os.path.dirname(os.path.abspath(__file__))
CSV = os.path.join(HERE, "primary_data.csv")
OUT = os.path.join(HERE, "youtube_found.json")
BAD_WORDS = ("cover", "live", "karaoke", "lyric", "reaction", "remix", "tutorial", "instrumental", "parody")


def fix_text(s):
    """Pataiso dukart užkoduotą tekstą (BeyoncÃ© -> Beyoncé); naudojama tik paieškos užklausai."""
    for _ in range(3):
        try:
            t = s.encode("cp1252").decode("utf-8")
        except UnicodeError:
            break
        if t == s:
            break
        s = t
    return re.sub("[ÃÂ�]", "", s).strip()


def load_js(name, prefix):
    path = os.path.join(HERE, name)
    if not os.path.exists(path):
        return {}
    text = open(path, encoding="utf-8").read().strip()
    return json.loads(text[len(prefix):].rstrip(";"))


def songs_from_csv():
    rows = list(csv.reader(open(CSV, encoding="utf-8"), delimiter=";"))[1:]
    seen = {}
    for r in rows:
        seen.setdefault((r[2].strip(), r[3].strip()), None)
    return list(seen)


def already_linked():
    have = set()
    for a, t, u in load_js("data.js", "window.MTV_DATA=").get("songs", []):
        if u:
            have.add((a, t))
    for o in load_js("links.js", "window.MTV_LINKS=").get("links", []):
        if o.get("added"):
            have.add((o["artist"], o["title"]))
    return have


def pick(entries, title):
    """Pirmenybė – pirmam rezultatui be įtartinų žodžių (cover, live, lyric...), jei jų nėra paties dainos pavadinime."""
    for e in entries:
        low = (e.get("title") or "").lower()
        if not any(w in low and w not in title.lower() for w in BAD_WORDS):
            return e
    return entries[0]


def search(ydl, query):
    for attempt in range(3):
        try:
            info = ydl.extract_info("ytsearch3:" + query, download=False)
            return [e for e in (info.get("entries") or []) if e and e.get("id")]
        except Exception as e:
            print("   klaida:", str(e)[:150])
            time.sleep(5 * (attempt + 1) ** 2)
    raise RuntimeError("paieška nepavyko 3 kartus iš eilės")


def entry_info(e):
    return {
        "url": "https://www.youtube.com/watch?v=" + e["id"],
        "found_title": e.get("title"),
        "channel": e.get("channel") or e.get("uploader"),
        "duration": e.get("duration"),
    }


def save(results):
    tmp = OUT + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=1)
    os.replace(tmp, OUT)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sample", type=int, help="paimti N tolygiai pasiskirsčiusių dainų (bandymui)")
    ap.add_argument("--limit", type=int, help="apdoroti ne daugiau kaip N dar neieškotų dainų")
    ap.add_argument("--delay", type=float, default=1.0, help="pauzė tarp užklausų sekundėmis")
    args = ap.parse_args()

    results = json.load(open(OUT, encoding="utf-8")) if os.path.exists(OUT) else []
    done = {(r["artist"], r["title"]) for r in results}
    skip = already_linked()
    pending = [s for s in songs_from_csv() if s not in done and s not in skip]
    print(f"Dainų be nuorodos ir dar neieškotų: {len(pending)} (jau rasta/ieškota: {len(done)}, turi nuorodą: {len(skip)})")
    if args.sample:
        pending = pending[:: max(1, len(pending) // args.sample)][: args.sample]
    elif args.limit:
        pending = pending[: args.limit]

    opts = {"quiet": True, "no_warnings": True, "extract_flat": True, "skip_download": True}
    try:
        with YoutubeDL(opts) as ydl:
            for n, (artist, title) in enumerate(pending, 1):
                a, t = fix_text(artist), fix_text(title)
                print(f"[{n}/{len(pending)}] {a} - {t}")
                entries = search(ydl, f"{a} {t} official music video") or search(ydl, f"{a} {t}")
                rec = {"artist": artist, "title": title, "youtube_url": None}
                if entries:
                    best = pick(entries, t)
                    info = entry_info(best)
                    rec.update(youtube_url=info.pop("url"), **info)
                    rec["alternatives"] = [entry_info(e) for e in entries if e is not best]
                    print("   ->", rec["youtube_url"], "|", rec["found_title"], "|", rec["channel"])
                else:
                    print("   -> nerasta")
                results.append(rec)
                if n % 10 == 0:
                    save(results)
                time.sleep(args.delay)
    except (KeyboardInterrupt, RuntimeError) as e:
        print("Sustabdyta:", e or "Ctrl+C", "- rezultatai išsaugomi, paleidus iš naujo bus tęsiama.")
    finally:
        save(results)
    found = sum(1 for r in results if r["youtube_url"])
    print(f"Išsaugota {len(results)} įrašų ({found} su nuoroda) -> {OUT}")


if __name__ == "__main__":
    main()
