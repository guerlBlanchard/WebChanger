import './Home.css'
import {React, useState} from 'react';

export default function Home(props) {

    function Header() {
        return (
            <div>

            </div>
        );
    }

    function SideBar() {
        return (
            <div>

            </div>
        );
    }

    return (
        <div className='Home'>
            <div className='Home-header'>
                <Header/>
            </div>
            <div className='Home-sidebar'>
                <SideBar/>
            </div>
        </div>
    );
}