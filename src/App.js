
import React from "react";
import "./App.css";
//Import route and our components
import { Route, Switch } from "react-router-dom";
import Currencies from "./Pages/Currencies.js"
import Price from "./Pages/Price.js"
import Main from "./Pages/Main.js"
import Nav from "./Components/Nav.js";

// coinapi key = 74D6408A-6977-412F-B6B0-D40F47943A7D

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
      {/* this is added to "switch" between routes completely, so main isn't constantly displayed.  */}
      <Switch>
        {/* use "exact" to specify that only this will direct us to main. otherwise using "switch" will only render main. */}
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
        {/* note that this route is formatted differently than the /currencies route. IT's all inside the <Route /> tag. */}
        <Route path="/price/:symbol"
        render={(routerProps) => <Price {...routerProps} />} 
        />
      </Switch>
    </div>
  );
}

export default App;
