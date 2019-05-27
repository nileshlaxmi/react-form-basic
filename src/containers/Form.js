import React, { Component, Fragment } from 'react';
import { FormConstants } from '../constant';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            value: ''
        }
    }

    inputChangeEvent = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState({
            value: this.state.text,
        })
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <p>{FormConstants.bodyTitle}</p>
                    <label>Name:&nbsp;
                        <input type="text" onChange={this.inputChangeEvent} />
                    </label>

                    <input type="submit" onChange={this.inputChangeEvent} />
                    <p>{this.state.value}</p>
                </form>

            </Fragment>
        );
    }
}

export default Form;