import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../utilities/firebase/firebase";
class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Email or Password is incorrect.");
      } else {
        alert("An error occured", error);
      }
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
        <div className="form-style">
          <form onSubmit={this.handleSubmit}>
            <h3 className="text-center">Sign In Here</h3>
            <div className="form-group">
              <label for="exampleInputEmail1">Email </label>
              <input
                type="email"
                name="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" class="btn btn-secondary">
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center">
            <h6> Or </h6>
            <button onClick={signInWithGoogle} class="btn btn-secondary">
              Sign In With Google
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
