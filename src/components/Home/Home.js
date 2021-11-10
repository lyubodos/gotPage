import React, { Component } from 'react';

import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="container-main">
                <h1>Welcome to the GoT fanmade site!</h1>
                <div>
                    <img src="https://aniportalimages.s3.amazonaws.com/media/details/GOTTTT_showws.jpg" alt="got-photo"/>
                </div>
            </div>
        )
    }
}
