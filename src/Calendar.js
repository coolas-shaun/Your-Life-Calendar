import {React} from "react";
import './Calendar.css'


function Calendar(props){
    let{numberOfWeeks,age} = props
    console.log(props)
    let totalWeeks = age*52;
    console.log('total weeks:'+totalWeeks)
    return <div className="calendar-container">
            {createWeeks(totalWeeks,numberOfWeeks).map(week=>{
                return week
            })}
        </div>
    

}

function  createWeeks(totalWeeks,weeks){
    let weeksArray = []
    let remainingWeeks = totalWeeks-weeks
    for(let i=0;i<totalWeeks;i++){
        let week = i+1>weeks?<li className="week"></li>:<li className="week used-week"></li>
        weeksArray.push(week)
    }

    return weeksArray
}

export default Calendar