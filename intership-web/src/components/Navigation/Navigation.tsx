import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/organization">organization</Link>
      <Link to="/employee">employee</Link>
      <Link to="/division">division</Link>
    </nav>
  );
};
