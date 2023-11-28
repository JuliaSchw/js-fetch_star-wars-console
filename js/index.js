console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data),
    console.log(
      data.results.forEach((entry) => {
        console.log("Name:", entry.name);
      })
    );
  console.log("First Name:", data.results[0].name),
    console.log(
      data.results.forEach((entry) => {
        console.log("Mass:", entry.mass);
      })
    );
  console.log("R2-D2 Eye Color:", data.results[2].eye_color);
  return data;
}

fetchData();
