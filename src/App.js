import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

// require('dotenv').config();


function App() {
  return (
    <div className="App">



      {/* sidebar */}
      <Sidebar />


      {/* feeds */}
      <Feed />


      {/* widgets */}
      <Widgets />


    </div >
  );
}

export default App;
