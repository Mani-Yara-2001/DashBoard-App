import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddWidgetPage from './components/AddWidgetPage';
import './styles/App.css';  // Corrected path

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-widget" element={<AddWidgetPage />} />
      </Routes>
    </div>
  );
}

export default App;

