import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { FruchtbotePage } from './pages/FruchtbotePage/FruchtbotePage';

function App() {
  const state = { businessInfo: require('./data.json'), loading: false };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<HomePage businessInfo={state.businessInfo} />}
        />
        <Route
          path="/case-studies/fruchtbote"
          exact
          element={<FruchtbotePage businessInfo={state.businessInfo} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
