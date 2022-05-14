import React from "react";
import './HeadBar.css';
import {FaHome} from 'react-icons/fa';

function HeadBar() {
  return (
      <div className="HeadBar">
        <div className="HeadBar-index">
          <FaHome className="homeIcon"/>
        </div>
        <div className="HeadBar-account">
          <a href="http://localhost:3000/Login"><button>Login</button></a>
        </div>
      </div>
  )
}

export default HeadBar;