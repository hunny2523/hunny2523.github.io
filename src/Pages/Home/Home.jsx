import { useContext } from "react";
import { useEffect } from "react";
import CardComponet from "../../Components/CardComponet"
import CreateComponent from "../../Components/CreateComponent";
import CurrentTimeComponent from "../../Components/CurrentTimeComponent";
import getReminders from "../../context/actions/getReminders";
import NavbarComponent from "../../Components/NavbarComponent";
import { reminderContext } from "../../context/reminderContext";
import { useState } from "react";
import Cards from "../../Components/cards";
import getTimeFromReminders from "../../Components/getTimeFromReminders";
import Alert from "../../Components/AlertComponent";


export default function Home() {


  const { dispatch, reminders, time } = useContext(reminderContext);


  useEffect(() => {
    getReminders(dispatch);
  }, [])


  // const currentTime = date.toLocaleTimeString(('it-IT'))
  // console.log("current time" + currentTime);

  useEffect(() => {
    var timer = setInterval(() => setAlarm(), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });


  const [alerts, setAlerts] = useState();
  const showAlert = (message, type) => {
    setAlerts({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setAlerts(null);
    }, 2000);
  };

  const setAlarm = () => {
      const date = new Date();
      const currentTime=date.toLocaleTimeString(('it-IT'))
      time.map((time) => {
        if (time === currentTime) {
          console.log("time" + time)
          alert("its time")
        }
      })
  }


  return (

    <div>
      <NavbarComponent />
      <Alert alerts={alerts}/>
      <CurrentTimeComponent />
      <h3 className="mt-5 text-center">My Reminders</h3>
      <div className="text-center">
        <CreateComponent showAlert={showAlert}/>
      </div>
      <CardComponet showAlert={showAlert}/>
      {/* footer */}
    </div>
  )
}
