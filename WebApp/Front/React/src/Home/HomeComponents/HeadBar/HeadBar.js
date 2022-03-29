import React from "react";
import './HeadBar.css';

const HeadBar = () => {
    return (
        <div className="HeadBar">
            <div className="HeadBar-index">

            </div>
            <div className="HeadBar-account">
                <a href="">
                    <button>Login</button>
                </a>
                <button>Register</button>
            </div>
        </div>
    )
}

export default HeadBar;