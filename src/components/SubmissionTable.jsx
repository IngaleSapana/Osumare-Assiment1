import React from 'react';
import './SubmissionTable.css';

const SubmissionTable = ({ data }) => {
  if (!data.length) return null;

  return (
    <div className="submission-table container my-5">
      <h3>Submitted Data</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.firstName} {entry.lastName}</td>
              <td>{entry.email}</td>
              <td>{entry.phone}</td>
              <td>{entry.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;
