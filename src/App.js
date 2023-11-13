import { useRef, useState } from "react";
import CalculateWeeks from "./utils/CalculateWeeks";
import Calendar from "./Calendar";
import "./App.css";

// let weeks = 0
let dateOfBirth = ""
function App() {

const [age, setAge] = useState(90)
const [calendar,setCalendar] = useState(false)
const dobValue = useRef(0)
const [weeks,setWeeks] = useState(0)
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
  return (
    <div className="App">
      <h1>Life Calendar</h1>
      <div className="header-section">
        <form action="" method="GET" onSubmit={sendData}>
          <div className="input-section">
            <label htmlFor="age-input">Age:</label>
            <input type="number" name="" id="age-input" value={age} onChange={(e)=>{
              setAge(e.target.value)
            }}/>
            <span></span>
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
    </div>
  );
}

export default App;
