import React from "react";
import './Register.css';
import axios from "axios";

export default class Register extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      mail: '',
      phone: '',
      username: '',
      password: '',
      cpassword: ''
    }
    this.SubmitRegister = this.SubmitRegister.bind(this);
  }

  SubmitRegister(event) {
    if (this.state.password != this.state.cpassword)
      return;
    axios({
      method: 'post',
      url:"http://localhost/user/register",
      body: {
        mail: this.state.mail,
        phone: this.state.phone,
        username: this.state.username,
        password: this.state.password
      }
    });
  }

  render() {
    return (
      <div className='Regiter'>
        <header className='Register-header'>
          <div className='Register-box'>
            <h1>Register</h1>
            <form className="Register-form" onSubmit={this.SubmitRegister}>
              <input type='text' placeholder="Email" value={this.state.mail} onChange={(event) => {this.setState({mail: event.target.mail})}}/>
              <input type='text' placeholder="Phone (optionnal)" value={this.state.phone}  onChange={(event) => {this.setState({phone: event.target.phone})}}/>
              <input type="text" placeholder='Username' value={this.state.username}  onChange={(event) => {this.setState({username: event.target.username})}}/>
              <input type="password" placeholder='Password' value={this.state.password}  onChange={(event) => {this.setState({password: event.target.password})}}/>
              <input type="password" placeholder="Confirm Password" value={this.state.cpassword}  onChange={(event) => {this.setState({cpassword: event.target.cpassword})}}/>
              <input type="submit" value="Register"/>
            </form>
          </div>
        </header>
      </div>
    );
  }
}