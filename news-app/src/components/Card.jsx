import React from "react";

function Card({ title, description, url }) {
  return (
    <div className="card h-100 shadow-sm rounded-3 d-flex flex-column">
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-primary">{title}</h5>
        <p className="card-text text-muted flex-grow-1">{description}</p>
        <a
          href={url}
          className="btn btn-outline-primary mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to News
        </a>
      </div>
    </div>
  );
}

export default Card;
