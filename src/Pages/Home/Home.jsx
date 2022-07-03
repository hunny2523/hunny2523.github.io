import { useContext } from "react";
import { useEffect } from "react";
import CardComponet from "../../Components/CardComponet"
import CreateComponent from "../../Components/CreateComponent";
import CurrentTimeComponent from "../../Components/CurrentTimeComponent";
import getReminders from "../../context/actions/getReminders";
import NavbarComponent from "../../Components/NavbarComponent";
import { reminderContext } from "../../context/reminderContext";

import useSound from 'use-sound';
import notification from "../../../src/notification.mp3"
import addNotification from 'react-push-notification';
export default function Home() {


  const { dispatch, reminders } = useContext(reminderContext);


  useEffect(() => {
    getReminders(dispatch);
  }, [])

  useEffect(() => {
    var timer = setInterval(() => setAlarm(), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });

 
  const buttonClick = (title,desc,time) => {
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
      const currentTime=date.toLocaleTimeString(('it-IT'))
      reminders && reminders.map((reminder) => {
        if (reminder.time === currentTime) {
          play();
          buttonClick(reminder.name,reminder.desc,reminder.time)
        }
      })
  }

  
  
  return (

    <div>
      <NavbarComponent />
      <CurrentTimeComponent />
      <h3 className="mt-4 text-center">My Reminders</h3>
      <div className="text-center m-3">
        <CreateComponent />
      </div>
      <CardComponet />
      {/* footer */}
    </div>
  )
}
