import React, { Component } from 'react';
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shoppage/shoppage";
import SignInPage from "./pages/signinpage/signinpage";
import SignUpPage from "./pages/signuppage/signuppage";
import "./App.css";
import Header from "./components/header/header";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfile } from './utilities/firebase/firebase'


class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfile(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.state
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    );
  }
}


export default App;
