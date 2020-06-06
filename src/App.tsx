import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { SingleRoom } from "./pages/SingleRoom";
import { Rooms } from "./pages/Rooms";
import { Error } from "./pages/Error";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RoomsProvider } from "./context";

function App() {
  return (
    <RoomsProvider>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms">
          <Rooms />
        </Route>
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </RoomsProvider>
  );
}

export default App;
