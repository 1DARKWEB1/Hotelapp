import Row from "react-bootstrap/Row";
import {Card, Col, Form} from "react-bootstrap";
import React, {Component} from "react";
import server from "../../index";
import axios from "axios";
import ShowImageInModal from "../service/showImageInModal";
import AddEventModal from "./addEventModal";
import EditEventImageModal from "./editEventImageModal";
import EditEventInfoModal from "./editEventInfoModal";

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceList: [],
            addEventModal: false,
            editEventInfoModal: false,
            editEventImageModal: false,
            imageShowModal: false,
            imageForModal: null,
            activeItem: {
                name: null,
                info: null,
                where: null,
                when: null,
                image: null,
            },
            search: {
                name: ''
            }
        };
    }

    refreshList = () => {
        fetch(`${server}apps/event/list?search=${this.state.search.name}`)
            .then(res => res.json())
            .then(data => {
                this.setState({serviceList: data});
            })
            .catch(err => {
                console.log(err)
            })
    }

    toggleAddEventModal = () => {
        this.setState({addEventModal: !this.state.addEventModal})
    }

    toggleEditEventInfoModal = () => {
        this.setState({editEventInfoModal: !this.state.editEventInfoModal})
    }

    toggleEditEventImageModal = () => {
        this.setState({editEventImageModal: !this.state.editEventImageModal})
    }

    toggleImageShowModal = () => {
        this.setState({imageShowModal: !this.state.imageShowModal});
    }

    createItem = () => {
        const item = {
            name: null,
            info: null,
            image: null,
            where: null,
            when: null
        };

        this.setState({ activeItem: item, addEventModal: !this.state.addEventModal });
    }

    editItem = (item) => {
        this.setState({ activeItem: item, editEventInfoModal: !this.state.editEventInfoModal });
    };

    editImage = (item) => {
        this.setState({ activeItem: item, editEventImageModal: !this.state.editEventImageModal });
    }

    openImage = (image) => {
        this.setState({imageForModal: image}, () => {
            this.toggleImageShowModal();
        });
    }

    handleSubmit = (item) => {
        this.toggleAddEventModal();

        const itemForm = new FormData();
        Object.keys(item).forEach(key => itemForm.append(key, item[key]));

        axios
            .post(`${server}apps/event/create/`, itemForm)
            .then((res) => this.refreshList());
    }

    handleSubmitInfo = (item) => {
        this.toggleEditEventInfoModal();
        let itemNew = item;
        delete itemNew.image;

        axios
            .patch(`${server}apps/event/update/${item.id}/`, itemNew)
            .then((res) => this.refreshList());
    }

    handleSubmitImage = (item) => {
        this.toggleEditEventImageModal();
        const itemImage = new FormData();
        itemImage.append('image', item.image);

        axios
            .patch(`${server}apps/event/update/${item.id}/`, itemImage)
            .then((res) => this.refreshList());
    }

    handleDelete = (item) => {
        axios
            .delete(`${server}apps/event/destroy/${item.id}/`)
            .then((res) => this.refreshList());
    }

    componentDidMount() {
        this.refreshList();
    }

    searchEvent = (e) => {
        let {name, value} = e.target;

        let search = { ...this.state.activeItem, [name]: value };

        this.setState({search}, () => {
            this.refreshList();
        });
    }

    dateLocal(datetime) {
        const dt = new Date(datetime);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        console.log(dt.toISOString().slice(0, 16))
        console.log(dt.toISOString())
        return dt.toISOString().slice(0, 10);
    }

    timeLocal(datetime) {
        const dt = new Date(datetime);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        return dt.toISOString().slice(11, 16);
    }

    renderItems = () => {
        const items = this.state.serviceList;

        return items.map((item) => (
            <Card style={{ width: '20rem' }} key={item.id}>
                <div className="position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-pencil-square text-primary m-3 text-light position-absolute"
                         style={ { right: "0px", top: "0px", cursor: "pointer" } }
                         viewBox="0 0 16 16" onClick={() => this.editImage(item)}>
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                    <Card.Img
                        variant="top"
                        src={item.image}
                        style={ {cursor: "pointer"} }
                        onClick={() => {this.openImage(item.image)}}
                    />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>
                        {item.name}
                    </Card.Title>
                    <Card.Text>
                        <font class="h6">Info:</font>
                        <br/>
                        {item.info}
                    </Card.Text>
                    <Card.Text>
                        <font class="h6">Location:</font>
                        <br/>
                        {item.where}
                    </Card.Text>
                    <Card.Footer className="text-muted">
                        <Row>
                            <Col>
                                <p style={ {fontSize: "12px"} } className="h6">
                                    Date: {this.dateLocal(item.when)}
                                    <br/>
                                    Time: {this.timeLocal(item.when)}
                                </p>
                            </Col>
                            <Col className="d-flex justify-content-evenly">
                                <button className="btn btn-primary m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-pencil-square text-primary mx-2 text-light" viewBox="0 0 16 16" onClick={() => this.editItem(item)}>
                                        <path
                                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd"
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button>
                                <button className="btn btn-danger m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-trash text-danger mx-2 text-light" viewBox="0 0 16 16" onClick={() => this.handleDelete(item)}>
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd"
                                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card.Body>
            </Card>
        ))
    }


    render() {
        return (
            <div>
                {this.state.imageShowModal ? (
                    <ShowImageInModal
                        activeItem={this.state.imageForModal}
                        toggle={this.toggleImageShowModal}
                    />
                ) : null}
                { this.state.editEventImageModal ? (
                    <EditEventImageModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggleEditEventImageModal}
                        onSave={this.handleSubmitImage}
                    />
                ) : null }
                { this.state.addEventModal ? (
                    <AddEventModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggleAddEventModal}
                        onSave={this.handleSubmit}
                    />
                ) : null }
                { this.state.editEventInfoModal ? (
                    <EditEventInfoModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggleEditEventInfoModal}
                        onSave={this.handleSubmitInfo}
                    />
                ) : null }
                <Row className="p-2 tg-header-block align-items-center">
                    <Col>
                        <Form.Group>
                            <Form.Control
                                name="name"
                                type="text"
                                placeholder="Type here to search"
                                onChange={this.searchEvent}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <h3>Events</h3>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <button
                            className="btn btn-light px-5 shadow"
                            onClick={this.createItem}
                        >
                            +
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-evenly flex-wrap p-2">
                        {this.renderItems()}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Service;