import React, { useEffect, useMemo, useState } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";


import Navbar from './Components/UI/Navbar/Navbar';

import AppRouter from './Components/AppRouter';

function App() {

  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export default App;
