import { useContext } from "react";
import { reminderContext } from "../../context/RTContext";
import CreateTaskComponent from "./CreateTaskComponent";
import Task from "./Task";

export default function TaskComponent() {
    const { task } = useContext(reminderContext);
    return (
        <div className="flex flex-col items-center md:m-0 m-3">
            <div className="text-2xl font-medium text-blue-900">Tasks</div>
            {
                task && (
                    task.length === 0 ? <h4 className=" text-primary text-center">click above button to create Task </h4> : task.map((data) => {
                        return (
                            <Task data={data} key={data.id} />)
                    })
                )}
        </div>
    )
}
