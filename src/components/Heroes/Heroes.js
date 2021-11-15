import axios from 'axios';
import React, { Component } from 'react';

import "./Heroes.css";

import HeroCard from '../HeroBracket/HeroCard';
import Search from '../Search/Search';

export default class Heroes extends Component {
    constructor(props) {
        super(props);

        this.filterHeroes = this.filterHeroes.bind(this);

        this.state = {
            heroes: [],
            searchInp: ""
        };
    };

    componentDidMount() {
        axios.get("http://localhost:4000/heroes")
            .then(res => {
                this.setState({
                    heroes: res.data
                })
            })
            .catch(err => console.log(err));
    };

    filterHeroes(e){
        e.preventDefault();

        axios.get("http://localhost:4000/heroes")
            .then(res => {
                if(this.state.searchInp === ""){
                    return this.state.heroes;
                }

                this.setState({
                    heroes: res.data.filter(hero => {
                        const heroName = hero.name.toLowerCase();

                        return heroName.includes(this.state.searchInp.toLowerCase())
                    })
                });
                console.log(this.state.heroes);

            })

    };


    render() {
        return (
            <div className="heroes-container">
                <h1>Heroes:</h1>
                <form onSubmit={this.filterHeroes}>
                    <label>Search heroes </label>
                    <input
                        className="input-search"
                        type="text"
                        id="hero-search"
                        placeholder="Input hero name"
                        name="hero-s"
                        onChange={e => {
                            this.setState({searchInp: e.target.value});
                        }} 
                        />
                    <button type="submit">Search</button>
                </form>
                <div className="row-contain">
                    {this.state.heroes.map(hero => {
                        return <HeroCard key={hero._id} {...hero} />
                    })}
                </div>
            </div>
        );
    };
};
