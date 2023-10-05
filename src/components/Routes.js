// Routes.js
import App from '../App';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your page components
import Page from './components/Page'; // Create a single Page component

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/page/:page" component={Page} />
      </Routes>
    </Router>
  );
}

export default Routers;
