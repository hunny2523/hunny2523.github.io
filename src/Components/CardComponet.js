import { useContext, useEffect } from "react";

import { reminderContext } from "../context/reminderContext";
import Cards from "./cards";
import getTimeFromReminders from "./getTimeFromReminders";

// import reminderFetch from "../hooks/reminderFetch";
export default function CardComponet() {
    const {reminders,loading,dispatch}=useContext(reminderContext);
 

    useEffect(()=>{
        reminders && 
        (getTimeFromReminders(reminders)(dispatch));
    },[reminders])

    

    return (
        <div className="container">
            <div className="row">
            {!loading &&(
            !reminders?<h1>No reminders</h1>: reminders.map((data)=>{
                    return(
                    <Cards data={data} key={data._id}/>)
                }))}  
            </div>
        </div>
    )
}
