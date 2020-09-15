import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './loginstyle.css';

const Login = () => {
  return (
    <React.Fragment>
      <div className="flex-container">
        <div className="flex-item">
          <div className="logincontainer">
            <h1>Welcome!</h1>
            <form method="POST" action="/auth/login">
              <div className="input">
                <p>Username</p>
                <div>
                  <input name="username" type="text"></input>
                </div>
                <p>Password</p>
                <div>
                  <input name="password" type="text"></input>
                </div>
                <input type="submit" value="login"></input>
              </div>
            </form>
          </div>

          <div className="registerbutton">
            <p>Don't have an account yet? </p>
            <Link to="/signup" className="btn btn-primary">
              Need to sign up?
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
