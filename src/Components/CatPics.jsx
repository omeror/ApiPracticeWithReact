import React, { Component } from 'react';

class CatPics extends Component {
    state = {
        img: ''
      }
    
  
      handleSubmit = (event) => {
        event.preventDefault();
        const url = `https://api.thecatapi.com/v1/images/search?${this.state.term}`;
        fetch(url)
          .then(response => response.json())
          .then(data => this.setState({ img: data[0].url}))
          .catch(e => console.log('error', e));
  
      }
    
      render() {
        return (
          <div >
            <form onSubmit={this.handleSubmit}>
              <button>SHOW ME A CAT!</button>
            </form>
            <br/>
            <img src={this.state.img} height="200" alt={this.state.alt} />
            <p>By pressing the "SHOW ME A Cat!" the app gets a 
              random cat picture or gif from the Api </p>
          </div>
        );
      }
    }
 
export default CatPics;
