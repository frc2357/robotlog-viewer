import React from 'react';
import { Chart } from 'react-charts';

function DecimalLineChart({ topicName, entries }) {
  // TODO: Use getPrimary/getSecondary/getDatums for better performance.
  const data = React.useMemo(
    () => ([
      {
      label: topicName,
      data: entries.map(entry => [entry.time, entry.value]),
      },
    ]),
    [topicName, entries]
  );

  const series = React.useMemo(
    () => ({
      showPoints: true
    }),
    []
  );

  const timeFormat = (tick, i) => {
    const minutes = Math.floor(tick / 60);
    const seconds = (tick % 60).toString().padStart(2, '0');
    return minutes + ':' + seconds;
  };

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom', show: true, format: timeFormat },
      { type: 'linear', position: 'left', show: true }
    ],
    []
  );

  return (
    <div className="chartset--chart">
      <Chart data={data} series={series} axes={axes} tooltip dark />
    </div>
  );
}

export default DecimalLineChart;
