import React from 'react';
import { render } from 'react-dom';
import PhotoGallery from './photoGallery.js';
import { MainMenu } from './mainMenu.js';
import './fonts.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainMenu />
        <PhotoGallery />
      </div>
    )
  }
}
render(<App />, document.getElementById('app'));
