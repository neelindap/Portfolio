import React, { Component } from 'react';
import './Home.css';
import Role from './Role/Role';

import Particles from 'react-particles-js';
import ParticlesParam from './particles.json'

class Home extends Component {
   
    render() {
        const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        return (
            <div id="home">
                { !isMobileDevice ? <Particles params={ParticlesParam}/> : ''}
                <div className="homeContainer">
                    <div className="homeText">
                        <h1 className="cd-headline">
                            <span>Hi, I am Neel Indap</span>
                            <span className="cd-words-wrapper">
                                <Role />
                            </span>
                        </h1>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Home;