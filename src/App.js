import React, { useState, useEffect } from "react";
import { Card, Graph, CountryPicker } from "./components";
import fetchApi from "./api";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchApi(country));
    };
    fetchData();
  }, [country]);

  if (data.active)
    return (
      <div className={styles.container}>
        <Card data={data} />
        <CountryPicker data={data} onChangeCountry={setCountry} />
        <Graph data={data} country={country} />
      </div>
    );
  else {
    return <div>Loading...</div>;
  }
}

export default App;
