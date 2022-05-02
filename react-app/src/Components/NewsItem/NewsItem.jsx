import React from "react";
import "./NewsItem.css";

import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

const NewsItem = ({article, setActive, setImage}) => {
    if (article) {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? article.attributes.image.data.attributes.url
            : process.env.REACT_APP_BACKEND_URL +
            article.attributes.image.data.attributes.url;

        return (
            <div className="news-wrapper">
                <div className="news-item">
                    <div className="image-info">
                        <img className="image" onClick={() => {
                            setActive(true);
                            setImage(imageUrl);
                        }} src={imageUrl} alt="post" />
                        <div className="date-category">
                            <h4> categories:<p>{article.attributes.category.data.attributes.name}</p></h4>
                            <h6>
                                <Moment format="MMM Do YYYY">
                                    {article.attributes.published_at}
                                </Moment> 
                            </h6>
                        </div>
                    </div>
                    <div className="news-text">
                        <h4 className="heading">{article.attributes.title}</h4>
                        <ReactMarkdown>
                            {article.attributes.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        );
    }
};

export { NewsItem };