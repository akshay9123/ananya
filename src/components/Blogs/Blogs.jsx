import React from "react";
import "./Blogs.css";

const Blogs = ({ image, tag, date, title }) => {
  return (
    <div className="blog-card">
      <img src={image} alt="Blog" className="blog-image" />
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-tag">{tag}</span>
          <span className="blog-date">{date}</span>
        </div>
        <h3 className="blog-title">{title}</h3>
      </div>
    </div>
  );
};

export default Blogs;
