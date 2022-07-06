import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Modal, ModalHeader,Input,FormGroup, Form,ModalBody, ModalFooter } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
import {  FaPencilAlt } from 'react-icons/fa';
import updateTask from '../../context/actions/TASK/updateTask';
import { reminderContext } from '../../context/RTContext';


export default function UpdateTask({data}) {
    const { addToast } = useToasts();
    const {dispatch}=useContext(reminderContext);
    const [open, setopen] = useState(false);

    const handleToggle = () => {
        setopen(!open);
    }


    let name="";
    let desc="";
    const handleUpdate=(e)=>{
        e.preventDefault();
        const body={
            name:name?.value,
            desc:desc?.value,
            id:data.id
        }
        updateTask(body)(dispatch);
        addToast('Updated Successfully', { appearance: 'success'  ,autoDismiss: true});
        handleToggle();
    } 
    return (
            <>
                <FaPencilAlt  className="ms-3" color="success" onClick={handleToggle}>Edit</FaPencilAlt>
                <Modal isOpen={open} toggle={handleToggle} >
                    <ModalHeader toggle={handleToggle}>Enter Details</ModalHeader>
                    <ModalBody>
                        <Form action="#" id="userinfo">
                            <FormGroup>
                                <Input required type="text" defaultValue={data.name} name="name" placeholder="Task Title"
                                    innerRef={(input) => name = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Input required type="textarea" defaultValue={data.desc} name="desc" placeholder="Description"
                                  innerRef={(input) => desc = input}/>
                            </FormGroup>
                            <Button color="danger" onClick={handleUpdate}>
                                Update
                            </Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={handleToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
    );
  
}

