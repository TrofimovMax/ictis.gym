import React from "react";
import "./NewsItem.css";

const NewsItem = ({ post: { title, body,
    imgUrl, author }, index }) => {
    return (
        <div className="col-lg-4 col-sm-6 mix crossfit workout">
            <div className=".blog-item">
                <img className="image" src={imgUrl} alt="post" />
                <div className="blog-text">
                    <h4 className="heading">{title}</h4>
                    <p>{body}</p>
                    <h5>categories: {author}</h5> 
                </div>
            </div>
        </div>
    );
};

export { NewsItem };