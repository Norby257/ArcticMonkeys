import React, { Component } from 'react';
import Albums from './Albums.json'
import Header from './components/Header'
import AlbumCard from './components/AlbumCard'
import logo from './logo.svg';
import './App.css'
;

class App extends Component {
  state = {
    Albums
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Header />
        {/* {this.state.Albums.map(album => (
          <AlbumCard
          id={album.id}
          key={album.id}
          image={album.image} />
        ))} */}
      </div>
    );
  }
}

export default App;
