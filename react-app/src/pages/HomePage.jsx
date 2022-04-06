import { Slider } from '../Components/Slider';

import {HeaderHome} from '../Components/HeaderHome';

import homeAbout from '../img/home-about.jpg';
import featureImage from '../img/feature/feature-1.jpg';
import featureImage2 from '../img/feature/feature-2.jpg';
import featureImage3 from '../img/feature/feature-3.jpg';
import classesImage from '../img/classes/class-1.jpg';
import classesImage2 from '../img/classes/class-2.jpg';
import classesImage3 from '../img/classes/class-3.jpg';
import classesImage4 from '../img/classes/class-4.jpg';

function HomePage() {
    const feature1 = {
        backgroundImage: `url(${featureImage})`,
    }
    const feature2 = {
        backgroundImage: `url(${featureImage2})`,
    }
    const feature3 = {
        backgroundImage: `url(${featureImage3})`,
    }
    const classes1 = {
        backgroundImage: `url(${classesImage})`,
    }
    const classes2 = {
        backgroundImage: `url(${classesImage2})`,
    }
    const classes3 = {
        backgroundImage: `url(${classesImage3})`,
    }
    const classes4 = {
        backgroundImage: `url(${classesImage4})`,
    }

    return (
        <>
            <>
                <HeaderHome>

                </HeaderHome>
                <section className="hero-section">
                    <Slider>

                    </Slider>
                </section>
            </>
            {/* Feature Section Begin */}
            <section className="feature-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-item set-bg" style={feature1}>
                                <h3>GROUP CLASSES</h3>
                                <p>The Sopranos manages to address the biases<br /> and benefits of therapy</p>
                                <a href="http://sportsfedu.ru/main" className="primary-btn f-btn">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-item set-bg" style={feature2}>
                                <h3>PERSONAL TRAINING</h3>
                                <p>Strep throat is very common during the flu<br /> seasons and it can be preceded</p>
                                <a href="http://sportsfedu.ru/main" className="primary-btn f-btn">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-item set-bg" style={feature3}>
                                <h3>Sports Nutrition</h3>
                                <p>A Human Being’s right to life implies his right to<br /> have the free and unrestricted</p>
                                <a href="http://sportsfedu.ru/main" className="primary-btn f-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section End */}
            <>
                {/* About Section Begin */}
                <section className="home-about spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-text">
                                    <h2>ДОБРО ПОЖАЛОВАТЬ В ССК ИТА ЮФУ</h2>
                                    <p className="short-details">ictis.gym создан, чтобы помочь студентам узнавать полезную информацию,
                                     свежие новости</p>
                                    <p className="long-details">Поход в тренажерный зал — лучший способ отвлечься от рутины и избавится от стресса. </p>
                                    <a href="http://sportsfedu.ru/main" className="primary-btn about-btn">Learn More</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src={homeAbout} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section End */}
                {/* Classes Section Begin */}
                <section className="classes-section">
                    <div className="class-title set-bg" data-setbg="img/classes-title-bg.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto text-center">
                                    <div className="section-title pl-lg-4 pr-lg-4 pl-0 pr-0">
                                        <h2>Choose Your Program</h2>
                                        <p>Our Crossfit experts can help you discover new training techniques and exercises that offer a dynamic and efficient full-body workout.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="classes-item set-bg" style={classes1}>
                                    <h4>Crossfit Level 1</h4>
                                    <p>Sufferers around the globe will be happy to hear that there are sleep apnea remedies.</p>
                                    <a href="http://sportsfedu.ru/main" className="primary-btn class-btn">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="classes-item set-bg" style={classes2}>
                                    <h4>BootCamp</h4>
                                    <p>The oil, also called linseed oil, has many industrial uses – it is an important ingredient
                                    </p>
                                    <a href="http://sportsfedu.ru/main" className="primary-btn class-btn">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="classes-item set-bg" style={classes3}>
                                    <h4>Energy Blast</h4>
                                    <p>It is a very common occurrence like cold or fever depending upon your lifestyle. </p>
                                    <a href="http://sportsfedu.ru/main" className="primary-btn class-btn">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="classes-item set-bg" style={classes4}>
                                    <h4>CLASSIC BODY BALANCE</h4>
                                    <p>The procedure is usually a preferred alternative to photorefractive keratectomy,</p>
                                    <a href="http://sportsfedu.ru/main" className="primary-btn class-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Classes Section End */}
            </>
        </>
    );
}

export { HomePage };