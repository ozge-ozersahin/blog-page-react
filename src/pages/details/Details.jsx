import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { blog } from "../../assets/data/data";
import "./details.css";

export const Details = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
  }, []);

  return (
    <>
      {blogs ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img src={blogs.cover} alt="" />
            </div>
          </div>
          <div>
            <h1>{blogs.title}</h1>
            <p>{blogs.desc}</p>
          </div>
        </section>
      ) : null}
    </>
  );
};
