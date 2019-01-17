import React, { Component } from 'react';
import RandomMeme from './Components/RandomMeme';
import CatPic from './Components/CatPics'
import NavBar from './Components/NavBar'
import './App.css'
import TvShowInfo from './Components/TvShowInfo';

class App extends Component {
 
    render() { 
        return ( 
            
            <div className="wrapper" >
                <NavBar/>       <br/>
                <div className="row">
                   
                    <RandomMeme className="col-md-4"/>
                   
                    <CatPic className="col-md-4"/>
                    <TvShowInfo className="col-md-4"/>
                </div> 
                <br/>
                
            </div>
      );
    }
  }
  
  export default App;
