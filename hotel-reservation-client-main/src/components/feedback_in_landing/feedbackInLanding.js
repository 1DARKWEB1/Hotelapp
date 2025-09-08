import React, {Component} from 'react';
import "./feedBackInLanding.css";
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import axios from "axios";
import server from "../../index";


class FeedbackInLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: null
        }
    }

    handleChange = (e) => {
        let { value } = e.target;

        this.setState({msg: value});
    }

    handleSubmit = () => {
        const item = {
            message: this.state.msg
        }

        axios
            .post(`${server}apps/feedback/create/`,
                item,
            )
            .then(res => {
                alert("Feedback sent!!!");
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <form className="w-100 d-flex justify-content-center">
                <Row className="FeedbackPart">
                    <Col className="left d-flex justify-content-end" lg={6} sm={12}>
                        <img src="/images/Vise.jpg" alt=".jpg"/>
                    </Col>
                    <Col className=" p-3" lg={6} sm={12}>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                onChange={this.handleChange}
                            />
                        </FloatingLabel>
                        <div className="buttons">
                            <Button className="btn1 rounded-0 m-2" onClick={this.handleSubmit}>Submit</Button>
                            <Button className="btn2 rounded-0 m-2" type="reset">Secondary</Button>
                        </div>
                    </Col>
                </Row>
            </form>
        );
    }
}

export default FeedbackInLanding;