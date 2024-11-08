import React from 'react';
import Header from './Header';

function EmployeePage() {
  return (
    <div className="employee-page">
      <Header title="Employee" />
      <div className="employee-details">
        <div className="employee-avatar-large"></div>
        <div className="employee-info">
          <h4>Julie Taylor</h4>
          <p>VP of Marketing</p>
        </div>
      </div>
      <div className="contact-info">
        <p>Call Office: 781-000-0002</p>
        <p>Call Mobile: 617-000-0002</p>
        <p>SMS: 617-000-0002</p>
        <p>Email: jtaylor@fakemail.com</p>
      </div>
    </div>
  );
}

export default EmployeePage;
