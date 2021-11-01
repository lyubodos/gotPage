import React, { Component } from 'react'

export default class HeroCard extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                
                 <h2>Name: {this.props.name}</h2>
               
             </div>
        )
    }
}
