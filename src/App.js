import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppNav/>
      <AppRoutes/>
    </div>
  );
}

export default App;
