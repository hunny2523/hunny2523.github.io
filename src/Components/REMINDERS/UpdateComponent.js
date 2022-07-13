import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Modal, ModalHeader, Input, FormGroup, Form, ModalBody, ModalFooter } from 'reactstrap';
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
            <Modal isOpen={open} toggle={handleToggle} >
                <ModalHeader toggle={handleToggle}>Enter Details</ModalHeader>
                <ModalBody>
                    <Form action="#" id="userinfo">
                        <FormGroup>
                            <Input defaultValue={data.name} required type="text" name="name" placeholder="Reminder Name"
                                innerRef={(input) => name = input} />
                        </FormGroup>
                        <FormGroup>
                            <Input required defaultValue={data.time} type="time" name="time" placeholder="Reminder Time"
                                innerRef={(input) => time = input} />
                        </FormGroup>
                        <FormGroup>
                            <Input required type="textarea" defaultValue={data.desc} name="desc" placeholder="Description"
                                innerRef={(input) => desc = input} />
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

