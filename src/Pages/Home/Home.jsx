
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import CardComponet from "../../Components/CardComponet"
import Cards from "../../Components/cards";
import { reminderContext } from "../../context/reminderContext";


export default function Home() {
  const {dispatch}=useContext(reminderContext);

  useEffect(() => {
    const fetchReminders=async()=>{
        dispatch({type:"REMINDER_BEGIN"})
        try {
          const userData=JSON.parse(localStorage.getItem("user"));
          const id=userData._id
        const res=await axios.get(`reminders/getAllReminder/${id}`);
        dispatch({type:"GET_REMINDERS",payload:res.data});
      } catch (err) {
        console.log(err);
        dispatch({type:"REMINDER_FAILURE",payload:err.response.data})
      }
    }
    fetchReminders();
},[])





  return (

    <div>
      {/* navbar */}
      <h3 className="mt-5 text-center">My Reminders</h3>
      <CardComponet/>
      {/* footer */}
    </div>
  )
}
