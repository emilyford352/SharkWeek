import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, VerticalBarSeries} from 'react-vis';

const BarChart = (props) => {
      const data = props.sharkData;
      const chartWidth = 400;
      const chartHeight = 800;
      const chartDomain = [0, chartHeight];

      return (
          <div className="bar-chart">
              <h3>
                  Fatal Shark Attacks by Country (> 25)
              </h3>
              <XYPlot
                  height={chartWidth}
                  width={chartHeight}
                  xType="ordinal"
                  yDomain={chartDomain}
              >
                  <VerticalBarSeries data={data} />
                  <XAxis title="Countries" />
                  <YAxis title="Fatalaties"/>
              </XYPlot>
          </div>
      );
}

BarChart.propTypes = {
    byCountryAttack: PropTypes.object
};

export default BarChart;
