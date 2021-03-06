import React, { Component } from "react";

import FusionCharts from "fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const chartConfigs = {
  type: "angulargauge",
  width: 600,
  height: 300,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Nordstorm's Customer Satisfaction Score for 2017",
      lowerLimit: "0",
      upperLimit: "100",
      showValue: "1",
      numberSuffix: "%",
      theme: "gammel",
      showToolTip: "0"
    },
    colorRange: {
      color: [
        {
          minValue: "0",
          maxValue: "50",
          code: "#F2726F"
        },
        {
          minValue: "50",
          maxValue: "75",
          code: "#FFC533"
        },
        {
          minValue: "75",
          maxValue: "100",
          code: "#62B58F"
        }
      ]
    },
    dials: {
      dial: [
        {
          value: "81"
        }
      ]
    }
  }
};

export default class App extends Component {
  render() {
    return <ReactFC {...chartConfigs} />;
  }
}
