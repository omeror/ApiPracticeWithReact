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
            <NavBar/> <br/>
            <div className= "container-fluid">
                <table>
                <col width="33%"/>
                <col width="33%"/>
                <col width="33%"/>
                    <td>
                    <RandomMeme />
                    </td>
                    <td>
                    <CatPic />
                    </td>
                    <td>
                    <TvShowInfo />
                    </td>
                </table> 
                <br/>
            </div>
        </div>
        );
    }
}
export default App;
