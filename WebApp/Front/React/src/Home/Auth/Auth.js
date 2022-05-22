import React, { useState } from 'react';
import './Auth.css';
// import { ApiManager } from '../../../ApiManager/ApiManager';

export default function Auth() {
  const [box, setBox] = useState(false);

  function LoginBox() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (            
            <form onSubmit={console.log("coucou")}>

              <input type="text" placeholder='Username' value={username} onChange={(event) => {setUsername(event.target.username)}}/>

              <input type="password" placeholder='Password' value={password} onChange={(event) => {setPassword(event.target.password)}}/>

              <input type="submit" value="Login" onClick={console.log("salut")}/>

            </form>
    );
  }

  function RegisterBox() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    return (
        <form onSubmit={console.log("register submited")}>
          <input type='text' placeholder="Email" value={email} onChange={(event) => {setEmail({mail: event.target.mail})}}/>

          <input type='text' placeholder="Phone (optionnal)" value={phone}  onChange={(event) => {setPhone({phone: event.target.phone})}}/>

          <input type="text" placeholder='Username' value={username}  onChange={(event) => {setUsername({username: event.target.username})}}/>

          <input type="password" placeholder='Password' value={password}  onChange={(event) => {setPassword({password: event.target.password})}}/>

          <input type="password" placeholder="Confirm Password" value={cpassword}  onChange={(event) => {setCPassword({cpassword: event.target.cpassword})}}/>

          <input type="submit" value="Register"/>
        </form>
    );
  }

  function BoxContent() {
    console.log(box);
    if (!box) {
      return (<LoginBox/>);
    }
    return (<RegisterBox/>);
  }

  return (
    <div className='Auth'>

    <header className='Auth-header'>

      <div className='Auth-box'>

        <div className='Auth-switch'>

          <input type='checkbox' className='Auth-checkbox' id='Slider-switch'/>

          <label className='Auth-switch-label' for="Slider-switch" onClick={() => setBox(!box)}>

            <span className='Auth-switch-inner'></span>

            <span className='Auth-switch-bubble'></span>

          </label>

        </div>

        <div className='Auth-form'>

          <BoxContent/>

        </div>
        
      </div>

    </header>

  </div>
  );
}