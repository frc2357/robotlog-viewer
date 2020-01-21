import React from 'react';

function ChartSetHeader({ header }) {
  const {
    eventName,
    matchNumber,
    replayNumber,
    alliance,
    driverStationLocation,
  } = header;

  return (
    <div className="chartset--header">
      <h2>{eventName}</h2>
      <h3>Match #{matchNumber}({replayNumber}) - {alliance} {driverStationLocation}</h3>
    </div>
  );
}

export default ChartSetHeader;