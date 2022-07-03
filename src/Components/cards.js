import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap"
import DeleteReminder from '../context/actions/DeleteReminder'
import { reminderContext } from '../context/reminderContext'
import UpdateComponent from './UpdateComponent'
import { useToasts } from 'react-toast-notifications';


export default function Cards(props) {

    const { addToast } = useToasts();
    const { dispatch } = useContext(reminderContext);
    const data = props.data
    const handleDelete = (id) => {
        DeleteReminder(id)(dispatch);
        addToast('Deleted Successfully', { appearance: 'success' ,autoDismiss: true});
    }

   


    return (
        <div className="col-md-4">
            <Card className="m-2">
                <CardBody>
                    <CardTitle tag="h5">
                        Reminder of : {data.name}
                    </CardTitle>
                    <CardText>
                        Time :{data.time}
                    </CardText>
                    <CardText>
                        desc :{data.desc}
                    </CardText>
                    <div className="row ms-1">
                        <Button color='danger' className='w-25' onClick={() => { handleDelete(data.id) }}>Delete</Button>
                        <div className="col-6">
                        <UpdateComponent id={data.id} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
