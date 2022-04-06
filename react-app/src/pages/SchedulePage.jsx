import { Header } from '../Components/Header';
import {SchedulingTable} from '../Components/SchedulingTable';

function SchedulePage() {
    return (
        <>
            <Header>

            </Header>
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
                                    <li className="active"> Зал №4 </li>
                                    <li> Зал №5 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <SchedulingTable>
                        
                    </SchedulingTable>
                </div>
            </section>
            {/* Class Time Section End */}
        </>
    );
}

export { SchedulePage };