import React, { Component } from 'react';
import HTMLImg from '../../static/images/HCJ.png';
import ReactImg from '../../static/images/react.png';
import jQueryImg from '../../static/images/jquery.png';
import AngularImg from '../../static/images/Angular.png';

import './About.css';

class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="page-header">
                            <h1>About Me</h1>
                        </div>
                    </div>
                </div>

                <div className="container well">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="aboutText">
                                <p>Software engineer with more than 5 years of extensive work experience in full-stack web development, using Java, HTML,
							CSS, Javscript, Oracle, MySQL and REST APIs. Also experienced in Angular.js, Node.js, React.js, jQuery, Bootstrap,
							Highcharts and D3.js. I have also built mobile applications(Android and iOS) using react native and iOS applications(Objective-C
							and Swift).</p>
                                <p>Highly skilled in debugging and troubleshooting of complex applications, resulting in better analysis and bring about
							performance improvements. Proven track record of high quality and timely deliverable and client focused software development.
						</p>
                                <p>Currently pursuing Master’s degree in Information Systems at Northeastern University. Looking to leverage past work
							experience with deeper concepts of software development. </p>
                            </div>
                        </div>
                        <div className="col-md-6 skills-text">
                            <h3>Skills</h3>
                            <hr />
                            <b>Programming Languages:</b> Java, JavaScript, HTML5, CSS3, PHP, Objective C, Swift, Python
					<br /><b>Development Software:</b> Eclipse, XCode, Git, JIRA, HP ALM, SVN, Visual Code
					<br /><b>Platforms:</b> Windows, Linux, Mac OSX, iOS
					<br /><b>Technologies:</b> jQuery, Bootstrap, Angular.js, RESTful API, React.js, Node.js, Firebase, D3.js
					<br /><b>Applications/ Web Servers:</b> JBoss, WAMP stack, MEAN stack
					<br /><b>Database:</b> MySQL, Oracle
				</div>
                        <div className="col-md-6 skills-cloud">
                            <div id="myCanvasContainer">
                                <canvas id="myCanvas">
                                    <p>In Internet Explorer versions up to 8, things inside the canvas are inaccessible!</p>
                                </canvas>
                            </div>
                        </div>
                        <div id="tags">
                            <ul>
                                <li><a href="#">HTML5</a></li>
                                <li><a href="#">CSS3</a></li>
                                <li><a href="#">Javascript(ES6)</a></li>
                                <li><a href="#">jQuery</a></li>
                                <li><a href="#">Angular.js</a></li>
                                <li><a href="#">React.js</a></li>
                                <li><a href="#">React-Native</a></li>
                                <li><a href="#">Ionic3</a></li>
                                <li><a href="#">Bootstrap3</a></li>
                                <li><a href="#">D3.js</a></li>
                                <li><a href="#">Node.js</a></li>
                                <li><a href="#">Swift</a></li>
                                <li><a href="#">Python</a></li>
                                <li><a href="#">JIRA</a></li>
                                <li><a href="#">Firebase</a></li>
                                <li><a href="#">MySQL</a></li>
                            </ul>
                        </div>
                        <br />
                        <div className="col-xs-12">
                            <div className="aboutText">
                                <p>I am highly skilled in .. </p>
                            </div>
                        </div>

                        <div className="col-xs-6 col-sm-3">
                            <img className="img-responsive" src={HTMLImg} alt="HTML5 CSS3 JavaScript" />
                        </div>

                        <div className="col-xs-6 col-sm-3">
                            <img className="img-responsive" src={ReactImg} alt="React/React-Native" />
                        </div>

                        <div className="col-xs-6 col-sm-3">
                            <img className="img-responsive" src={jQueryImg} alt="jQuery" />
                        </div>

                        <div className="col-xs-6 col-sm-3">
                            <img className="img-responsive" src={AngularImg} alt="Angular.js" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;