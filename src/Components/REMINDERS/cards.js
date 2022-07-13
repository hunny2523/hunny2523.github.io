import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Card, CardBody, CardText, CardTitle } from "reactstrap"
import UpdateComponent from './UpdateComponent'
import { useToasts } from 'react-toast-notifications';
import { FaTrash } from "react-icons/fa";
import DeleteReminder from '../../context/actions/REMINDERS/DeleteReminder'
import { reminderContext } from '../../context/RTContext';


export default function Cards(props) {

    const { addToast } = useToasts();
    const { dispatch } = useContext(reminderContext);
    const data = props.data
    const handleDelete = (id) => {
        DeleteReminder(id)(dispatch);
        addToast('Deleted Successfully', { appearance: 'success', autoDismiss: true });
    }

    return (
        <div>
            <Card style={{ width: "60%" }} className="mx-auto mb-2">
                <CardBody>
                    <div className="d-flex">
                        <div >
                            <CardTitle tag="h5">
                                {data.name}
                            </CardTitle>
                        </div>
                        <div className="ms-auto">
                            <FaTrash color='danger' onClick={() => { handleDelete(data.id) }}>Delete</FaTrash>
                            {/* <UpdateComponent data={data} /> */}
                        </div>
                    </div>
                    <CardText>
                        <b>Time</b> :{data.time}
                        <br />
                        <b>desc</b> :{data.desc}
                    </CardText>
                </CardBody>
            </Card>
        </div >
    )
}
