import React from "react";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shoppage/shoppage";
import SignInPage from "./pages/signinpage/signinpage";
import SignUpPage from "./pages/signuppage/signuppage";
import "./App.css";
import Header from "./components/header/header";
import { Switch, Route } from "react-router-dom";

const Hats = props => {
  console.log(props);
  return <h1>Hats {props.match.params.hatid}</h1>;
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/hats" component={Hats} />
        <Route path="/hats/:hatid" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
