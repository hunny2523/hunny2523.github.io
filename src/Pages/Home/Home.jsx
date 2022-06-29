import { useContext } from "react";
import { useEffect } from "react";
import CardComponet from "../../Components/CardComponet"
import CreateComponent from "../../Components/CreateComponent";
import CurrentTimeComponent from "../../Components/CurrentTimeComponent";
import getReminders from "../../Components/getReminders";
import NavbarComponent from "../../Components/NavbarComponent";
import { reminderContext } from "../../context/reminderContext";


export default function Home() {
  
  const {dispatch}=useContext(reminderContext);
  useEffect(() => {
    getReminders(dispatch);
   },[])

  return (

    <div>
      <NavbarComponent/>
      <CurrentTimeComponent/>
      <h3 className="mt-5 text-center">My Reminders</h3>
      <div className="text-center">
      <CreateComponent/>
      </div>
      <CardComponet/>
      {/* footer */}
    </div>
  )
}
