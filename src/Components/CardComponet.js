import { useContext } from "react";

import { reminderContext } from "../context/reminderContext";
import Cards from "./cards";

// import reminderFetch from "../hooks/reminderFetch";
export default function CardComponet() {
    const {reminders,loading}=useContext(reminderContext);

    return (
        <div className="container">
            <div className="row">
            {!loading ?
            !reminders?<h1>No reminders</h1>: reminders.map((data)=>{
                    return(
                    <Cards data={data} key={data._id}/>)
                })
              :"loading..."}  
            </div>
        </div>
    )
}
