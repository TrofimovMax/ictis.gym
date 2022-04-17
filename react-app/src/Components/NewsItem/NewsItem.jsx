import React from "react";
import "./NewsItem.css";

const NewsItem = ({ post: { title, body,
    imgUrl, categories, date } }) => {
    return (
        <div className="news-wrapper">
            <div className="news-item">
                <div className="image-info">
                    <img className="image" src={imgUrl} alt="post" />
                    <div className="date-category">
                        <h4> categories:<h6>{categories}</h6></h4>
                        <h6> date: {date}</h6>
                    </div>
                </div>
                <div className="news-text">
                    <h4 className="heading">{title}</h4>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export { NewsItem };