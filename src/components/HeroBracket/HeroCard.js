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
                 <div>
                    <p>Age: <b>{this.props.age}</b></p>
                    <p>House: <b>{this.props.house}</b></p>
                    <ul>
                        <li>
                            Strength: {this.props.strength}
                        </li>
                        <li>
                            Stamina: {this.props.stamina}
                        </li>
                        <li>
                            Agility: {this.props.agility}
                        </li>
                        <li>
                            Intellect: {this.props.intellect}
                        </li>
                    </ul>
                 </div>
             </div>
        )
    };
}
