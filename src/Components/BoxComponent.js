import React from 'react'
import { useContext } from 'react'
import { FaBell, FaCalendarDay, FaList, FaListUl, FaTasks } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { reminderContext } from '../context/RTContext'
import CreateComponent from './REMINDERS/CreateReminderComponent'
import CreateTaskComponent from './TASK/CreateTaskComponent'

export default function BoxComponent() {
    const location = useLocation();
    const { reminders, task } = useContext(reminderContext)

    const CountTodayTask = () => {
        let count = 0;
        reminders && reminders.map((reminder) => {
            if (reminder.time.slice(0, 11) === new Date().toISOString().slice(0, 11)) {
                count++;
            }
        })
        return (
            <p>{count}</p>
        )

    }

    return (
        <div >
            <div className='flex flex-wrap'>
                <Link to="/reminders" className="w-1/2 ">
                    <div className={`m-1 border-blue-900 shadow-sm border px-3 py-4 flex justify-between  rounded-lg ${location.pathname === "/reminders" ? "shadow-md" : ""}`}>
                        <div className="flex flex-col ">
                            <FaBell className="text-yellow-500 text-2xl mb-3">
                            </FaBell>
                            <div className='text-red-600 text-xl font-bold'>Reminders</div>
                        </div>
                        <div className='text-red-600 font-bold text-4xl'>{reminders ? reminders.length : "0"}</div>
                    </div>
                </Link>
                <Link className='w-1/2' to="/tasks">
                    <div className={`m-1 border-blue-900  shadow-sm border px-3 py-4 flex justify-between  rounded-lg ${location.pathname === "/tasks" ? "shadow-md" : ""}`}>
                        <div className="flex flex-col ">
                            <FaTasks className="text-green-800 text-2xl mb-3">
                            </FaTasks>
                            <div className='text-red-600 text-xl font-bold'>Tasks</div>
                        </div>
                        <div className='text-red-600 font-bold text-4xl'>{task ? task.length : "0"}</div>
                    </div>
                </Link>
                <Link className='w-1/2' to="/all">
                    <div className={`m-1 border-blue-900 shadow-sm border px-3 py-4 flex justify-between  rounded-lg ${location.pathname === "/all" ? "shadow-md" : ""}`}>
                        <div className="flex flex-col ">
                            <FaListUl className="text-blue-800 text-2xl mb-3">
                            </FaListUl>
                            <div className='text-red-600 text-xl font-bold'>All</div>
                        </div>
                        <div className='text-red-600 font-bold text-4xl'>{task || reminders ? (task.length + reminders.length) : "0"}</div>
                    </div>
                </Link>


                <Link className='w-1/2' to="/today">
                    <div className={`m-1 border-blue-900 shadow-sm border px-3 py-4 flex justify-between  rounded-lg ${location.pathname === "/today" ? "shadow-md" : ""}`}>
                        <div className="flex flex-col ">
                            <FaCalendarDay className="text-purple-900 text-2xl mb-3">
                            </FaCalendarDay>
                            <div className='text-red-600 text-xl font-bold'>Today's </div>
                        </div>
                        <div className='text-red-600 font-bold text-4xl'><CountTodayTask /></div>
                    </div>
                </Link>
            </div>
            <div>
                <CreateComponent />
            </div>
            <div>
                <CreateTaskComponent />
            </div>
        </div>
    )
}
