import React, { Component } from 'react';

class RandomMeme extends Component {
    state = { 
        memeImg: ''
     }

    showMeme = (event) =>
    {
        event.preventDefault();
        const url = `https://api.imgflip.com/get_memes?`
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({memeImg: data.data.memes[Math.floor(Math.random() * 100) + 1  ].url}))
            .catch(e => console.log('error', e));
            console.log()
    }

    render() { 
        return ( 
          <div >
            <div className="container">
              <form onSubmit={this.showMeme}>
                <button  >SHOW ME A Meme!</button>
              </form>
              <br/>
              <img src={this.state.memeImg} height="200" alt = {this.state.memeImg}/>
            </div>
            <p>By pressing the "SHOW ME A Meme!", the app gets the 
              current top 100 memes from the api and 
              shows 1 meme at a time at random </p>
          </div>
      );
    }
  }
  
  export default RandomMeme;
