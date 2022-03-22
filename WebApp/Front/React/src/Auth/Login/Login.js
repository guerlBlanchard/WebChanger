import React from 'react';
import './Login.css';

export default class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className='Login'>
        <header className='Login-header'>
          <div className='Login-box'>
            <h1>Login</h1>
            <form>
              <input type="text" placeholder='Username'/>
              <input type="password" placeholder='Password'/>
              <input type="submit" value="Login"/>
              <input type="button" value="Register"/>
            </form>
          </div>
        </header>
      </div>
    );
  }
}