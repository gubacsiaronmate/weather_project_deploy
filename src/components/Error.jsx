import React from 'react';
import PropTypes from 'prop-types';

function Error({ message }) {
    return (
        <div className="alert alert-danger" role="alert">
            ⚠️ <strong>Error:</strong> {message}
        </div>
    );
}

Error.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Error;
