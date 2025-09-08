import {Component} from "react";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import './rooms.css';
import RoomItem from "./roomItem";
import server from "../../index";
import {Link} from "react-router-dom";
import BookRoom from "../book_room/bookRoom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Accordion} from "react-bootstrap";
import {Card} from "react-bootstrap";

export default class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categoryList: [],
            typeRoomList: [],
            activeRoom: null,
            sort: {
                category: '',
                type_room: '',
                floor: '',
                air_conditioner: '',
                kitchen: '',
                hair_dryer: '',
                iron: '',
                wifi: '',
                TV: '',
                busy: '',
                single_beds: '',
                double_beds: ''
            },
            search: {
                name: ''
            }
        }
    }

    componentDidMount = () => {
        this.refreshList();
        this.refreshCategoryList();
        this.refreshTypeRoomList();
    }

    refreshList = () => {
        fetch(`${server}apps/room/list?search=${this.state.search.name}&category=${this.state.sort.category}&type_room=${this.state.sort.type_room}&floor=${this.state.sort.floor}&air_conditioner=${this.state.sort.air_conditioner}&kitchen=${this.state.sort.kitchen}&hair_dryer=${this.state.sort.hair_dryer}&iron=${this.state.sort.iron}&wifi=${this.state.sort.wifi}&TV=${this.state.sort.TV}&busy=${this.state.sort.busy}&single_beds=${this.state.sort.single_beds}&double_beds=${this.state.sort.double_beds}`)
            .then(res => res.json())
            .then(data => {
                this.setState({items: data});
            })
            .catch(err => {
                console.log(err)
            })
    };

    refreshCategoryList = () => {
        fetch(`${server}apps/category/list/`)
            .then(res => res.json())
            .then(data => {
                this.setState({categoryList: data}, () => {
                    // console.log(this.state.categoryList)
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

    refreshTypeRoomList = () => {
        fetch(`${server}apps/type-room/list/`)
            .then(res => res.json())
            .then(data => {
                this.setState({typeRoomList: data}, () => {
                    // console.log(this.state.typeRoomList);
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    categoryListOptions = () => {
        const items = this.state.categoryList;

        return items.map((item) => (
            <option value={item.id} key={item.id}>
                {item.name}
            </option>
        ));
    };

    typeRoomListOptions = () => {
        const items = this.state.typeRoomList;

        return items.map((item) => (
            <option value={item.id} key={item.id}>
                {item.name}
            </option>
        ));
    };

    changeSortToDefault = () => {
        this.setState(
            {
                sort: {
                    category: '',
                    type_room: '',
                    floor: '',
                    air_conditioner: '',
                    kitchen: '',
                    hair_dryer: '',
                    iron: '',
                    wifi: '',
                    TV: '',
                    busy: '',
                    single_beds: '',
                    double_beds: ''
                },
            }, () => {
                this.refreshList();
            });
    }

    handleChangeSort = (e) => {
        let {name, value} = e.target;

        let sort = {...this.state.sort, [name]: value};

        this.setState({ sort }, () =>{
            this.refreshList();
            // console.log(this.state.sort)
        });
    }

    handleChangeSearch = (e) => {
        let {name, value} = e.target;

        let search = { ...this.state.activeItem, [name]: value };

        this.setState({search}, () => {
            this.refreshList();
        });
    }

    renderItems = () => {
        const items = this.state.items;

        if (items.length === 0){
            return <h4 className="text-center">There is no Rooms</h4>
        }

        return items.map((item) => (
            <RoomItem item={item} key={item.id} refresh={this.refreshList}/>
        ))
    }

    render() {
        return (
            <Container
                fluid
                className="rooms p-0 d-flex flex-column align-items-center"
                id="room_height"
                style={{height: `${window.innerHeight - 1}px`}}
            >
                <Navbar collapseOnSelect expand="lg" className="back-light w-100">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to="/">
                                <Image src="/images/Logo.png" className="logo-size"/>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto w-100 justify-content-end">
                                <Nav.Link href="/" className="text-decoration-underline text-brown mx-3">
                                    <h5>Home</h5>
                                </Nav.Link>
                                <Nav.Link to="/service" className="text-decoration-underline text-brown mx-3">
                                    <h5>Service</h5>
                                </Nav.Link>
                                <Nav.Link href="/event" className="text-decoration-underline text-brown mx-3">
                                    <h5>Events</h5>
                                </Nav.Link>
                                <Nav.Link href="/gallery" className="text-decoration-underline text-brown mx-3">
                                    <h5>Gallery</h5>
                                </Nav.Link>
                                <Nav.Link href="/about-us" className="text-decoration-underline text-brown mx-3">
                                    <h5>About Us</h5>
                                </Nav.Link>
                                <Nav.Link href="/" className="text-decoration-underline text-brown mx-3">
                                    <h5>Contacts</h5>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/*<Row className="d-flex justify-content-center align-items-center w-75">*/}
                {/*    <Col>*/}
                {/*        <Accordion defaultActiveKey={['0']}>*/}
                {/*            <Accordion.Item eventKey="0">*/}
                {/*                <Accordion.Header className="d-flex justify-content-evenly">*/}
                {/*                    <Form.Control*/}
                {/*                        name="name"*/}
                {/*                        className="w-75 rounded-0"*/}
                {/*                        type="text"*/}
                {/*                        placeholder="Search"*/}
                {/*                        onChange={this.handleChangeSearch}*/}
                {/*                    />*/}
                {/*                </Accordion.Header>*/}
                {/*                <Accordion.Body>*/}
                {/*                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                {/*                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad*/}
                {/*                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
                {/*                    aliquip ex ea commodo consequat. Duis aute irure dolor in*/}
                {/*                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla*/}
                {/*                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in*/}
                {/*                    culpa qui officia deserunt mollit anim id est laborum.*/}
                {/*                </Accordion.Body>*/}
                {/*            </Accordion.Item>*/}
                {/*        </Accordion>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row className="p-2 text-dark back-light">*/}
                {/*    <Col className="d-flex justify-content-start align-items-center">*/}
                {/*        <Link to="/">*/}
                {/*            <Image src="/images/Logo.png" className="logo-size"/>*/}
                {/*        </Link>*/}
                {/*    </Col>*/}
                {/*    <Col className="d-flex justify-content-end align-items-center">*/}
                {/*        <Link to="/" className="text-decoration-underline text-brown mx-3">*/}
                {/*            <h6>Home</h6>*/}
                {/*        </Link>*/}
                {/*        <Link to="/service" className="text-decoration-underline text-brown mx-3">*/}
                {/*            <h6>Service</h6>*/}
                {/*        </Link>*/}
                {/*        <Link to="/event" className="text-decoration-underline text-brown mx-3">*/}
                {/*            <h6>Events</h6>*/}
                {/*        </Link>*/}
                {/*        <Link to="/gallery" className="text-decoration-underline text-brown mx-3">*/}
                {/*            <h6>Gallery</h6>*/}
                {/*        </Link>*/}
                {/*        <Link to="/about-us" className="text-decoration-underline text-brown mx-3">*/}
                {/*            <h6>About Us</h6>*/}
                {/*        </Link>*/}
                {/*        <Link to="/" className="text-decoration-underline text-brown mx-3">*/}
                {/*            <h6>Contacts</h6>*/}
                {/*        </Link>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Row>
                    <Col xs={7} className="p-3">
                        <Container className="back-light p-3 px-4">
                            {this.renderItems()}
                        </Container>
                    </Col>
                    <Col xs={5}>
                        <Row className="back-light p-2 d-flex justify-content-center mb-3">
                            <Form.Control
                                name="name"
                                className="w-75 rounded-0"
                                type="text"
                                placeholder="Search"
                                onChange={this.handleChangeSearch}
                            />
                        </Row>
                        <Row className="back-light p-2 d-flex justify-content-center py-5">
                            <Row className="mb-4">
                                <Button variant="outline-primary rounded-0" className="button-color" onClick={this.changeSortToDefault}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-arrow-clockwise" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                                        <path
                                            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                                    </svg>
                                </Button>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">Category</Form.Label>
                                        <Form.Select
                                            name="category"
                                            className="rounded-0"
                                            value={this.state.sort.category}
                                            onChange={this.handleChangeSort}
                                        >
                                            <option value="">Any</option>
                                            {this.categoryListOptions()}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">Room Type</Form.Label>
                                        <Form.Select
                                            name="type_room"
                                            className="rounded-0"
                                            value={this.state.sort.type_room}
                                            onChange={this.handleChangeSort}
                                        >
                                            <option value="">Any</option>
                                            {this.typeRoomListOptions()}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">Single Beds</Form.Label>
                                        <Form.Control
                                            name="single_beds"
                                            type="number"
                                            placeholder="Single Beds"
                                            className="rounded-0"
                                            value={this.state.sort.single_beds}
                                            onChange={this.handleChangeSort}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">Double Beds</Form.Label>
                                        <Form.Control
                                            name="double_beds"
                                            type="number"
                                            placeholder="Double Beds"
                                            className="rounded-0"
                                            value={this.state.sort.double_beds}
                                            onChange={this.handleChangeSort}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">Floor</Form.Label>
                                        <Form.Control
                                            name="floor"
                                            type="number"
                                            placeholder="Floor"
                                            className="rounded-0"
                                            value={this.state.sort.floor}
                                            onChange={this.handleChangeSort}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">Busy</Form.Label>
                                        <Form.Select
                                            name="busy"
                                            value={this.state.sort.busy}
                                            className="rounded-0"
                                            onChange={this.handleChangeSort}
                                        >
                                            <option value="">Any</option>
                                            <option value="1">Busy</option>
                                            <option value="0">Not Busy</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="">
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">Conditioner</Form.Label>
                                        <Form.Select
                                            name="air_conditioner"
                                            className="rounded-0"
                                            value={this.state.sort.air_conditioner}
                                            onChange={this.handleChangeSort}
                                        >
                                            <option value="">
                                                ---
                                            </option>
                                            <option value="1">
                                                ➕
                                            </option>
                                            <option value="0">
                                                ➖
                                            </option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">Kitchen</Form.Label>
                                        <Form.Select
                                            name="kitchen"
                                            className="rounded-0"
                                            value={this.state.sort.kitchen}
                                            onChange={this.handleChangeSort}
                                        >
                                            <option value="">
                                                ---
                                            </option>
                                            <option value="1">
                                                ➕
                                            </option>
                                            <option value="0">
                                                ➖
                                            </option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">Hair Dryer</Form.Label>
                                        <Form.Select
                                            name="hair_dryer"
                                            className="rounded-0"
                                            value={this.state.sort.hair_dryer}
                                            onChange={this.handleChangeSort}
                                        >
                                            <option value="">
                                                ---
                                            </option>
                                            <option value="1">
                                                ➕
                                            </option>
                                            <option value="0">
                                                ➖
                                            </option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">Iron</Form.Label>
                                        <Form.Select
                                            name="iron"
                                            className="rounded-0"
                                            value={this.state.sort.iron}
                                            onChange={this.handleChangeSort}
                                        >
                                            <option value="">
                                                ---
                                            </option>
                                            <option value="1">
                                                ➕
                                            </option>
                                            <option value="0">
                                                ➖
                                            </option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">WiFi</Form.Label>
                                        <Form.Select
                                            name="wifi"
                                            className="rounded-0"
                                            value={this.state.sort.wifi}
                                            onChange={this.handleChangeSort}
                                        >
                                            <option value="">
                                                ---
                                            </option>
                                            <option value="1">
                                                ➕
                                            </option>
                                            <option value="0">
                                                ➖
                                            </option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="text-dark">TV</Form.Label>
                                        <Form.Select
                                            name="TV"
                                                className="rounded-0"
                                            value={this.state.sort.TV}
                                            onChange={this.handleChangeSort}
                                        >
                                            <option value="">
                                                ---
                                            </option>
                                            <option value="1">
                                                ➕
                                            </option>
                                            <option value="0">
                                                ➖
                                            </option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}