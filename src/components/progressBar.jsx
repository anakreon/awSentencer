import React, { Component } from 'react';
import LinearProgress from '@material/react-linear-progress';

export class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <LinearProgress
                progress={0.4}
            />
        );
    }
}
