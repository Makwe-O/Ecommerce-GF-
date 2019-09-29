import React, { Component } from 'react';
import { auth, createUserProfile } from '../../utilities/firebase/firebase'
class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async e => {
        const { displayName, email, password, confirmPassword } = this.state
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Password and Confirm Password does not match')
        } else {

            try {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfile(user, { displayName })
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })

            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email already exists')
                }
            }
        }
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <>

                <div className="form-style">
                    <form onSubmit={this.handleSubmit}>
                        <h3 className="text-center">Sign Up Here</h3>
                        <div className="form-group">
                            <label>Display Name </label>
                            <input
                                type="text"
                                name="displayName"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter Display Name"
                                value={this.state.displayName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email </label>
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
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                class="form-control"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                class="form-control"
                                placeholder="Enter Password Again"
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" class="btn btn-secondary">
                                Sign Up
              </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <h6> Or </h6>
                        <button class="btn btn-secondary">
                            Sign Up With Google
            </button>
                    </div>
                </div>
            </>
        );
    }
}

export default SignUp;