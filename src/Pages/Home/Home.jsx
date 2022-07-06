import { useContext } from "react";
import { useEffect } from "react";
import CurrentTimeComponent from "../../Components/CurrentTimeComponent";

import NavbarComponent from "../../Components/NavbarComponent";
import { reminderContext } from "../../context/RTContext";
import OneSignal from 'react-onesignal';
import useSound from 'use-sound';
import notification from "../../../src/notification.mp3"
import addNotification from 'react-push-notification';
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
    var timer = setInterval(() => setAlarm(), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });


  const buttonClick = (title, desc, time) => {
    addNotification({
      title: `Reminder: ${title}`,
      subtitle: `Description: ${desc}`,
      message: `Hey Honey It's ${time}`,
      theme: 'darkblue',
      closeButton: 'Go away',
      duration: 10000,
      native: true // when using native, your OS will handle theming.
    });
  };

  const [play] = useSound(notification);
  const setAlarm = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString(('it-IT'))
    reminders && reminders.map((reminder) => {
      if (reminder.time.concat(":00") === currentTime) {
        play();
        buttonClick(reminder.name, reminder.desc, reminder.time)
      }
    })
  }

  // const handleClick=()=>{
  //   OneSignal.sendTag("tag","react").then(
  //   console.log("tagged"))
  // }


  return (
    <div>
      <NavbarComponent />
      <CurrentTimeComponent />
      <div className="row">
        <div className="col-12 col-md-6">
          <CardComponet />
        </div>
        <div className="col-12 col-md-6">
          <TaskComponent/>
        </div>
      </div>
      {/* footer */}
    </div>
  )
}
