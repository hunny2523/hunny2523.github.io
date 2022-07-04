import { useContext, useEffect } from "react";

import { reminderContext } from "../context/reminderContext";
import Cards from "./cards";

export default function CardComponet() {
    const {reminders,loading}=useContext(reminderContext);
    return (
        <div className="container">
            <div className="row">
            {  
            reminders && (

                reminders.length===0?<h4  className=" text-primary text-center">click above button to create reminders </h4>: reminders.map((data)=>{
                        return(
                        <Cards data={data}  key={data.id}/>)
                    })  
            )}
            </div>
        </div>
    )
}
