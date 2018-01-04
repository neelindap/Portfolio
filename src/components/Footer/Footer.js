import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <ul className="social-network social-circle">
                                <li><a href="mailto:indap.n@husky.neu.edu" className="icoEmail" title="Email" target="blank"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="https://github.com/neelindap" className="icoGit" target="blank" title="Github"><i className="fa fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/neelindap" className="icoLinkedin" target="blank" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;