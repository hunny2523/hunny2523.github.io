import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Card, CardBody, CardText, CardTitle, Button, Form, FormGroup, Label, Input } from "reactstrap"
import { reminderContext } from '../../context/RTContext'
import { useToasts } from 'react-toast-notifications';
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import UpdateTask from './UpdateTask';
import deleteTask from '../../context/actions/TASK/deleteTask';
// import HeartCheckbox from 'react-heart-checkbox';

export default function Task(props) {

    const { addToast } = useToasts();
    const { dispatch ,task} = useContext(reminderContext);
    const data = props.data
    const handleDelete = (id) => {
        deleteTask(id)(dispatch);
        addToast('Deleted Successfully', { appearance: 'success', autoDismiss: true });
    }
    const handleCheck=(e)=>{
            task.map((task)=>{
                if(task.id===data.id){
                    task.check=e.target.checked
                }
            })
            localStorage.setItem("task",JSON.stringify(task));
            if(e.target.checked){
                addToast('checked Items will be deleted after 10 seconds', { appearance: 'warning'  ,autoDismiss: true});
                deleteChecked();
            }
    }
    const deleteChecked=()=>{
        setTimeout(() => {
            task.map((task)=>{
                if(task.check){
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
            <Card style={{ width: "60%" }} className="mx-auto mb-2">
                <CardBody>
                    <div className="d-flex">
                        <Form>
                            <FormGroup onChange={handleCheck} check>
                                <Input type="checkbox" defaultChecked={data.check} />
                            </FormGroup>
                        </Form>
                        <div >
                            <CardTitle tag="h5">
                                {data.name}
                            </CardTitle>
                        </div>
                        <div className="ms-auto">
                            <FaTrash onClick={() => { handleDelete(data.id) }} color='danger'>Delete</FaTrash>
                            <UpdateTask data={data} />
    
                        </div>
                    </div>
                    <CardText>
                        {data.desc}
                    </CardText>
                </CardBody>
            </Card>
        </ >
    )
}
