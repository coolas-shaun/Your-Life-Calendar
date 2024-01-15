import { useRef, useState } from "react";
import CalculateWeeks from "./utils/CalculateWeeks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion,faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import Calendar from "./Calendar";
import "./App.css";

// let weeks = 0
let dateOfBirth = ""
function App() {

const age = 90
const [calendar,setCalendar] = useState(false)
const dobValue = useRef(0)
const icon = useRef(0)
const [weeks,setWeeks] = useState(0)
const [help,setHelp] = useState(false)
// console.log(dobValue&&'true')

const sendData = (event)=>{
  event.preventDefault()
  console.log(dobValue.current.value==="")
  console.log(age)
  dateOfBirth = dobValue.current.value
  dobValue.current.value = null
  console.log(dateOfBirth);
  setWeeks(CalculateWeeks(dateOfBirth))
  console.log(weeks);
  setCalendar(true)
}

const showHelp = ()=>{
  console.log(icon.current);
  if (icon.current.icon === 'faCircleQuestion'){
    icon.current.icon = 'aCircleXmark'
  }else{
    icon.current.icon = 'faCircleQuestion'
  }
  setHelp(!(help))
}
  return (
    <div className="App">
      <h1>Life Calendar</h1>
      {help&&
      <div className="note">
        <p>This app will take DoB to calculate the number of weeks you have used up and how many weeks are remaining in your life.</p>
      </div>}
      {help?<FontAwesomeIcon className="help-btn" onClick={showHelp} ref={icon} icon={faCircleXmark} style={{backgroundColor:"black", color:"white", borderColor:"white",position:"fixed",bottom:"10px",right:"5px",height:"2rem",width:"2rem"}} />:<FontAwesomeIcon className="help-btn" onClick={showHelp} ref={icon} icon={faCircleQuestion} style={{backgroundColor:"black", color:"white", borderColor:"white",position:"fixed",bottom:"10px",right:"5px",height:"2rem",width:"2rem"}} />}
      <div className="header-section">
        <form action="" method="GET" onSubmit={sendData}>
          <div className="input-section">
            {/* <label htmlFor="age-input">Age:</label> */}
            {/* <input type="number" name="" id="age-input" value={age} onChange={(e)=>{
              setAge(e.target.value)
            }}/>
            <span></span> */}
            <label htmlFor="dob-input">DoB:</label>
            <input type="date" name="" id="dob-input" ref={dobValue} />
          </div>
          <button type="submit">Go</button>
        </form>
      </div>
      <div className="calendar-section">
        {calendar&&<Calendar 
          numberOfWeeks = {weeks}
          age = {age}
        />}
        {/* <Calendar 
          numberOfWeeks = {weeks}
          age = {age}
        />} */}
      </div>
      {/* <FontAwesomeIcon icon="fa-regular fa-circle-question" style={{color: "#ffffff",}} /> */}
    </div>
    
  );
}

export default App;
