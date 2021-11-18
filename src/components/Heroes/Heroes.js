import axios from 'axios';
import React, { Component } from 'react';

import "./Heroes.css";

import HeroCard from '../HeroBracket/HeroCard';
import Pagination from '../Pagination/Pagination';

export default class Heroes extends Component {
    constructor(props) {
        super(props);

        this.filterHeroes = this.filterHeroes.bind(this);
        this.paginate = this.paginate.bind(this);

        this.state = {
            heroes: [],
            searchInp: "",
            currentPage: 1,
            heroesPerPage: 6,
            loading: false
        };
    };


    componentDidMount() {
        this.setState({loading: true});

        axios.get("http://localhost:4000/heroes")
            .then(res => {
                this.setState({
                    heroes: res.data
                });
                this.setState({loading: false});
            })
            .catch(err => console.log(err));
    };


    filterHeroes(e){
        e.preventDefault();
        this.setState({loading: true});

        axios.get("http://localhost:4000/heroes")
            .then(res => {
                if(this.state.searchInp === ""){
                    this.setState({loading: false});

                    return this.state.heroes;
                }

                this.setState({
                    heroes: res.data.filter(hero => {
                        const heroName = hero.name.toLowerCase();

                        return heroName.includes(this.state.searchInp.toLowerCase())
                    })
                });
                this.setState({loading: false});
            })

    };

    paginate(pageNumber){
        this.setState({currentPage: pageNumber})
    }


    render() {

        const indexOfLastHero = this.state.currentPage*this.state.heroesPerPage;
        const indexOfFirstHero = indexOfLastHero - this.state.heroesPerPage;
        const currentHeroes = this.state.heroes.slice(indexOfFirstHero, indexOfLastHero);

        console.log(currentHeroes);

        return (
            <div className="heroes-container">
                <h1>Heroes:</h1>
                {this.state.loading && <h2>Loading...</h2>}
                <form  className="form-container" onSubmit={this.filterHeroes}>
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
                    <button className="submit-btn" type="submit">Search</button>
                </form>
                <div className="row-contain">
                    {currentHeroes.map(hero => {
                        return <HeroCard heroes={currentHeroes} key={hero._id} {...hero} />
                    })}
                </div>
                <Pagination paginate={this.paginate} heroesPerPage={this.state.heroesPerPage} totalHeroes={this.state.heroes.length} />
            </div>
        );
    };
};
