import React from 'react';
import { Link } from 'react-router';

export default function Main(props) {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>

      {React.cloneElement({ ...props }.children, { ...props })}
    </div>
  );
}
