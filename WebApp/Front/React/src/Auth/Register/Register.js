import React from "react";
import './Register.css';

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

  }

  render() {
    return (
      <div className='Regiter'>
        <header className='Register-header'>
          <div className='Register-box'>
            <h1>Register</h1>
            <form className="Register-form">
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