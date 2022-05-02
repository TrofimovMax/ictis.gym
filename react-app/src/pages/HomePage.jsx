import { Slider } from '../Components/Slider';
import { Link } from 'react-router-dom';

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
                                <h3>ГРУППОВЫЕ КЛАССЫ</h3>
                                <p>
                                    Нам удаётся сохранять условия для совместной работы студентов в залах,
                                    чтобы не создавалось очередей
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-item set-bg" style={feature2}>
                                <h3>ИНДИВИДУАЛЬНЫЙ ПОДХОД</h3>
                                <p>
                                    Все студенты приходят с разным уровнем физической подготовки,
                                    и поэтому мы тчательно следим за нагрузкой для каждого студента
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-item set-bg" style={feature3}>
                                <h3>ПОЛЬЗА О ПОСЕЩЕНИЯ ТРЕНАЖЁРНОГО ЗАЛА</h3>
                                <p>
                                    Упражнения на тренажерах приносят организму огромную пользу. Благодаря систематическим тренировкам отмечаются следующие положительные изменения:
                                    Стимуляция кровообращения, снижение риска развития патологий сердца и сосудов, укрепление костных тканей.
                                </p>
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
                                    <Link to="/about" className="primary-btn class-btn">Узнать Больше</Link>
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
                                        <h2>Сделай правильный выбор</h2>
                                        <p>
                                            При строгом соблюдении рекомендаций наших инструкторов и правильности выполнения техник упражнений.
                                            Вы ускорите Ваш метаболизм и избавитесь от лишнего веса.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="classes-item set-bg" style={classes1}>
                                    <h4>Главное-сделать первый шаг</h4>
                                    <p>Мы поможем отвлечься от бесконечной учебы и провести психологическую разрядку.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="classes-item set-bg" style={classes2}>
                                    <h4>Тренажерные залы</h4>
                                    <p>
                                        Многообразия тренажеров для эфективной прокачки всего тела.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="classes-item set-bg" style={classes3}>
                                    <h4>Заряд Энергии</h4>
                                    <p>Повышение силовых показателей и выносливости.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="classes-item set-bg" style={classes4}>
                                    <h4>Баланс тела</h4>
                                    <p>Проработка всех групп мышечных тканей</p>
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