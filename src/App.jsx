import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SchoolSearch from './Components/FindSchool';
import AddSchool from './Components/AddSchool';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-school" element={<SchoolSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Welcome to Schools</h1>
      <p className="text-center">Add your School.</p>
      <AddSchool />
    </div>
  );
};

export default App;
