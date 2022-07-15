import { useContext } from "react";
import { useEffect } from "react";
import CurrentTimeComponent from "../../Components/CurrentTimeComponent";
import NavbarComponent from "../../Components/NavbarComponent";
import { reminderContext } from "../../context/RTContext";
import TaskComponent from "../../Components/TASK/TaskComponent";
import getReminders from "../../context/actions/REMINDERS/getReminders";
import getTask from "../../context/actions/TASK/getTask";
import CardComponet from "../../Components/REMINDERS/CardComponent";
import BoxComponent from "../../Components/BoxComponent";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function Home() {
  const { dispatch, reminders } = useContext(reminderContext);
  useEffect(() => {
    getReminders(dispatch);
    getTask(dispatch);
  }, [])

  useEffect(() => {
    var timer = setInterval(() => removeReminder(), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });


  const removeReminder = () => {
    const date = new Date();
    reminders && reminders.map(async (reminder) => {
      // console.log("today date", Date.now());
      // console.log("reminder date", +Date.parse(`${reminder.time}`));
      if (+Date.parse(`${reminder.time}`) < Date.now()) {
        await dispatch({ type: "DELETE_REMINDER", payload: reminder.id });
      }
    })
  }


  return (
    <div className="w-full">
      <Router>
        <NavbarComponent />
        <CurrentTimeComponent />
        <div className="md:flex md:mx-auto ">
          <div className="md:w-5/12  lg:px-12 md:px-4  border-r-2">
            <BoxComponent />
          </div>
          <div className="md:w-7/12 overflow-auto" id="rightBoxHeight">
            <Routes>
              <Route exact path="/tasks" element={< TaskComponent />}></Route>
              <Route exact path="/reminders" element={< CardComponet />}></Route>
              <Route exact path="/" element={< CardComponet />}></Route>
              <Route exact path="/all" element={[< CardComponet />, <TaskComponent />]}></Route>
              <Route exact path="/today" element={< CardComponet today={"today"} />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}
