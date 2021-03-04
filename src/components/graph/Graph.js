import React from "react";
import styles from "./Graph.module.css";
import { Bar } from "react-chartjs-2";

function Graph({ data, country }) {
  if (country === "all") country = "the world";
  return (
    <div className={styles.container}>
      <Bar
        width={1000}
        height={500}
        data={{
          labels: ["Today Cases", "Today Recovered", "Today Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
              ],
              data: [data.todayCases, data.todayRecovered, data.todayDeaths],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    </div>
  );
}

export default Graph;
