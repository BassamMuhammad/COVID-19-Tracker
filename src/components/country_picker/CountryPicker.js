import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import fetchApi from "../../api";
import styles from "./CountryPicker.module.css";

export default function NativeSelects({ onChangeCountry }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCountries = async () => {
      setData(await fetchApi("countries"));
    };
    fetchCountries();
  }, []);

  if (data[0]) {
    return (
      <div className={styles.container}>
        <FormControl>
          <NativeSelect onChange={(e) => onChangeCountry(e.target.value)}>
            <option value="all">Global</option>
            {data.map((countryInfo, i) => (
              <option key={i} value={countryInfo.country}>
                {countryInfo.country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
    );
  } else return <div>Loading....</div>;
}
