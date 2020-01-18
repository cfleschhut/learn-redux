import React from 'react';
import { Link } from 'react-router';

export default function Main({ children }) {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>

      {children}
    </div>
  );
}
