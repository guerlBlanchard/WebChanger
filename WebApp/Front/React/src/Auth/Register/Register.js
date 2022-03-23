import React from "react";
import './Register.css';

export default class Register extends React.Component{
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className='Regiter'>
        <header className='Register-header'>
          <div className='Register-box'>
            <h1>Register</h1>
            <form className="Register-form">
              <input type='text' placeholder="Email"/>
              <input type='text' placeholder="Phone (optionnal)"/>
              <input type="text" placeholder='Username'/>
              <input type="password" placeholder='Password'/>
              <input type="password" placeholder="Confirm Password"/>
              <input type="submit" value="Register"/>
            </form>
          </div>
        </header>
      </div>
    );
  }
}