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
      url:"http://localhost:8080/user/",
      body: {
        username: this.state.username,
        password: this.state.password
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className='Login'>

        <header className='Login-header'>

          <div className='Login-box'>

            <div className='Login-title'><h1>Login</h1></div>

            <form onSubmit={this.SubmitLogin}>
              <input type="text" placeholder='Username' value={this.state.username} onChange={(event) => {this.setState({username: event.target.username})}}/>

              <input type="password" placeholder='Password' value={this.state.password} onChange={(event) => {this.setState({password: event.target.password})}}/>

              <div className='Login-forgot_password'>Forgot password?</div>
              
              <input type="submit" value="Login" onClick={this.SubmitLogin}/>

              <a href="http://localhost:3000/Register"><input type="button" value="Register"/></a>
            </form>

          </div>

        </header>

      </div>
    );
  }
}