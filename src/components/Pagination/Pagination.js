import React, { Component } from 'react';
import {Link } from 'react-router-dom';

export default class Pagination extends Component {

    constructor(props){
        super(props);
      
    };


    render() {
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(this.props.totalHeroes/this.props.heroesPerPage); i++) {
            pageNumbers.push(i);
        };

        return (
            <nav className="pagination-container">
                <ul className="pagination">
                    {
                    pageNumbers.map(el => {
                      return  <li key={el} className="page-item">
                                <Link onClick={() => this.props.paginate(el)} to={`/heroes`} className="page-link">{el}</Link>
                        </li>
                    })}
                </ul>   
            </nav>
        );
    }
}
