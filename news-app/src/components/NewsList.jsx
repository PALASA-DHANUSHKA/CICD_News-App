import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/NewsService";
import Card from "../components/Card";
import NewsItem from "./NewsItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Navbar";
import AdComponent from "./AdComponent";
import Footer from "./Footer";
// import tailwindcss from "@tailwindcss/vite";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews().then(setNews);
  }, []);

  return (
    <>
      <div className="div">
        <Navbar />
        <div className="container mt-4">
          <h2 className="text-center">Latest News</h2>
          <br></br>
          <div className="row">
            {news.map((article, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
              >
                <Card
                  title={article.title}
                  description={article.description}
                  url={article.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default NewsList;
