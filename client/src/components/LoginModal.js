import React, { useState } from 'react';
import axios from 'axios';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';

const LoginModal = () => {
    const [user, setUser] = useState({ name: '', email: '' });
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState(null);

    const onChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleToggle = () => {
        setOpenModal(!openModal);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify(user)
        axios.post('/api/auth/login', user, config)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                setOpenModal(false);
                setUser(res.data);
            })
            .catch(err => {
                setMessage(err.response.data.msg)
            })
    }

    return (
        <div>
            <NavLink onClick={handleToggle} href="#">
                Login
             </NavLink>

            <Modal isOpen={openModal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>Login</ModalHeader>
                <ModalBody>
                    {message ? <Alert color="danger">{message}</Alert> : null}
                    <Form onSubmit={handleOnSubmit}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="mb-3"
                                onChange={onChange}
                            />

                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="mb-3"
                                onChange={onChange}
                            />
                            <Button color="dark" style={{ marginTop: '2rem' }} block>
                                Login
              </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default LoginModal;