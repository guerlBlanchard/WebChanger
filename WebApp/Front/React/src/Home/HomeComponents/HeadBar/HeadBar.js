import React from "react";
import './HeadBar.css';

function HeadBar() {
  return (
      <div className="HeadBar">
        <div className="HeadBar-index">
        </div>
        <div className="HeadBar-account">
          <a href="http://localhost:3000/Login"><button>Login</button></a>
          <a href="http://localhost:3000/Register"><button>Register</button></a>
        </div>
      </div>
  )
}

export default HeadBar;