import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import BranchesPage from './pages/BranchesPage/BranchesPage';
import SubBranchesPage from './pages/SubBranchesPage/SubBranchesPage';
import StacksPage from './pages/StacksPage/StacksPage';
import TechnologiesPage from './pages/TechnologiesPage/TechnologiesPage';
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:section" element={<BranchesPage />} />
        <Route path="/:section/:branch" element={<SubBranchesPage />} />
        <Route path="/:section/:branch/:subBranch" element={<StacksPage />} />
        <Route path="/:section/:branch/:subBranch/:stack" element={<TechnologiesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
