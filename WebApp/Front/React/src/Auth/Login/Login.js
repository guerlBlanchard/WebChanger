import React from 'react';
import './Login.css';
import axios from "axios";

export default class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.SubmitLogin = this.SubmitLogin.bind(this);
  }

  SubmitLogin(event) {
    axios({
      method: 'post',
      url:"http://localhost:8080/user/login",
      body: {
        username: this.state.username,
        password: this.state.password
      }
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className='Login'>
        <header className='Login-header'>
          <div className='Login-box'>
            <h1>Login</h1>
            <form onSubmit={this.SubmitLogin}>
              <input type="text" placeholder='Username' value={this.state.username} onChange={(event) => {this.setState({username: event.target.username})}}/>
              <input type="password" placeholder='Password' value={this.state.password} onChange={(event) => {this.setState({password: event.target.password})}}/>
              <input type="submit" value="Login"/>
              <input type="button" value="Register"/>
            </form>
          </div>
        </header>
      </div>
    );
  }
}