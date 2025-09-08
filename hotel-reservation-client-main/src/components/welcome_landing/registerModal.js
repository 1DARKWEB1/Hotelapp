import React, {Component} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import "./SignInParty.css";
import AuthContext from "../../context/AuthContext";

class RegisterModal extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = AuthContext;

    closeModal = (e) => {
        let {onSave} = this.props;
        let {registerUser} = this.context;

        onSave();
        registerUser(e);
    }

    render() {
        let {toggle} = this.props;

        return (
            <Modal
                show={true}
                onHide={toggle}
                size="lg"
                centered
                className="p-0 m-0"
            >
                <div className="w-100 h-100 bg-invisible rounded-4 p-0 m-0">
                    <Row className="w-100 m-0">
                        <Col sm={12} lg={6}>
                            <Form className={"p-0 m-4"} onSubmit={this.closeModal}>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control name="first_name" type="text" placeholder="First Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control name="last_name" type="text" placeholder="Last Name" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="text" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control name="phone" type="text" placeholder="Password: +998909209139" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col className={"RegImgPar m-0 p-0"} lg={6} >
                            <img className={"RegImg m-0 w-100 h-100 rounded-0"} src="/images/RegistrationPart.png" alt=".png" />
                        </Col>
                    </Row>
                </div>
            </Modal>
        );
    }
}

export default RegisterModal;