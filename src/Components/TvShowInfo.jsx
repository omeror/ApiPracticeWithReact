import React, { Component } from 'react';

class TvShowInfo extends Component {
    state = { 
        show:'',
        img: null,
        error: "Show does no exist in the API"
     }
     SubmitShowName =(event) =>{
         this.setState({show: event.target.value});
     }

    SubmitForInfo = (event) =>{

        event.preventDefault();
        const url  = ` https://www.episodate.com/api/show-details?q=${this.state.show.replace(/\s+/g, '-')}`
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({img: data.tvShow.image_path}))
            

    }

    render() { 
        return ( <div>
                    <form onSubmit={this.SubmitForInfo}>
                        <input type ="text" value = {this.state.show} onChange={this.SubmitShowName}/>
                        <button>Get info</button>
                       
                    </form>
                    <br/>
                    {/* Below is saying if image is not null then show pic else show */}
                    {this.state.img != null &&  <img src = {this.state.img} alt="tv show pic" height="400"/> }
                    {this.state.img === undefined && <p>{this.state.error}</p>}
                    <br/>
                    <p>Search a tv show in the and The episodate API will return the image </p>

                    
                </div> 
        );
    }
}
 
export default TvShowInfo;
