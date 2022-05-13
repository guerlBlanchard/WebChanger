import React, { useState } from 'react';
import './Login.css';
// import { ApiManager } from '../../../ApiManager/ApiManager';

export default function Login() {
  const [box, setBox] = useState(0);

  function LoginBox() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
      <div className='Login-box'>

        <div className='Login-title'><h1>Login</h1></div>

        <form onSubmit={console.log("coucou")}>
          <input type="text" placeholder='Username' value={username} onChange={(event) => {setUsername(event.target.username)}}/>

          <input type="password" placeholder='Password' value={password} onChange={(event) => {setUsername(event.target.password)}}/>

          <div className='Login-forgot_password'>Forgot password?</div>

          <input type="submit" value="Login" onClick={console.log("salut")}/>

          <input type="button" value="Register" onClick={console.log("salut")}/>
        </form>

      </div>

    );
  }

  function BoxContent() {
    console.log(box);
    switch (box) {
      case 0:
        return (<LoginBox/>);
    
      default:
        break;
    }
    return (<div></div>);
  }

  return (
    <div className='Login'>

    <header className='Login-header'>

      <BoxContent/>

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