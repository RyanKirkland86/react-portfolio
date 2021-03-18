import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/react-portfolio" component={ Home } />
            <Route exact path="/react-portfolio/about" component={ About } />
            <Route exact path="/react-portfolio/work" component={ Work } />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
