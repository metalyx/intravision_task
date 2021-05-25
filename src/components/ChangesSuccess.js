import React, { Component } from 'react';
import '../css/request.css';

class ChangesSuccess extends Component {
    constructor(props) {
        super(props);


        this.handleClose = this.handleClose.bind(this);

        this.state = {
            isOpen: this.props.isOpen
        }
    }

    handleClose() {
        this.setState({
            isOpen: false
        })
    }

    render () {
        if(this.state.isOpen) {
            return (
                <div className="modal">
                    <div>
                        <h2>Готово!</h2>
                        <button onClick={this.handleClose}>Закрыть</button>
                    </div>
                </div>
            );
        }
        else {
            return <></>
        }
      
    }
}

export default ChangesSuccess;