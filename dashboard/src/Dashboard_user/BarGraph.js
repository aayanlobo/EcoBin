import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const data = [
  { country: "Russia", area: 12 },
  { country: "Canada", area: 7 },
  { country: "USA", area: 7 },
  { country: "China", area: 7 },
  { country: "Brazil", area: 6 },
  { country: "Australia", area: 5 },
  { country: "India", area: 2 },
  { country: "Others", area: 55 },
];
export default class BarGraph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper style={{ marginTop: "0px", width: "500px", height: "780px" }}>
        <Chart data={chartData}>
          <PieSeries valueField="area" argumentField="country" />
          <Title text="Request Distribution" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
