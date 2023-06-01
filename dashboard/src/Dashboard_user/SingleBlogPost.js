import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style/blogpost.css"; // Import the CSS file for styling

const SingleBlogPost = ({ title, content, category }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/getBlog")
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {blog.map((item) => (
        <>
          <div
            className="blog-post"
            style={{ marginTop: "10px", marginLeft: "20px", width: "1000px" }}
          >
            <div
              style={{
                display: "inline-block",
              }}
              className="blog-post-category"
            >
              {item.category}
            </div>
            <div
              style={{
                display: "inline-block",
                marginLeft: "850px",
                marginTop: "0px",
                fontWeight: "bolder",
              }}
              className="blog-post-date"
            >
              Date: {item.date}
            </div>
            <h2
              style={{ fontSize: "40px", color: "red" }}
              className="blog-post-title"
            >
              {item.title}
            </h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
        </>
      ))}
    </>
  );
};

export default SingleBlogPost;
