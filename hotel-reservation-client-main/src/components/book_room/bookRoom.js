import React, {Component} from 'react';
import {Button, Carousel, Col, Container, Form, FormControl, FormGroup, FormLabel, Modal, Row} from "react-bootstrap";
import './bookRoom.css';

class BookRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingDetails: {
                room: [this.props.item.id,],
                price: this.props.item.price,
                from_time: null,
                to_time: null,
                service: []
            }
        }
    }

    handleChange = (e) => {
        let {name, value} = e.target;

        const bookingDetails = {...this.state.bookingDetails, [name]: value};

        this.setState({bookingDetails}, () => {
            let from = new Date(this.state.bookingDetails.from_time);
            let to = new Date(this.state.bookingDetails.to_time);

            if (this.state.bookingDetails.from_time != null && this.state.bookingDetails.to_time != null && from < to && to - from >= 1){

                let totalPrice = this.props.item.price / 24 * (to - from) / 3600000;
                const bookingDetails = {...this.state.bookingDetails, 'price': totalPrice};
                this.setState({bookingDetails});
            }
        });
    }

    render() {
        let {toggle, onSave} = this.props;

        return (
            <Modal
                show={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={toggle}
                className="rounded"
            >
                <Container fluid className="p-0">
                    <Row>
                        <Col xs={5}>
                            <Carousel fade>
                                <Carousel.Item className="carousel-height rounded">
                                    <img
                                        className="d-block w-100 h-100 rounded"
                                        src={this.props.item.image1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="carousel-height rounded">
                                    <img
                                        className="d-block w-100 h-100 rounded"
                                        src={this.props.item.image2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="carousel-height rounded">
                                    <img
                                        className="d-block w-100 h-100 rounded"
                                        src={this.props.item.image3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="carousel-height rounded">
                                    <img
                                        className="d-block w-100 h-100 rounded"
                                        src={this.props.item.image4}
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col xs={7} className="p-2">
                            <h4>{this.props.item.name}</h4>
                            <p>{this.props.item.floor}-floor, {this.props.item.room_number}-room</p>
                            <p>Single Beds: {this.props.item.single_beds}, Double Beds: {this.props.item.double_beds}</p>
                            <h5>Price For One Day: {this.props.item.price}$</h5>
                            <h5>Total Price: {this.state.bookingDetails.price}$</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Form>
                            <Col className="p-5">
                                <Container className="p-3 border rounded shadow">
                                    <Row>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <FormLabel>
                                                    From:
                                                </FormLabel>
                                                <FormControl
                                                    type="datetime-local"
                                                    name="from_time"
                                                    className="shadow"
                                                    onChange={this.handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <FormLabel>
                                                    To:
                                                </FormLabel>
                                                <FormControl
                                                    type="datetime-local"
                                                    name="to_time"
                                                    className="shadow"
                                                    onChange={this.handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={12}>
                                            <FormGroup>
                                                <FormLabel>
                                                    Detail:
                                                </FormLabel>
                                                <FormControl
                                                    as="textarea"
                                                    name="detail"
                                                    className="shadow"
                                                    onChange={this.handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Container className="px-5 py-3">
                                <Row className="px-3">
                                    <Button type="submit" className="book-button shadow" onClick={() => onSave(this.state.bookingDetails)}>
                                        Book
                                    </Button>
                                </Row>
                            </Container>
                        </Form>
                    </Row>
                </Container>
            </Modal>
        );
    }
}

export default BookRoom;