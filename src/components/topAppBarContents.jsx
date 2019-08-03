import React, { Component } from 'react';
import {
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';
  import MaterialIcon from '@material/react-material-icon';

export class TopAppBarContents extends Component {
    constructor(props) {
        super(props);
        this.openGithubPage = this.openGithubPage.bind(this);
    }
    openGithubPage () {
        window.open('https://github.com/anakreon/awSentencer');
    }
    render() { 
        return (
            <TopAppBarRow className="top-app-bar">
                <TopAppBarSection align="start">
                    <TopAppBarTitle className="app-name">Sentencer</TopAppBarTitle>
                </TopAppBarSection>
                <TopAppBarSection align="end" role="toolbar">
                    <TopAppBarIcon actionItem tabIndex={0}>
                    <MaterialIcon 
                        aria-label="print page" 
                        hasRipple 
                        icon="code" 
                        onClick={this.openGithubPage}
                    />
                    </TopAppBarIcon>
                </TopAppBarSection>
            </TopAppBarRow>
        );
    }
}
