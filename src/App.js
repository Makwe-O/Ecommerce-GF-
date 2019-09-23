import React from "react";
import Homepage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";

const Hats = props => {
  console.log(props);
  return <h1>Hats {props.match.params.hatid}</h1>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hats} />
        <Route path="/hats/:hatid" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
