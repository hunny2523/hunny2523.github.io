import React, { useEffect, useState } from 'react'
import { useContext } from 'react'

import { reminderContext } from '../../context/RTContext'
import { useToasts } from 'react-toast-notifications';
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import deleteTask from '../../context/actions/TASK/deleteTask';
import CreateTaskComponent from './CreateTaskComponent';
const getEmoji = require('get-random-emoji')
// import HeartCheckbox from 'react-heart-checkbox';

export default function Task(props) {

    const { addToast } = useToasts();
    const { dispatch, task } = useContext(reminderContext);
    const data = props.data
    const handleDelete = (id) => {
        deleteTask(id)(dispatch);
        addToast('Deleted Successfully', { appearance: 'success', autoDismiss: true });
    }
    const handleCheck = (e) => {
        task.map((task) => {
            if (task.id === data.id) {
                task.check = e.target.checked
            }
        })
        localStorage.setItem("task", JSON.stringify(task));
        if (e.target.checked) {
            addToast('checked Items will be deleted after 10 seconds', { appearance: 'warning', autoDismiss: true });
            deleteChecked();
        }
    }
    const deleteChecked = () => {
        setTimeout(() => {
            task.map((task) => {
                if (task.check) {
                    console.log("in set time inisde")
                    deleteTask(task.id)(dispatch);
                }
            })
        }, 10000);
    }
    // const [heart, setheart] = useState(false);
    // const HeartClick=()=>{
    //     setheart(!heart)
    // }
    return (
        <>
            <div className="flex md:mb-2 justify-between items-center rounded-lg shadow-sm md:w-3/4 w-full max-h-fit border border-blue-900 bg-white p-3 md:p-4 ">

                <div >
                    <div className="flex  items-center">
                        <form>
                            <div onChange={handleCheck} className="mr-3" check>
                                <input type="checkbox" className=' h-4 w-4 border border-blue-900 rounded-sm bg-white focus:outline-none transition duration-200' defaultChecked={data.check} />
                            </div>
                        </form>
                        <h5 className="text-blue-900 text-xl leading-tight font-medium mb-2">{data.name}</h5>
                    </div>
                    <p className="text-blue-900 text-base mb-2">
                        {data.desc}
                    </p>
                    <div className='flex space-x-2'>
                        <FaTrash className='text-blue-900' onClick={() => { handleDelete(data.id) }}>Delete</FaTrash>
                        <CreateTaskComponent update={true} data={data} />
                    </div>
                </div>
                <div className='text-7xl'>
                    {getEmoji()}
                </div>
            </div>






            {/* <div style={{ width: "60%" }} className="mx-auto mb-2">
                <div>
                    <div className="d-flex">
                        <form>
                            <div onChange={handleCheck} check>
                                <input type="checkbox" defaultChecked={data.check} />
                            </div>
                        </form>
                        <div >
                            <div tag="h5">
                                {data.name}
                            </div>
                        </div>
                        <div className="ms-auto">
                            <FaTrash onClick={() => { handleDelete(data.id) }} color='danger'>Delete</FaTrash>
                            <UpdateTask data={data} />

                        </div>
                    </div>
                    <div>
                        {data.desc}
                    </div>
                </div>
            </div> */}
        </ >
    )
}
