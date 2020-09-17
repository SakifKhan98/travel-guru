import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import DestinationDetails from "./components/DestinationDetails/DestinationDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SpotDetails from "./components/SpotDetails/SpotDetails";

function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/destination/:destinationId">
            <DestinationDetails></DestinationDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/spotdetails">
            <SpotDetails></SpotDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
