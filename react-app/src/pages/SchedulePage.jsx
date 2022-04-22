import { useState } from 'react';

import { SchedulingTable } from '../Components/SchedulingTable/SchedulingTable';


function SchedulePage() {
    // два веб хука показывают, какая таблица выбрана 
    //  активной странице применяется стиль 
    const [stateGym4, setStateGym4] = useState('active');
    const [stateGym5, setStateGym5] = useState('');
    //этот хук показывает какая сейчас таблица выбрана
    const [currentGym, setcurrentGym] = useState("4");
    // временно не рабочиая функция состояния кнопки записи
    const [switcher, setSwitcher] = useState('ЗАПИСАТЬСЯ');

    const handleSwitchBtn = (switcher) => {
        if (switcher === 'ЗАПИСАТЬСЯ') {
            setSwitcher('ОТПИСАТЬСЯ');
        } else {
            setSwitcher('ЗАПИСАТЬСЯ');
        }
    }
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
                                    <li key={4} className={stateGym4} onClick={() => changeNumberGym("4")}> Зал №4 </li>
                                    <li key={5} className={stateGym5} onClick={() => changeNumberGym("5")}> Зал №5 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* выбранную страницу прокидываю в пропсы, чтобы потом её отрендерить */}
                    <SchedulingTable
                        switcher={switcher}
                        handleSwitchBtn={handleSwitchBtn}
                    >

                    </SchedulingTable>
                </div>
            </section>
            {/* Class Time Section End */}
        </>
    );
}

export { SchedulePage };