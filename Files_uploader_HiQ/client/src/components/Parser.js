import React from "react";
import PropTypes from "prop-types";

const Parser = ({ e }) => {
  return (
    <div className="row mt-5">
      <div className="col-md-12 mt-auto">
        <ul>
          {files.map((file) => (
            <li key={uploadedFile.fileName}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Parser.propTypes = {
  e: PropTypes.data.isRequired,
};

export default Parser;
