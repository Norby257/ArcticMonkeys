import React, { Component } from 'react';
import Albums from './Albums.json'
import Header from './components/Header'
import Footer from './components/Footer'
import AlbumCard from './components/AlbumCard'
import CoverPhoto from './components/CoverPhoto'
import './App.css'
;

class App extends Component {
  state = {
    Albums
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <CoverPhoto />
        {this.state.Albums.map(album => (
          <AlbumCard
          id={album.id}
          key={album.id}
          image={album.image} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
