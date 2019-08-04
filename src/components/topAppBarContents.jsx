import React, { Component } from 'react';
import {
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';
  import MaterialIcon from '@material/react-material-icon';

const TopAppBarContents = ({ appName, onIconClick }) => {
    return (
        <TopAppBarRow className="top-app-bar">
            <TopAppBarSection align="start">
                <TopAppBarTitle className="app-name">{appName}</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align="end" role="toolbar">
                <TopAppBarIcon actionItem tabIndex={0}>
                <MaterialIcon 
                    aria-label="print page" 
                    hasRipple 
                    icon="code" 
                    onClick={onIconClick}
                />
                </TopAppBarIcon>
            </TopAppBarSection>
        </TopAppBarRow>
    );
}

export default TopAppBarContents;