import React, { useState } from 'react';
import { useContext } from 'react';
import { useToasts } from 'react-toast-notifications';
import { FaPencilAlt } from 'react-icons/fa';
import updateReminder from '../../context/actions/REMINDERS/updateReminder';
import { reminderContext } from '../../context/RTContext';
export default function UpdateComponent({ data }) {
    const { addToast } = useToasts();
    const { dispatch, user } = useContext(reminderContext);
    const [open, setopen] = useState(false);

    const handleToggle = () => {
        setopen(!open);
    }


    let name = "";
    let time = "";
    let desc = "";
    const handleUpdate = (e) => {
        e.preventDefault();
        const body = {
            name: name?.value,
            time: time?.value,
            desc: desc?.value,
            id: data.id
        }
        updateReminder(body)(dispatch, user);
        addToast('Updated Successfully', { appearance: 'success', autoDismiss: true });
        handleToggle();
    }
    return (
        <>
            <FaPencilAlt className="ms-3" color="success" onClick={handleToggle}>Edit</FaPencilAlt>
            <div isOpen={open} toggle={handleToggle} >
                <div toggle={handleToggle}>Enter Details</div>
                <div>
                    <form action="#" id="userinfo">
                        <div>
                            <input defaultValue={data.name} required type="text" name="name" placeholder="Reminder Name"
                                innerRef={(input) => name = input} />
                        </div>
                        <div>
                            <input required defaultValue={data.time} type="time" name="time" placeholder="Reminder Time"
                                innerRef={(input) => time = input} />
                        </div>
                        <div>
                            <input required type="textarea" defaultValue={data.desc} name="desc" placeholder="Description"
                                innerRef={(input) => desc = input} />
                        </div>
                        <button color="danger" onClick={handleUpdate}>
                            Update
                        </button>
                    </form>
                </div>
                <footer>
                    <Button color="secondary" onClick={handleToggle}>Cancel</Button>
                </footer>
            </div>
        </>
    );

}

