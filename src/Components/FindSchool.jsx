import React, { useState, useEffect } from 'react';
import SchoolCard from './SchoolCard';

const SchoolSearch = () => {
  const [schools, setSchools] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from API
    fetch('https://schools-eyck.onrender.com/api/getSchools')
      .then(response => response.json())
      .then(data => setSchools(data));
  }, []);

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">School Search</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="School Name..."
          className="border rounded py-2 px-4"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSchools.map(school => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
};

export default SchoolSearch;
