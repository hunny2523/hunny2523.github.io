import { useContext } from "react";
import { useEffect } from "react";
import CurrentTimeComponent from "../../Components/CurrentTimeComponent";
import NavbarComponent from "../../Components/NavbarComponent";
import { reminderContext } from "../../context/RTContext";
import TaskComponent from "../../Components/TASK/TaskComponent";
import getReminders from "../../context/actions/REMINDERS/getReminders";
import getTask from "../../context/actions/TASK/getTask";
import CardComponet from "../../Components/REMINDERS/CardComponet";
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
      if (+Date.parse(`${date.toDateString()} ${reminder.time}:10 GMT+0530 (India Standard Time)`) < Date.now()) {
        await dispatch({ type: "DELETE_REMINDER", payload: reminder.id });
      }
    })
  }


  return (
    <div>
      <NavbarComponent />
      <CurrentTimeComponent />
      <div className="row">
        <div className="col-12 col-md-6">
          <CardComponet />
        </div>
        <div className="col-12 col-md-6">
          <TaskComponent />
        </div>
      </div>
      {/* footer */}
    </div>
  )
}
