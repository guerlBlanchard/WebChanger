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
      url:"http://localhost:8080/user/register",
      body: {
        mail: this.state.mail,
        phone: this.state.phone,
        username: this.state.username,
        password: this.state.password
      }
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className='Regiter'>
        <header className='Register-header'>
          
        </header>
      </div>
    );
  }
}