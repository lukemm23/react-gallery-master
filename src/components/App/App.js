import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    gallery: [],
  }

  componentDidMount() {
    this.getGallery();
  }

  getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        this.setState({
          gallery: response.data
        }, () => {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.warn(err);
      })
  }

  addLike = (id, status) => {
    axios({
      method: 'PUT',
      url: '/gallery/like/' + id,
      data: {status},
    })
      .then((response) => {
        this.getGallery();
      })
      .catch((err) => {
        console.warn(err);
      })
  }

  render() {

    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Favorite Motorcycles</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList addLike={this.addLike} gallery={this.state.gallery} />
      </div>
    );
  }
}


export default App;
