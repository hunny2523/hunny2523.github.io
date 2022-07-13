import { useContext, useEffect } from "react";

import { reminderContext } from "../../context/RTContext";
import Cards from "./cards";
import CreateComponent from "./CreateReminderComponent";

export default function CardComponet() {

    const { reminders, error } = useContext(reminderContext);
    return (
        <>
            <div className="text-center m-3">
                <CreateComponent />
            </div>
            {
                reminders && (
                    reminders.length === 0 ? <h4 className=" text-primary text-center">click above button to create reminders </h4> : reminders.map((data) => {
                        return (
                            <Cards data={data} key={data.id} />)
                    })
                )}
        </>
    )
}
