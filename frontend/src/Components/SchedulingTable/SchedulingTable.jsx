import SchedulingLessonBtn  from '../SchedulingLessonBtn/SchedulingLessonBtn'

function SchedulingTable({ schedules }) {
    //const isFull = false;
    // этот массив мб нах не нужен, но если не хочешь переделывать цикл можешь оставить
    const dayWeekend = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    return (
        <>
            <div className="row">
                <div className="classtime-table">
                    <table>
                        <tbody>
                            {
                                // тут создаётся строка где первый столбец соответсвует масиву timeClasses
                                dayWeekend.map((day) => {
                                    return (
                                        <tr>
                                            <td><span>{day}</span></td>
                                            {
                                                schedules.data.map((schedule) => {
                                                    // здесь важное условие рендеринга, если у нас нет занятия на это время,
                                                    // то в блоке else есть рендеринг пустой клетки

                                                    if (schedule.attributes.schedule_day.data.attributes.name === day) {
                                                        return (
                                                            <>
                                                                <SchedulingLessonBtn
                                                                    schedule={schedule}>
                                                                </SchedulingLessonBtn>
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