import { useContext } from "react";
import { reminderContext } from "../../context/RTContext";
import CreateTaskComponent from "./CreateTaskComponent";
import Task from "./Task";

export default function TaskComponent() {
    const { task } = useContext(reminderContext);
    return (
        <>
            <div className="text-center m-3">
                <CreateTaskComponent />
            </div>
            {
                task && (
                    task.length === 0 ? <h4 className=" text-primary text-center">click above button to create Task </h4> : task.map((data) => {
                        return (
                            <Task data={data} key={data.id} />)
                    })
                )}
        </>
    )
}
