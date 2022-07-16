import { Button } from 'react-bootstrap';
import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import SCHEDULE_MUTATION from '../../queries/mutation/Schedule'
import axios from 'axios'

class BtnHandler extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.inClass){
            this.state = {
                switcher: 'ОТПИСАТЬСЯ',
                btnPressed: false,
                userNum: this.props.schedule.attributes.schedule_users.data.length
            };
        }
        else{
            this.state = {
                switcher: 'ЗАПИСАТЬСЯ',
                btnPressed: false,
                userNum: this.props.schedule.attributes.schedule_users.data.length
            };
        }
        
    };
    async handleSwitchBtn() {
        if (this.state.switcher === 'ЗАПИСАТЬСЯ') {
            this.props.userIds.push(localStorage.getItem("userId"))
            this.setState({ switcher: 'ОТПИСАТЬСЯ' });
            this.setState({userNum:this.state.userNum+1})
            
        } else{
            this.props.userIds.splice(this.props.userIds.indexOf(localStorage.getItem("userId")),1)
            this.setState({ switcher: 'ЗАПИСАТЬСЯ' });
            this.setState({userNum:this.state.userNum-1})
        }

        const {data} = await axios.put('http://localhost:1337/api/Schedules/'+this.props.schedule.id,{
            "data":{
                "schedule_users":this.props.userIds
            }
        })

    };
    
    render() {
        if (((this.props.schedule.attributes.schedule_users.data.length === 15 )&&!this.props.inClass)||!localStorage.getItem("userId")) {
            return (
                <>
                <td className="hover-bg ts-item">
                    <span>{this.props.schedule.attributes.schedule_time.data.attributes.class_time}</span>
                    {/* количестов народа 10/15 15/15 и так далее*/}
                    <h6>{this.state.userNum}/15</h6>
                    {/* условие рендеринга кнопки ЗАПИСАТЬСЯ по условию, что ты получишь из query.response*/}
                    
                    {/* {schedule.attributes.schedule_usrNum !== 15 ? <Button variant="outline-light" onClick={() => handleSwitchBtn(switcher, schedule)}>ЗАПИСАТЬСЯ</Button> : 
                                                                                                                    <Button variant="outline-light" onClick={() => handleSwitchBtn(switcher, schedule)}>ОТПИСАТЬСЯ</Button>} */}
                </td>
                
            </>
            )
        }
        else{
            return (
                <>
                    <td className="hover-bg ts-item">
                        <span>{this.props.schedule.attributes.schedule_time.data.attributes.class_time}</span>
                        {/* количестов народа 10/15 15/15 и так далее*/}
                        <h6>{this.state.userNum}/15</h6>
                        {/* условие рендеринга кнопки ЗАПИСАТЬСЯ по условию, что ты получишь из query.response*/}
                        <Button variant="outline-light" onClick={() => this.handleSwitchBtn()}>{this.state.switcher}</Button>
                        {/* {schedule.attributes.schedule_usrNum !== 15 ? <Button variant="outline-light" onClick={() => handleSwitchBtn(switcher, schedule)}>ЗАПИСАТЬСЯ</Button> : 
                                                                                                                        <Button variant="outline-light" onClick={() => handleSwitchBtn(switcher, schedule)}>ОТПИСАТЬСЯ</Button>} */}
                    </td>
                    
                </>
    
            )
        }
        
    }
}

// function schedule_mut(scheduleId, userIds){
//     const [schedule_mut] = useMutation(SCHEDULE_MUTATION, {
//         variables: {
//             id: scheduleId,
//             usrID: userIds
//         }
//     });
// }

//
function userInLesson(schedule_users) {
    var userIds = []
    var inClass = false
    if (schedule_users.data) {
        schedule_users.data.map((data) => {
            userIds.push(data.id)
            if (data.id === localStorage.getItem("userId")) {
                inClass = true
            }
        })
    }
    return [inClass, userIds]
}

// function SchedulingLessonBtn({ switcher, handleSwitchBtn, schedule, btnPressed }) {
function SchedulingLessonBtn({ schedule}) {
    
    const [inClass, userIds] = userInLesson(schedule.attributes.schedule_users)
    // if(localStorage.getItem("userId")){
    //     userIds.push(localStorage.getItem("userId"))
    // }
    // const [schedule_mut] = useMutation(SCHEDULE_MUTATION, {
    //     variables: {
    //         id: schedule.attributes.id,
    //         usrID: userIds
    //     },
    //     onCompleted:()=>{
    //         console.log("записался")
    //     }  
    // });
    return (
        <BtnHandler userIds={userIds} schedule={schedule} inClass={inClass}></BtnHandler>
    )
    
}

export default SchedulingLessonBtn;