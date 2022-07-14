
import React, { useState, useEffect } from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

export const CurrentTimeComponent = () => {

    var [date, setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });



    return (
        <div className='flex justify-end m-2 mr-3'>
            <div>
                <div className='flex items-center'>
                    <FaCalendarAlt className='mr-2 text-blue-900' />
                    <h4 >{date.toLocaleDateString()} </h4>
                </div>
                <div className='flex items-center'>
                    <FaClock className='mr-2 text-blue-900' />
                    <h4 >{date.toLocaleTimeString()} </h4>
                </div>
            </div>
        </div>
    )
}

export default CurrentTimeComponent
