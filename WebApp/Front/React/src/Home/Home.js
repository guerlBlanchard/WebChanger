import React from 'react';
import './Home.css';
import HeadBar from './HomeComponents/HeadBar/HeadBar';
import SideBar from './HomeComponents/SideBar/SideBar';

export default class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  HeadBar() {
      return (
          <div>
            <button>
                Subcribe
            </button>
          </div>
      );
  }

  render() {
    return (
      <div className='Home'>
        <header className='Home-header'>
          <HeadBar/>
          <SideBar/>
        </header>
      </div>
    );
  }
}