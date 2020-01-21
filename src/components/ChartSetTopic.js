import React from 'react';
import DecimalLineChart from './DecimalLineChart';

const CHART_COMPONENTS = {
  decimal: DecimalLineChart,
};

function ChartSetTopic({ name, type, entries }) {
  const Chart = CHART_COMPONENTS[type];

  // TODO: Error handling for unsupported chart types.
  const chart = Chart && <Chart topicName={name} entries={entries} />;

  return (
    <div className="chartset--topic">
      <h3 className="chartset--topic-title">{name}</h3>
      { chart }
    </div>
  );
}

export default ChartSetTopic;
