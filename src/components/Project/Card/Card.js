import React, { Component } from 'react';
import FlipCard from 'react-flipcard-2';
import './Card.css';

let images = require.context('../../../static/images', true);

class Card extends Component {

    openModal(id){
        this.props.modal(id)
    }

    render() {
        return (
            <div className="card-container">
                {this.props.projects.map((project) =>
                    <FlipCard key={project.id}>
                        <div>
                            <h5>{project.title}</h5>
                            <img alt="" src={images(`./${project.imgPath}`)} />
                        </div>
                        <div>
                            <p>{project.back}</p>
                            <button type="button" onClick={this.openModal.bind(this, `${project.id}`)} className="btn btn-success center-block" data-toggle="modal" data-target="#projectModal">More info</button>
                        </div>
                    </FlipCard>
                )}
            </div>
        )
    }
}

export default Card;