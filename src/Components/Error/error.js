import React from "react";
import Navbar from "../Navbar/navbar";
import { Link } from "react-router-dom";
import "./error.css"

const Error = () => {
  return (
    <>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <span class="display-1 d-block">404</span>
            <div class="mb-4 lead">
              The page you are looking for was not found.
            </div>
            <Link to="/" class="btn">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
