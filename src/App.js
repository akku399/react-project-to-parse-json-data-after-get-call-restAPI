import React, { Component } from 'react';
import ConferenceDetails from './Components/getConferenceDetailsComponent/ConferenceDetails'
import Search from './Components/searchComponent/Search'
import HeaderComponent from './Components/HearderComponent/HeaderComponent.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <ConferenceDetails/>
      </div>
    );
  }
}

export default App;
