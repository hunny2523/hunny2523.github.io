import { useContext, useEffect } from "react";

import { reminderContext } from "../../context/RTContext";
import Cards from "./cards";
import CreateComponent from "./CreateReminderComponent";

export default function CardComponent(props) {
    const { reminders, error } = useContext(reminderContext);
    let count = false;
    reminders && reminders.length !== 0 && reminders.map((reminder) => {
        if (reminder.time.slice(0, 11) === new Date().toISOString().slice(0, 11)) {
            count = true;
        }
    })



    return (
        <div className="flex flex-col items-center md:m-0 m-3">
            {!props.today ? <div className="text-2xl font-medium text-blue-900">Reminders</div> : <div className="text-2xl font-medium text-blue-900">Today's Task</div>}
            {
                reminders &&
                    !props.today ?
                    (
                        reminders.length === 0 ? <h4 className="mt-2 text-green-800 md:text-xl text-center">No Reminders Yet </h4> : reminders.map((data) => {
                            return (
                                <Cards data={data} key={data.id} />)
                        })
                    ) : (
                        count ?

                            reminders.map((reminder) => {
                                if (reminder.time.slice(0, 11) === new Date().toISOString().slice(0, 11)) {
                                    return (
                                        <Cards data={reminder} key={reminder.id} />)
                                }
                            }) :
                            <h4 className="mt-2 text-green-800 md:text-xl text-center">Nothing for Today </h4>
                    )}
        </div>
    )
}
