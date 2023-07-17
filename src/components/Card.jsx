import React from "react";
import { Link, useLocation } from "react-router-dom";

const Card = ({ id, name, image }) => {
  let currentPath = useLocation().pathname.split("/")[1];
  return (
    <div className="col-3 mb-2">
      <div className="card">
        <div className="card-header">{name}</div>
        <div className="card-body">
          <p>{id}</p>
          <img width={150} src={image} alt="not found" />
          {currentPath == "details" ? (
            <span className="badge bg-info">Price Here</span>
          ) : (
            <Link className="mt-3 btn btn-sm btn-info" to={`/details/${id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
