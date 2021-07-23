import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "views/LandingPage/LandingPage.js";

const initState = {
  loading: true,
  businessInfo: null,
};

function App() {
  const [state, setState] = useState(initState);

  const getBusinessInfo = () => {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    });

    fetch("data.json", {
      headers: myHeaders,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setState({ businessInfo: data, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBusinessInfo();
  }, []);

  return (
    <Router>
      <Route path="/">
        <LandingPage
          loading={state.loading}
          businessInfo={state.businessInfo}
        />
      </Route>
    </Router>
  );
}

export default App;
