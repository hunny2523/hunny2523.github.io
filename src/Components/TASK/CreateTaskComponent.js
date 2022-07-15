

import React, { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { FaPen, FaTimes } from 'react-icons/fa';
import { useToasts } from 'react-toast-notifications';
import createTask from '../../context/actions/TASK/createTask';
import updateTask from '../../context/actions/TASK/updateTask';
import { reminderContext } from '../../context/RTContext';


export default function CreateTaskComponent(props) {
    const { addToast } = useToasts();
    const { dispatch } = useContext(reminderContext);
    const [open, setopen] = useState(false);

    let name = useRef();
    let desc = useRef();
    const handleTask = (taskFunction) => {
        console.log(taskFunction)
        const body = {
            name: name.current?.value,
            desc: desc.current?.value
        }
        if (taskFunction === "create") {
            createTask(body)(dispatch);
            addToast('Created Successfully', { appearance: 'success', autoDismiss: true });
        }
        if (taskFunction === "update") {
            body.id = props.data.id
            updateTask(body)(dispatch);
            addToast('Updated Successfully', { appearance: 'success', autoDismiss: true });
        }
        setopen(!open)
    }
    return (
        <div>
            {
                !props.data ?
                    <button className='px-6 py-2.5  md:text-2xl border-blue-900 border text-blue-900 leading-tight w-full  uppercase rounded hover:bg-blue-900 hover:text-white  hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={() => { setopen(!open) }}>Create Task</button>
                    : <button onClick={() => { setopen(!open) }} className='py-1 px-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600' >Update</button>
            }
            {
                open ? (
                    <div className='pt-3 px-2 fade modal items-center transition duration-1000 ease-in-out bg-gray-600 bg-opacity-60 flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 focus:outline-none'>
                        <div className="w-full max-w-lg border transition  bg-white rounded-md">
                            <div className='shadow-sm flex justify-between p-3'>
                                <div className='text-xl  font-semibold text-gray-700'>
                                    Enter Details
                                </div>
                                <div >
                                    <FaTimes className='text-gray-300 text-3xl' onClick={() => { setopen(!open) }}>Cancel</FaTimes>
                                </div>
                            </div>
                            <form className=" rounded px-4 md:px-8 pt-6 pb-8 shadow-sm">
                                <div className="mb-4">
                                    <input required defaultValue={props.data && props.data.name} ref={name} className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='name' id="name" type="text" placeholder="Task Title" />
                                </div>
                                <div className="mb-4">
                                    <textarea required defaultValue={props.data && props.data.desc} ref={desc} rows="2" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='desc' id="desc" type="time" placeholder="Description" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button onClick={() => { handleTask(props.data ? "update" : "create") }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        {props.data ? "Update task" : "Create Task"}
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                ) : null
            }
        </div >
    );

}

