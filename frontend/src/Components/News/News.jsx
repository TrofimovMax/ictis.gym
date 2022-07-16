import React from "react";
import './News.css';
import { NewsItem } from '../NewsItem/NewsItem';
import { Categories } from "../Categories/Categories";
import { Popup } from '../Popup/Popup';

const News = ({ active, setActive, popupImg, setImage, articles }) => {

    return (
        <section className="blog-section blog-page spad">
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title">
                                <h2>НОВОСТИ</h2>
                            </div>
                        </div>
                    </div>
                    <Categories />
                </div>
                <div className="container">
                    <div className="news-container">
                        {articles.data.map((article) => (
                            <NewsItem
                                article={article}
                                setActive={setActive}
                                setImage={setImage}
                            />
                        ))}
                    </div>
                </div>
                <Popup
                    active={active}
                    setActive={setActive}
                >
                    <img className="popup-image" onClick={() => setActive(true)} src={popupImg} alt="Тут должна быть картинка ^,,^" />
                </Popup>
            </>
        </section>
    );
};

export { News };