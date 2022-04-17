import { useState } from 'react';

import {SchedulingTable} from '../Components/SchedulingTable/SchedulingTable';


function SchedulePage() {
    // два веб хука показывают, какая таблица выбрана,
    //  активной странице применяется стиль 
    const [numGym4, setNumGym4] = useState('active');
    const [numGym5, setNumGym5] = useState('');

    function changeNumberGym() {
        if(numGym4 === 'active'){
            setNumGym4('');
            setNumGym5('active');
        }
        else {
            setNumGym5('');
            setNumGym4('active');
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
                                    <li className={numGym4} onClick={changeNumberGym}> Зал №4 </li>
                                    <li className={numGym5} onClick={changeNumberGym}> Зал №5 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* выбранную страницу прокидываю в пропсы, чтобы потом её отрендерить */}
                    <SchedulingTable 
                    numGym4 = {numGym4}
                    numGym5 = {numGym5}
                    >
                        
                    </SchedulingTable>
                </div>
            </section>
            {/* Class Time Section End */}
        </>
    );
}

export { SchedulePage };