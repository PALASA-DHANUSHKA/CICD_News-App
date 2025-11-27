import React from "react";

const NewsItem = ({ article }) => {
  return (
    <div>
      <h3 className="NewsTilte">{article.title}</h3>
      <p>{article.description}</p>
      <p>
        <strong>Source:</strong> {article.source}
      </p>
    </div>
  );
};

export default NewsItem;
