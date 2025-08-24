import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AgencyPage from './pages/AgencyPage';
import ProductPage from './pages/ProductPage';
import BudgetAllocator from './pages/BudgetAllocator';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agency" element={<AgencyPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/budgetallocator" element={<BudgetAllocator />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
}

export default App; 