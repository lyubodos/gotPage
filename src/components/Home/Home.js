import React, { Component } from 'react';

import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="container-main">
                <h1>Welcome to the GoT fanmade site!</h1>
                <div>
                    <img src="https://aniportalimages.s3.amazonaws.com/media/details/GOTTTT_showws.jpg" alt="got-photo"/>
                    <p className="main-para">This is a site providing basic information and stats for each of the GoT heroes and houses. The site's purpouse is to expand the knowledge regarding each of the GoT's universe identity and story
                    . The site will try to provide the best user experience for every newcomer and for every veteran in the GoT world. Each registered user will be able to try and add an additional story to the character's one, provided that he/she is adding a verified and legitimate information which is connection with the <b>Ice and Fire Novel</b>.</p>
                </div>
            </div>
        )
    }
}
