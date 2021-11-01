import axios from 'axios';
import React, { Component } from 'react';

import HeroBracket from './HeroBracket/HeroBracket';
import HeroCard from './HeroBracket/HeroCard';

export default class Heroes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heroes: []
        }
    }

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

    heroesList() {
        return this.state.heroes.map(hero => {
            console.log(hero);
            <HeroCard key={hero._id} {...hero} />
        });
    };

    render() {
        return (
            <div>
                <h1>Heroes:</h1>
                <div>

                    {this.heroesList()}

                </div>
            </div>
        )
    }
}
