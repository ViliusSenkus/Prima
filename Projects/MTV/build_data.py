"""Sugeneruoja data.js iš MTV CSV (skyriklis ';', cp1252).
Naudojimas: python build_data.py "mtv - Copy.csv" [data.js]"""
import csv, json, sys

src = sys.argv[1]
dst = sys.argv[2] if len(sys.argv) > 2 else "data.js"
rows = list(csv.reader(open(src, encoding="cp1252"), delimiter=";"))[1:]
songs, sl, ent = {}, [], []
for dt, rk, ar, ti, yt, _ in rows:
    k = (ar.strip(), ti.strip())
    if k not in songs:
        songs[k] = len(sl)
        sl.append([k[0], k[1], yt.strip()])
    elif yt.strip() and not sl[songs[k]][2]:
        sl[songs[k]][2] = yt.strip()
    ent.append([dt, int(rk), songs[k]])
ent.sort(key=lambda e: (e[0], e[1]))
with open(dst, "w", encoding="utf-8") as f:
    f.write("window.MTV_DATA=" + json.dumps({"songs": sl, "entries": ent}, ensure_ascii=False, separators=(",", ":")) + ";\n")
print(len(sl), "dainų,", len(ent), "įrašų ->", dst)
