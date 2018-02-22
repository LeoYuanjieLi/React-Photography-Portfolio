import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './mainMenu.css';

export class MainMenu extends React.Component {
  render () {
    return (
      <Menu>
        <h2 className="icon photofolio-camera"></h2>            
        <h1>Sunjay Lal</h1>
        <a href="https://github.com/SunJLal" target="_blank" rel="noopener noreferrer"><h3 className="icon photofolio-github"> SunJLal</h3></a>
        <a href="https://twitter.com/SunJLal" target="_blank" rel="noopener noreferrer"><h3 className="icon photofolio-twitter"> @SunJLal</h3></a>
      
        
      </Menu>
    );
  }
}