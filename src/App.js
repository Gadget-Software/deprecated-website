import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { FruchtbotePage } from './pages/FruchtbotePage/FruchtbotePage';

const initState = {
  loading: true,
  businessInfo: null,
};

function App() {
  const [state, setState] = useState(initState);

  const getBusinessInfo = () => {
    fetch('/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setState({ businessInfo: data, loading: false });
      })
      .catch(console.error);
  };

  useEffect(() => {
    getBusinessInfo();
  }, []);

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
