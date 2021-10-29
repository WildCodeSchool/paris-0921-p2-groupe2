import './FightingReport.css';

import React from 'react';

export default function FigthtingReport(props) {
  const { report } = props;

  const announcement = report.shift();
  const result = report.pop();

  return (
    <div className="report-container">
      <div className="fighting-announcement">{announcement}</div>
      {report.map((x, i) => {
        return (
          <div className="fighting-action" key={i}>
            {x}
          </div>
        );
      })}
      <div className="fighting-result">{result}</div>
    </div>
  );
}
