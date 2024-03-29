import React from "react";
import { blog } from "../../assets/data/data";
import "./blog.css";
import {
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiOutlineTags,
} from "react-icons/ai";
import { Link } from "react-router-dom";
export const Card = () => {
  return (
    <section className="blog">
      <div className="container grid3">
        {blog.map((item) => (
          <div className="box boxItems" key={item.id}>
            <Link to={`/details/${item.id}`} className="link">
              <h3>{item.title}</h3>
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
            </Link>
            <div className="details">
              <div className="tag">
                <AiOutlineTags className="icons"></AiOutlineTags>
                <a href="/">#{item.category}</a>
              </div>
              <Link to={`/details/${item.id}`} className="link">
                <h3>{item.title}</h3>
              </Link>
              <p>{item.desc.slice(0, 180)}...</p>
              <div className="date">
                <AiOutlineClockCircle className="icon" />{" "}
                <label htmlFor="">{item.date}</label>
                <AiOutlineComment className="icon" />{" "}
                <label htmlFor="">27</label>
                <AiOutlineShareAlt className="icon" />{" "}
                <label htmlFor="">SHARE</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
