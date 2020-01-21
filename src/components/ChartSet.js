import React from 'react';
import ChartSetHeader from './ChartSetHeader';
import ChartSetTopic from './ChartSetTopic';

function renderTopic(topic, allEntries) {
  const { name, type } = topic;
  const entries = allEntries.filter(entry => entry.topic === name);

  return (
    <ChartSetTopic key={name} name={name} type={type} entries={entries} />
  );
}

function ChartSet({ logSession }) {
  const {header, entries, topics} = logSession;

  return (
    <div className="chartset">
      <ChartSetHeader header={header} />
      { topics.map(topic => renderTopic(topic, entries)) }
    </div>
  );
}

export default ChartSet;
