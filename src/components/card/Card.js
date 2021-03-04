import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";
import styles from "./Card.module.css";

export default function SimpleCard({ data }) {
  return (
    <div className={styles.container}>
      <Card className={styles.infected}>
        <CardContent>
          <Typography gutterBottom>Infected</Typography>
          <Typography variant="h5" component="h2">
            <CountUp start={0} end={data.active} separator="," />
          </Typography>
          <Typography>{new Date(data.updated).toDateString()}</Typography>
          <Typography variant="body2" component="p">
            Number of active cases of COVID-19
          </Typography>
        </CardContent>
      </Card>

      <Card className={styles.recovered}>
        <CardContent>
          <Typography gutterBottom>Recovered</Typography>
          <Typography variant="h5" component="h2">
            <CountUp start={0} end={data.recovered} separator="," />
          </Typography>
          <Typography>{new Date(data.updated).toDateString()}</Typography>
          <Typography variant="body2" component="p">
            Number of cases recovered from COVID-19
          </Typography>
        </CardContent>
      </Card>

      <Card className={styles.deaths}>
        <CardContent>
          <Typography gutterBottom>Deaths</Typography>
          <Typography variant="h5" component="h2">
            <CountUp start={0} end={data.deaths} separator="," />
          </Typography>
          <Typography>{new Date(data.updated).toDateString()}</Typography>
          <Typography variant="body2" component="p">
            Number of deaths due to COVID-19
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
