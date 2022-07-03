import { useContext, useEffect } from "react";

import { reminderContext } from "../context/reminderContext";
import Cards from "./cards";

export default function CardComponet() {
    const {reminders,loading}=useContext(reminderContext);
    return (
        <div className="container">
            <div className="row">
            {!loading &&(
            !reminders?<h1>No reminders</h1>: reminders.map((data)=>{
                    return(
                    <Cards data={data}  key={data.id}/>)
                }))}  
            </div>
        </div>
    )
}
