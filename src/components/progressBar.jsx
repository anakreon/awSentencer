import React from 'react';
import LinearProgress from '@material/react-linear-progress';
import PropTypes from 'prop-types';

const ProgressBar = ({ progress }) => {
    return (
        <LinearProgress
            progress={progress}
        />
    );
};

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired
};

export default ProgressBar;