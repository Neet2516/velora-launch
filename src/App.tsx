import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LaunchEventPage } from './components/launch/LaunchEventPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchEventPage />} />
        <Route path="/launch" element={<LaunchEventPage />} />
        <Route path="*" element={<LaunchEventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
