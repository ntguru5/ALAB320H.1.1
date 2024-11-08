import React from 'react';
import Header from './Header';
import SearchBar from  './Searchbar';
import EmployeeList from './EmployeeList';

function Homepage() {
  return (
    <div className="homepage">
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default Homepage;
