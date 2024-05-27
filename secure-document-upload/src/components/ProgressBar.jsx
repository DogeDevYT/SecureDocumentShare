import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/styles/ProgressBar.module.css'

const ProgressBar = ({ progress=0, height='20px', color='blue', backgroundColor='#e0e0df' }) => {
  const progressStyle = {
    width: `${progress}%`,
    height: height,
    backgroundColor: color,
  };

  const containerStyle = {
    height: height,
    backgroundColor: backgroundColor,
  };

  return (
    <div className={styles.progressBarContainer} style={containerStyle}>
      <div className={styles.progressBar} style={progressStyle}></div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default ProgressBar;
