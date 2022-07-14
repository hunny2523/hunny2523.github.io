import { useContext } from 'react'
import { useToasts } from 'react-toast-notifications';
import { FaRegClock, FaTrash } from "react-icons/fa";
import DeleteReminder from '../../context/actions/REMINDERS/DeleteReminder'
import { reminderContext } from '../../context/RTContext';
const getEmoji = require('get-random-emoji')

export default function Cards(props) {

    const { addToast } = useToasts();
    const { dispatch } = useContext(reminderContext);
    const data = props.data
    const handleDelete = (id) => {
        DeleteReminder(id)(dispatch);
        addToast('Deleted Successfully', { appearance: 'success', autoDismiss: true });
    }

    return (

        <div className="flex justify-between border-blue-900 rounded-lg shadow-sm md:w-3/4 w-full max-h-fit border bg-white p-3 md:p-4 m-2">
            <div >
                <div className='flex items-center mb-2'>
                    <h5 className="text-blue-900 text-xl leading-tight font-medium ">{data.name}</h5>
                    <FaRegClock className='text-xl mx-2 text-blue-900'></FaRegClock>
                    <h2 className="text-blue-900 text-xl leading-tight font-medium"> {data.time}</h2>
                </div>
                <p className="text-blue-900 font-semibold text-base mb-2">
                    {data.desc}
                </p>
                <div>
                    <FaTrash className='text-blue-900' onClick={() => { handleDelete(data.id) }}>Delete</FaTrash>
                </div>
            </div>
            <div className='text-7xl'>
                {getEmoji()}
            </div>
        </div>

    )
}
