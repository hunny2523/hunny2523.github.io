
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { reminderContext } from "../context/reminderContext";
import Cards from "./cards";
// import reminderContext from "../context/remindContext";
// import reminderFetch from "../hooks/reminderFetch";
export default function CardComponet() {
    // const {reminders,createNewReminder,error}=reminderFetch();
const {reminders,dispatch,error,loading}=useContext(reminderContext);

const [remin, setremin] = useState([])
useEffect(() => {
    
    const fetchReminders=async()=>{
        dispatch({type:"REMINDER_BEGIN"})
        try {
          const userData=JSON.parse(localStorage.getItem("user"));
          const id=userData._id
        const res=await axios.get(`reminders/getAllReminder/${id}`);
        const reminder=res.data;
        setremin(reminder)
        dispatch({type:"GET_REMINDERS",payload:res.data});
      } catch (err) {
        console.log(err);
        dispatch({type:"REMINDER_FAILURE",payload:err.response.data})
      }
    }
    fetchReminders();
}, [])



    return (
        <div className="container">
            <div className="row">

                {remin.map((data)=>{
                    return(
                    <Cards data={data} key={data._id}/>)
                })}
            </div>
        </div>
    )
}
