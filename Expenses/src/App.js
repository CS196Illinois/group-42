import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import {Resources} from './components/Resources'
import {AddTransaction} from './components/AddTransaction'
import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/create" element={<AddTransaction/>} />
          <Route path="/resources" element={<Resources/>} />
        </Routes>
      </Router>
  );
}

export default App;
