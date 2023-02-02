console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("bad response");
    } else {
      const dataOk = await response.json();
      console.log(dataOk);
      console.log(dataOk.results[4].name);
      console.log(dataOk.results[2].eye_color);
    }
  } catch (error) {
    console.error("An error occurred");
  }
}

fetchData();
