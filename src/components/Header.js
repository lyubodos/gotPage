import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {



    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="navbar-item"><Link to="/heroes" className="nav-link">Heroes</Link></li>
                        <li className="navbar-item"><Link to="/houses" className="nav-link">Houses</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
