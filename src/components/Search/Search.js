import axios from 'axios';
import React, { Component } from 'react';
import HeroCard from '../HeroBracket/HeroCard';

import "./Search.css";

export default class Search extends Component {


    constructor(props){
        super(props);

        this.filterHeroes = this.filterHeroes.bind(this);

        this.state = {
            heroes: this.props.heroes,
            searchInp: ""
        }
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
                        const filterWord = this.state.searchInp.toLowerCase();

                        return heroName.includes(filterWord);
                    })
                });
                console.log(this.state.heroes);

            })

    };

    render() {
        return (
            <div>
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
            </div>
        )
    }
}
