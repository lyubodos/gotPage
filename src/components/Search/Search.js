import React, { Component } from 'react';

import "./Search.css";

export default class Search extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <label>Search heroes </label>
                    <input
                        className="input-search"
                        type="text"
                        id="hero-search"
                        placeholder="Input hero name"
                        name="hero-s"
                        />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}
