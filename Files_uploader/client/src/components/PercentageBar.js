import React from "react";
import PropTypes from "prop-types";

const PercentageBar = ({ percentage }) => {
  return (
    <div className="progress">
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

PercentageBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default PercentageBar;
