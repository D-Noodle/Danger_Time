/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

export class PieChart extends React.Component {
  constructor(props) {
    super(props);
    const { graphData } = this.props;
    this.state = {
      graphData,
      dataPie: {
        labels: ['Status 420', 'Status 200'],
        datasets: [
          {
            data: [73, 299],
            backgroundColor: [
              '#C44536',
              '#46BFBD',
            ],
            hoverBackgroundColor: [
              '#FF5A5E',
              '#5AD3D1',
            ],
          },
        ],
        options: {
          responsive: true,
        },
      },
    };
  }

  render() {
    Chart.defaults.global.defaultFontColor = '#EDDDD4';
    const { dataPie } = this.state;
    return (
      <MDBContainer className="pie-chart-mdb">
        <h2 className="pie-chart-title">API&apos;s by status</h2>
        <Pie id="pie-chart" data={dataPie} />
      </MDBContainer>
    );
  }
}

// export default PieChart;
