import React, { Component } from 'react';

export class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>I'm question - answer me!</div>
                <input type="text" />
            </div>
        );
    }
}
