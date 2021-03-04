const url = "https://disease.sh/v3/covid-19";

async function fetchApi(country) {
  let changedUrl = "";
  if (country === "all" || country === "countries")
    changedUrl = `${url}/${country}`;
  else changedUrl = `${url}/countries/${country}`;
  const data = await fetch(changedUrl);
  const body = await data.json();
  return body;
}

export default fetchApi;
