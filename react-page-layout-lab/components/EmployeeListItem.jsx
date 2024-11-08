import React from 'react';

function EmployeeListItem({ name, position }) {
  return (
    <div className="employee-list-item">
      <div className="employee-avatar"></div>
      <div className="employee-info">
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
