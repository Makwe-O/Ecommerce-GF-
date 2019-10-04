import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shoppage/shoppage";
import SignInPage from "./pages/signinpage/signinpage";
import SignUpPage from "./pages/signuppage/signuppage";
import "./App.css";
import Header from "./components/header/header";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfile } from "./utilities/firebase/firebase";
import { connect } from "react-redux";
import * as userActions from "./actions/user/userActions";
import { selectCurrentUser } from "./selectors/user/user";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: { id: snapshot.id, ...snapshot.data() }
          });
        });
      } else {
        setCurrentUser({
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <ToastContainer autoClose={5000} />
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInPage />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUpPage />
            }
          />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});
const mapDispatchToProps = {
  setCurrentUser: userActions.setCurrentUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
