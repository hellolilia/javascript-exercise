async function fetchData(url) {
  // <-- start
  const result = await fetch(url);
  const data = await result.json();
  document.writeln(data.name);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
