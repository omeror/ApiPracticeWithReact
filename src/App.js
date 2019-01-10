import React, { Component } from 'react';
import RandomMeme from './Components/RandomMeme';
import CatPic from './Components/CatPics'
import NavBar from './Components/NavBar'
import './App.css'
class App extends Component {
 
    render() { 
        return ( 
            
            <div className="wrapper" >
                <NavBar/>       <br/>
                <div className="row">
                    <p className="col-md-2"/>
                    <RandomMeme className="col-md-4"/>
                    <p className="col-md-2"/>
                    <CatPic className="col-md-4"/>
                </div>    
            </div>
      );
    }
  }
  
  export default App;
