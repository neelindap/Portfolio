import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Modal extends Component {
    render() {
        return (
            <div id="projectModal" className="modal fade" role="dialog" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">{this.props.title}</h4>
                        </div>
                        <div className="modal-body">
                            {ReactHtmlParser(`${this.props.desc}`)}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Modal;