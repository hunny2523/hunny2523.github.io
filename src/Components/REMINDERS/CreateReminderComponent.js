import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Modal, ModalHeader, Input, FormGroup, Form, ModalBody, ModalFooter } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
import { reminderContext } from '../../context/RTContext';
import createReminder from '../../context/actions/REMINDERS/createReminder';
export default function CreateComponent(props) {
    const { addToast } = useToasts();
    const { dispatch } = useContext(reminderContext);
    const [open, setopen] = useState(false);

    const handleToggle = () => {
        setopen(!open);
    }

    let name = "";
    let time = "";
    let desc = "";
    const handleCreate = () => {
        const body = {
            name: name?.value,
            time: time?.value,
            desc: desc?.value
        }
        createReminder(body)(dispatch);
        addToast('Created Successfully', { appearance: 'success', autoDismiss: true });
        handleToggle();
    }
    return (
        <div>
            <Button color="danger" className='ms-0' onClick={handleToggle}>Create Reminder</Button>
            <Modal isOpen={open} toggle={handleToggle} >
                <ModalHeader toggle={handleToggle}>Enter Details</ModalHeader>
                <ModalBody>
                    <Form action="#" id="userinfo">
                        <FormGroup>
                            <Input type="text" name="name" placeholder="Reminder Name"
                                innerRef={(input) => name = input} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="time" name="time" placeholder="Reminder Time" innerRef={(input) => time = input} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" name="desc" placeholder="Description"
                                innerRef={(input) => desc = input} />
                        </FormGroup>
                        <Button color="danger" onClick={handleCreate}>
                            Create
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

