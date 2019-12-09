import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    gallery: [],
    enteredData: {
      path: '',
      description: '',
      likes: 0,
    }
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

  delete = (id) => {
    axios({
      method: 'DELETE',
      url: '/gallery/' + id
    })
    .then((response) => {
      console.log(response);
      this.getGallery();
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  post() {
    axios({
      method: 'POST',
      url: '/gallery',
      data: this.state.enteredData
    })
    .then((response) => {
      console.log(response);
      this.getGallery();
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  //EVENT HANDLERS
  onAdd = (event) => {
    // submit data to server
    console.log('clicked');
    this.post();
  }

  onChangeInput = (event, inputKey) => {
    console.log(inputKey);
    this.setState({
      enteredData: {
        ...this.state.enteredData,
        [inputKey]: event.target.value
      }
    });
  }

  render() {

    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Favorite Motorcycle Images</h1>
        </header>
        <br />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" onClick={this.onAdd}>Add To Gallery</span>
          </div>
          <input
            className="form-control"
            type="text"
            placeholder="Enter a Image Link"
            onChange={(event) => this.onChangeInput(event, 'path')}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Enter a Description"
            onChange={(event) => this.onChangeInput(event, 'description')}
          />
            
          
        </div>
        <p>Gallery goes here</p>
        <GalleryList addLike={this.addLike} gallery={this.state.gallery} delete={this.delete} />
      </div>
    );
  }
}


export default App;
