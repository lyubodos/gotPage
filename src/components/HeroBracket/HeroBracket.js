import React, { Component } from 'react';

import axios from "axios";
import HeroCard from './HeroCard';

export default class HeroBracket extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            heroes: []
        }
    }

    componentDidMount() {
        this.setState({ loading: true});

        axios.get("http://localhost:4000/heroes")
            .then(res => {
                console.log(this.state.loading)
                this.setState({
                    loading: false,
                    heroes: res.data,
                    
                })
            })
            .catch(err => console.log(err));
    };

    heroesList() {

    };

    render() {
        return (

            <div>
                {this.state.loading ? <h1>Loading....</h1> : ""}
                {this.state.heroes.map(hero => {
                    console.log(hero);
                return <HeroCard key={hero._id} {...hero} />
                }
            )}

            </div>

        )
    }
}
