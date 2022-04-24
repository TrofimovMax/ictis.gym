import { Button } from 'react-bootstrap';

function SchedulingTable({ switcher, handleSwitchBtn, schedules}) {
    const isFull = false; // удалить нах ибо это ты будешь получать с сервера
    // Что может быть лучше шести пятниц на неделе? только 6 воскресений
    // этот массив мб нах не нужен, но если не хочешь переделывать цикл можешь оставить
    const dayWeekend = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    // этот массив удобен, можно легко заполнить самый левый столбец с примерными промежутками
    // // хз нужны ли они вообще?  
    // const timeClasses = ["9:00 - 10:30", "10:30 - 12:00",
    //     "12:00 - 13:30", "13:30 - 15:00", "15:00 - 16:30", "16:30 - 18:00",
    //     "18:00 - 19:30", "19:30 - 21:00"];

    return (
        <>
            <div className="row">
                <div className="classtime-table">
                    <table>
                        <tbody>
                            {
                                // тут создаётся строка где первый столбец соответсвует масиву timeClasses
                                 dayWeekend.map((day) =>{
                                    return (
                                        <tr> 
                                            <td><span>{day}</span></td>
                                            {
                                                schedules.data.map((schedule) =>  {
                                                    // здесь важное условие рендеринга, если у нас нет занятия на это время,
                                                    // то в блоке else есть рендеринг пустой клетки

                                                    if (schedule.attributes.schedule_day.data.attributes.name === day) {
                                                        return (
                                                            <>
                                                                <td className="hover-bg ts-item">
                                                                    <span>{schedule.attributes.schedule_time.data.attributes.class_time}</span>
                                                                    {/* количестов народа 10/15 15/15 и так далее*/}
                                                                    <h6>{schedule.attributes.schedule_usrNum}/15</h6>
                                                                    {/* условие рендеринга кнопки ЗАПИСАТЬСЯ по условию, что ты получишь из query.response*/}
                                                                    {!schedule.attributes.schedule_isFull ? <Button variant="outline-light" onClick={() => handleSwitchBtn(switcher)}>{switcher}</Button> : <div></div>}
                                                                </td>
                                                            </>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <>
                                                            </>
                                                        )
                                                    }
                                                })
                                            }
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export { SchedulingTable };