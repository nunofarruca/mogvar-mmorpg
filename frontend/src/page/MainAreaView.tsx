import React, { Component } from 'react';
import './MainAreaView.scss';
import LocationView from '../components/LocationView';

class MainAreaView extends Component {
  componentDidMount() {
    console.log('MainAreaView mounted');
  }

  render() {
    return (
      <div className="main-area" style={{ left: '20px' }}>
        <div className="main-area__left">
          <p>inventory</p>
        </div>
        <div className="main-area__center">
          <p>main display action 1</p>
          <LocationView />
        </div>
        <div className="main-area__right">
          <p>stats</p>
          <p>equipped gear</p>
        </div>
      </div>
    );
  }
}

export default MainAreaView;
