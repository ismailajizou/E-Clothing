import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
    </div>
  );
}

export default App;
