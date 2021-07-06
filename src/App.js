import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { fetchInfo } from "./services/Info.service";
import LandingPage from "views/LandingPage/LandingPage.js";

var hist = createBrowserHistory();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInfo());
  }, []);

  return (
    <Router history={hist}>
      <Route path="/">
        <LandingPage />
      </Route>
    </Router>
  );
}

export default App;
