import React, { useState } from 'react';
import './Auth.css';
// import { ApiManager } from '../../../ApiManager/ApiManager';

export default function Auth() {
  const [box, setBox] = useState(0);

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
    switch (box) {
      case 0:
        return (<LoginBox/>);
    
      case 1:
        return (<RegisterBox/>);
      default:
        break;
    }
    return (<div></div>);
  }

  return (
    <div className='Auth'>

    <header className='Auth-header'>

      <div className='Auth-box'>

        <div className='Auth-title'><h1>Login</h1></div>

        <div className='Auth-form'>

          <BoxContent/>

        </div>
        
      </div>

    </header>

  </div>
  );
}

// export default class Login extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: ''
//     };
//     this.SubmitLogin = this.SubmitLogin.bind(this);

//   }

//   SubmitLogin(event) {
//     event.preventDefault();
//   }

//   LoginBox() {

//   }

//   render() {
//     return (
//       <div className='Login'>

//         <header className='Login-header'>

//           <div className='Login-box'>

//             <div className='Login-title'><h1>Login</h1></div>

//             <form onSubmit={this.SubmitLogin}>
//               <input type="text" placeholder='Username' value={this.state.username} onChange={(event) => {this.setState({username: event.target.username})}}/>

//               <input type="password" placeholder='Password' value={this.state.password} onChange={(event) => {this.setState({password: event.target.password})}}/>

//               <div className='Login-forgot_password'>Forgot password?</div>
              
//               <input type="submit" value="Login" onClick={this.SubmitLogin}/>

//               <a href="http://localhost:3000/Register"><input type="button" value="Register"/></a>
//             </form>

//           </div>

//         </header>

//       </div>
//     );
//   }
// }