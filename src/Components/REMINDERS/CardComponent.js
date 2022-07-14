import { useContext, useEffect } from "react";

import { reminderContext } from "../../context/RTContext";
import Cards from "./cards";
import CreateComponent from "./CreateReminderComponent";

export default function CardComponent() {

    const { reminders, error } = useContext(reminderContext);
    return (
        <div className="flex flex-col items-center md:m-0 m-3">
            <div className="text-2xl font-medium text-blue-900">Reminders</div>
            {
                reminders && (
                    reminders.length === 0 ? <h4 className="mt-2 text-green-800 md:text-xl text-center">No Reminders Yet </h4> : reminders.map((data) => {
                        return (
                            <Cards data={data} key={data.id} />)
                    })
                )}

        </div>
    )
}
