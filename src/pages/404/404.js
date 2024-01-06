import React from 'react';
import './404.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <p className="not-found-text">404 Not Found</p>

      <Link className="not-found-link" to={'/'}>
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
