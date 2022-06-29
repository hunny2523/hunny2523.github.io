import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Modal, ModalHeader,Input,FormGroup, Form,ModalBody, ModalFooter } from 'reactstrap';
import { reminderContext } from '../context/reminderContext';
import updateReminder from './updateReminder';

export default function UpdateComponent({id}) {
 
    const {dispatch}=useContext(reminderContext);
    const [open, setopen] = useState(false);

    const handleToggle = () => {
        setopen(!open);
    }


    let name="";
    let time="";
    let desc="";
    const handleUpdate=(e)=>{
        e.preventDefault();
        const body={
            name:name?.value,
            time:time?.value,
            desc:desc?.value,
            id:id
        }
        updateReminder(body)(dispatch);
        handleToggle();
    } 
    return (
            <div>
                <Button className='w-75' color="success" onClick={handleToggle}>Edit</Button>
                <Modal isOpen={open} toggle={handleToggle} >
                    <ModalHeader toggle={handleToggle}>Enter Details</ModalHeader>
                    <ModalBody>
                        <Form action="#" id="userinfo">
                            <FormGroup>
                                <Input required type="text" name="name" placeholder="Reminder Name"
                                    innerRef={(input) => name = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Input required type="text" name="time" placeholder="Reminder Time"
                                  innerRef={(input) => time = input} />
                            </FormGroup>
                            <FormGroup>
                                <Input required type="textarea" name="desc" placeholder="Description"
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
            </div>
    );
  
}

