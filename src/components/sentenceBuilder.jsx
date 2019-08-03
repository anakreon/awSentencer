import React, { Component } from 'react';

export class SentenceBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: 'adsf asdf adsf adsf'
        };
    }
    render() {
        return <div>{this.state.sentence}</div>;
    }
}
