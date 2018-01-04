import React, { Component } from 'react';
import ProjectCard from './Card/Card';
import ProjectModal from './Modal/Modal'


class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: props.projects,
            title: null,
            desc: null
        }
    }

    selectedModal(id) {
        let modalData = this.props.projects;

        modalData.map((d) => {
            if (d.id == id) {
                this.setState({
                    title: d.title,
                    desc: d.desc
                })
            }
        })
    }

    render() {
        return (
            <div id="projects">
                <div className="container">
                    <div className="row">
                        <div className="page-header">
                            <h1>Projects</h1>
                        </div>
                    </div>
                </div>

                <div className="container well">
                    <ProjectCard projects={this.props.projects} modal={this.selectedModal.bind(this)} />
                    <ProjectModal title={this.state.title} desc={this.state.desc} />
                </div>
            </div>
        );
    }
}

export default Project;