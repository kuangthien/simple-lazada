import React from "react";
import { Link } from 'react-router-dom';

const Home = () => (
  <p className="text-center">
    <Link
      className="btn btn-primary btn-large"
      to={{
        pathname: `/products`
      }}
    >
      Products
    </Link>
  </p>
);
export default Home;
