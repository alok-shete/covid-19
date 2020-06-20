import React from "react";
import Card from "./Components/Card";
import Loading from "./Components/Loading";
import { Grid } from "@material-ui/core";
import "./App.css";

export default class App extends React.Component {
  state = {
    loading: true,
    confirmed: null,
    recovered: null,
    deaths: null,
    lastUpdate: null,
  };

  async componentDidMount() {
    const url = "https://covid19.mathdro.id/api/countries/INDIA";
    const response = await fetch(url);
    const apiData = await response.json();
    this.setState({
      loading: false,
      confirmed: apiData["confirmed"]["value"],
      recovered: apiData["recovered"]["value"],
      deaths: apiData["deaths"]["value"],
      lastUpdate: apiData["lastUpdate"],
    });
    console.log(apiData["confirmed"]["value"]);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.confirmed ? (
          <div className="appContainer">
            <div className="cardContainer">
              <Grid container spcing={3} justify="center">
                <Loading />
              </Grid>
            </div>
          </div>
        ) : (
          <div className="appContainer">
            <div className="cardContainer">
              <Grid container spcing={3} justify="center">
                <Card
                  name="Infected"
                  count={this.state.confirmed}
                  date={this.state.lastUpdate}
                  styles="infected"
                  desc="Number Of Infected Cases Of COVID-19"
                />
                <Card
                  name="Recovered"
                  count={this.state.recovered}
                  date={this.state.lastUpdate}
                  styles="recovered"
                  desc="Number Of Recoveries From COVID-19"
                />
                <Card
                  name="Deaths"
                  count={this.state.deaths}
                  date={this.state.lastUpdate}
                  styles="deaths"
                  desc="Number Of Deaths Caused By COVID-19"
                />
              </Grid>
            </div>
          </div>
        )}
      </div>
    );
  }
}
