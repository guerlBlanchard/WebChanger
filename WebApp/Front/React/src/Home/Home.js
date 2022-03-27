import React from 'react';
import './Home.css';

export default class Home extends React.Component {
  constructor (props) {
    super(props);
  }


  render() {
    return (
      <div className='Home'>
        <header className='Home-header'>
          <div className='Home-head-bar'>
          </div>
          <div className='Home-sidebar'>

          </div>
        </header>
      </div>
    );
  }
}