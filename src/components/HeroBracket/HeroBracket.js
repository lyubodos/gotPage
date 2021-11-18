import React, { Component } from 'react';

import axios from "axios";
import "./HeroBracket.css"

export default class HeroBracket extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            hero: []
        }
    }

    componentDidMount() {
        this.setState({ loading: true });

        const urlParts = window.location.href.split("/");
        const heroId = urlParts[urlParts.length - 1];
        

        axios.get(`http://localhost:4000/heroes/${heroId}`)
            .then(res => {
                this.setState({
                    hero: res.data
                });
            })
            .catch(err => console.log(err));
        this.setState({loading: false})

    };



    render() {
        return (

            <div className="hero-bracket">
              {this.state.loading && <h2>Loading...</h2>}

              <h1>{this.state.hero.name}</h1>
              <img className="hero-bracket-img" src={this.state.hero.imageUrl}/>
              
              <h3 className="hero-bracket-age" >Age: {this.state.hero.age}</h3>
              <h4>House: {this.state.hero.house}</h4>
              <img alt="banner-img" />
               <p className="hero-bracket-desc">Description field.</p>

            </div>

        )
    }
}
