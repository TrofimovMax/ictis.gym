import { useState } from 'react';
import shortid from 'shortid';

import { SchedulingTable } from '../Components/SchedulingTable/SchedulingTable';

import SHEDULE_QUERY from '../queries/shedule/schedule.js';
import Query from '../Components/Query';

function SchedulePage() {
    // Массив содержащий номера всех тренажёрных залов 
    const gymArray = ["4","5",];
    const FOURTH_GYM = "4";
    // два веб хука показывают, какая таблица выбрана 
    //  активной странице применяется стиль 
    const [stateGym4, setStateGym4] = useState('active');
    const [stateGym5, setStateGym5] = useState('');
    //этот хук показывает какая сейчас таблица выбрана
    const [currentGym, setcurrentGym] = useState(gymArray[0]);
    // временно не рабочиая функция состояния кнопки записи
    
    function changeNumberGym(clickedBtn) {
        if (clickedBtn === "4") {
            setcurrentGym(clickedBtn)
            setStateGym4('active');
            setStateGym5('');
        }
        if (clickedBtn === "5") {
            setcurrentGym(clickedBtn)
            setStateGym5('active');
            setStateGym4('');
        }
    }

    return (
        <>
        
            {/* Class Time Section Begin */}
            <section className="classtime-section class-time-table spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title">
                                <h2>Таблица записи</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="timetable-controls">
                                <ul>
                                    {
                                    gymArray.map((number) => {
                                        return (
                                            <li key={shortid.generate()} className={number === FOURTH_GYM ? stateGym4: stateGym5} 
                                            onClick={() => changeNumberGym(number)}> Зал №{number} </li>
                                        );
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* выбранную страницу прокидываю в пропсы, чтобы потом её отрендерить */}
                    <Query query={SHEDULE_QUERY} class_num={currentGym}>
                    {({ data: { schedules } }) => {
                    return( <SchedulingTable
                        schedules = {schedules}
                    >

                    </SchedulingTable>)
                    }}
                    </Query>
                </div>
            </section>
            {/* Class Time Section End */}
        </>
    );
}

export { SchedulePage };