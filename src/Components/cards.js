import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap"
import { reminderContext } from '../context/reminderContext'
import DeleteReminder from './DeleteReminder'



export default function Cards(props) {

    
    const {dispatch,reminders}= useContext(reminderContext);
    const data=props.data
    const handleDelete= (id)=>{
        DeleteReminder(id)(dispatch);
    }


    
  return (
      <div className="col-12 col-md-4">
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
                        <Button onClick={()=>{handleDelete(data._id)}}>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
   




    // delete module
             // dispatch({type:"DELETE_REMINDER_BEGIN"})
             // try {
             //     const res = await axios.delete(`reminders/deleteReminder/${id}`);
             //     await dispatch({type:"DELETE_REMINDER",payload:data._id})
             //     console.log(reminders);
             // } catch (err) {
             //     console.log(err);
             //     dispatch({ type: "REMINDER_FAILURE", payload: err.response.data })
             // }