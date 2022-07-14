import React, { useState } from 'react';
import { useContext } from 'react';
import { useToasts } from 'react-toast-notifications';
import { reminderContext } from '../../context/RTContext';
import { FaTimes } from "react-icons/fa"
import createReminder from '../../context/actions/REMINDERS/createReminder';
import { useRef } from 'react';
export default function CreateComponent(props) {
    const { addToast } = useToasts();
    const { dispatch, user, error } = useContext(reminderContext);
    const [open, setopen] = useState(false);


    let name = useRef();
    let time = useRef();
    let desc = useRef();
    const handleCreate = async () => {
        const body = {
            name: name.current?.value,
            time: time.current?.value,
            desc: desc.current?.value
        }
        setopen(!open);
        createReminder(body)(dispatch, user).then(() => {
            addToast('Created Successfully', { appearance: 'success', autoDismiss: true });
        }).catch((error) => {
            addToast(error.errors[0], { appearance: 'error', autoDismiss: true });
        });

    }
    return (
        <div>
            <button className='px-6 py-2.5 w-full md:text-2xl border-blue-900 border text-blue-900 font-medium md:font-normal my-2 text-xs leading-tight uppercase rounded hover:bg-blue-900 hover:shadow-lg focus:bg-blue-900 hover:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={() => { setopen(!open) }}>Create Reminder</button>
            {open ? (
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
                                <input ref={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='name' id="name" type="text" placeholder="Reminder Title" />
                            </div>
                            <div className="mb-4">
                                <input ref={time} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='time' id="time" type="time" placeholder="Time" />
                            </div>
                            <div className="mb-4">
                                <textarea ref={desc} rows="2" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='desc' id="desc" type="time" placeholder="Description" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button onClick={handleCreate} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Create Reminder
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            ) : null}
        </div>
    );

}

