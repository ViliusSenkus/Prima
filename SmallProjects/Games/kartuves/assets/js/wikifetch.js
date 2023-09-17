const url = "https://lt.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const word = data.query.random[0].title;
    const description = data.query.random[0].extract;
    
    console.log(data.query.random[0].id);
    console.log("Word:", word);
    console.log("Description:", description);
  })
  .then(
    fetch("https://lt.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&rvprop=content&pageids=51204")
    .then(resp => console.log(resp))
    .catch(error => console.log("klaida", error))
  )
  .catch(error => {
    console.error("An error occurred:", error);
  });