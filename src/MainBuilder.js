import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Footer from "./components/navigation/Footer";
import Header from "./components/navigation/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function Main() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contactme">
          <Contact />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Main;
