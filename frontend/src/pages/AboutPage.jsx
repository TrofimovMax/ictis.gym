import aboutUs from '../img/about-us.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function AboutPage() {
    return (
        <>
            {/* Aboutus Section Begin */}
            <section className="aboutus-section spad">
                <div className="container">
                    <div className="aboutus-page-text">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 m-auto">
                                <div className="section-title">
                                    <h2>Кто мы и что мы делаем</h2>
                                    <p>
                                        Студенческий спортивный клуб Южного федерального университета был создан 4 марта 2014 года.
                                        Осенью того же года ССК ЮФУ вошел в состав ассоциации и стал активным членом развития студенческого спорта под эгидой АССК России.
                                        В вузе спортклуб занимается организацией и проведением спортивно-массовых мероприятий среди студентов
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img src={aboutUs} alt="" />
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-us">
                                    <h4>О нас</h4>
                                    <p>
                                        Кафедра осуществляет подготовку по элективным дисциплинампо физической культуре и
                                        спорту ("Атлетическая гимнастика", "Бадминтон", "Баскетбол", "Мини-футбол",
                                        "Оздоровительная гимнастика", "Парусный спорт", "Пулевая стельба", "Спортивная борьба",
                                        "Функциональный тренинг")и по дисциплине "Культура здоровья" для студентов, обучающихся
                                        по программам бакалавриата и специалитета.
                                    </p>
                                    <p>
                                        Реализуется многоуровневые дополнительные образовательные программы по бадминтону,
                                        баскетболу, бодибилдингу, волейболу, йоге, мини-футболу и пулевой стрельбе.
                                    </p>
                                    <p>
                                        Студенты ИТА ЮФУ, под руководством преподавателей кафедры физического воспитания,
                                        ежегодно становятся победителями и призерами спортивных соревнований городского,
                                        регионального и федерального уровней.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-quality">
                                    <h4>НАШИ ЦЕЛИ</h4>
                                    <p>Миссия кафедры физического воспитания УВЦ ЮФУ заключается в осуществлении процесса
                                        физического воспитания, результатом которого является подготовка специалистов нового формата,
                                        обладающих интегральными качествами личности:</p>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faCircleCheck} />Профессиональным здоровьем;</li>
                                        <li><FontAwesomeIcon icon={faCircleCheck} />готовностью к социальной адаптации, творческой
                                            активности и карьерному росту;</li>
                                        <li><FontAwesomeIcon icon={faCircleCheck} />способностью направленно применять разнообразные формы,
                                            средства и методы физической культуры и спорта для сохранения и укрепления здоровья;</li>
                                        <li><FontAwesomeIcon icon={faCircleCheck} />умением творчески использовать физкультурно-спортивную
                                            деятельность для достижения жизненных и профессиональных целей.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Aboutus Section End */}
        </>
    );
}

export { AboutPage };