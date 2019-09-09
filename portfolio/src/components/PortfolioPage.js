import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = (props) => {
  console.log(props);
  return (
    <div>
      <p>Select my projects!</p>
      <Link to="/portfolio/1">Item 1</Link>
      <Link to="/portfolio/2">Item 2</Link>
    </div>
  );
}

export default PortfolioPage;
