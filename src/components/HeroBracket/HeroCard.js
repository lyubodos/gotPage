import React, { Component } from 'react';

import "./HeroCard.css";

export default class HeroCard extends Component {

    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div className="grid-container">
                <h4>{this.props.name} </h4>
                <img className="hero-image"src={this.props.imageUrl} alt="hero"></img>
                <div>
                    <p>Age: <b>{this.props.age}</b></p>
                    <p>House: <b>{this.props.house}</b></p>
                    <img className="house-banner" src="" alt="banner"/>
                    <ul>
                        <li>
                            <i class="fas fa-fist-raised stats-icon"></i>

                            <h6 className="stats-container">Strength: {this.props.strength}</h6>
                        </li>

                        <li>
                            <i class="fas fa-heart stats-icon"></i>
                            <h6 className="stats-container">Stamina: {this.props.stamina}</h6>
                        </li>
                        <li>
                            <i class="fas fa-running stats-icon"></i>
                            <h6 className="stats-container">Agility: {this.props.agility}</h6>
                        </li>
                        <li>
                            <i class="fas fa-brain stats-icon"></i>
                            <h6 className="stats-container"> Intellect: {this.props.intellect}</h6>
                        </li>
                    </ul>
                    <button className="btn btn-dark">Details</button>
                </div>
            </div>
        )
    };
}
