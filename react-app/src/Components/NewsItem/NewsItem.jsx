import React from "react";
import "./NewsItem.css";

const NewsItem = ({ setActive, setImage, post: { title, content,
    imgUrl, categories, published_at } }) => {
    return (
        <div className="news-wrapper">
            <div className="news-item">
                <div className="image-info">
                    <img className="image" onClick={() => {
                        setActive(true);
                        setImage(imgUrl);
                    }} src={imgUrl} alt="post" />
                    <div className="date-category">
                        <h4> categories:<h6>{categories}</h6></h4>
                        <h6> date: {published_at}</h6>
                    </div>
                </div>
                <div className="news-text">
                    <h4 className="heading">{title}</h4>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export { NewsItem };