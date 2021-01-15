import React from 'react';
import "../../styles/Error.css";

const Error404 = () => {
    return (
        <div>
            <p className="error-code">404</p>
            <p className="error-text">Not found</p>
            <button className="error-button" onClick={() => window.location.pathname = '/'}>Take me to the Home page</button>
        </div>
    );
}

export default Error404;