import axios from 'axios';
import React, { Component } from 'react';

import "./Heroes.css";

import HeroCard from '../HeroBracket/HeroCard';

export default class Heroes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heroes: []
        };
    };

    componentDidMount() {
        axios.get("http://localhost:4000/heroes")
            .then(res => {
                console.log(res.data)
                this.setState({
                    heroes: res.data
                })
            })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="heroes-container">
                <h1>Heroes:</h1>
                <div className="row-contain">
                    {this.state.heroes.map(hero => {
                        return <HeroCard key={hero._id} {...hero} />
                    })}
                </div>
            </div>
        );
    };
};
