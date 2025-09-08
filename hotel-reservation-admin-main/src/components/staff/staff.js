import React, {Component} from "react"
import server from "../../index";
import {Button, Col, Form, Table} from "react-bootstrap";
import SearchCategory from "../category/search_category";
import Row from "react-bootstrap/Row";
import axios from "axios";
import StaffModal from "./staffModal";

export default class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffList: [],
            modal: false,
            activeItem: {
                id: null,
                first_name: null,
                last_name: null,
                email: null,
                phone: null,
                date_joined: null,
                is_active: false,
            },
            search: {
                name: ''
            }
        }
    }

    refreshList = () => {
        fetch(server + `apps/user/staff/list?search=${this.state.search.name}`)
            .then(res => res.json())
            .then(data => {
                this.setState({staffList: data}, () => {
                    console.log(this.state.staffList)
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    componentDidMount() {
        this.refreshList();
    }

    handleSubmit = (item) => {
        this.toggle();

        if (item.id) {
            axios
                .put(`${server}apps/user/staff/update/${item.id}/`, item)
                .then((res) => this.refreshList());
            return;
        }
        else {
            axios
                .post(`${server}apps/user/staff/create/`, item)
                .then((res) => this.refreshList());
        }
    };

    changeActiveStatus = (item) => {
        axios
            .patch(`${server}apps/user/staff/update/${item.id}/`, {is_active: !item.is_active})
            .then((res) => this.refreshList());
    }

    handleDelete = (item) => {
        axios
            .delete(`${server}apps/user/staff/destroy/${item.id}/`)
            .then((res) => this.refreshList());
    };

    createItem = () => {
        const item = { name: '' };

        this.setState({ activeItem: item, modal: !this.state.modal });
    };

    editItem = (item) => {
        this.setState({ activeItem: item, modal: !this.state.modal });
    };

    searchService = (e) => {
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
        const items = this.state.staffList;

        return items.map((item) => (
            <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                    Date: {this.dateLocal(item.date_joined)}
                    <br/>
                    Time: {this.timeLocal(item.date_joined)}
                </td>
                <td>{item.is_active ? "✅" : "❌"}</td>
                <td>
                    |
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-pencil-square text-primary mx-3" viewBox="0 0 16 16"
                         style={{cursor: "pointer"}}
                         onClick={() => this.editItem(item)}>
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-trash text-danger mx-2" viewBox="0 0 16 16"
                         style={{cursor: "pointer"}}
                         onClick={() => this.handleDelete(item)}>
                        <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    {
                        item.is_active ?
                            <Button variant="outline-danger mx-2 w-50" onClick={() => {this.changeActiveStatus(item)}}>
                                Deactivate
                            </Button>
                            :
                            <Button variant="outline-success mx-2 w-50" onClick={() => {this.changeActiveStatus(item)}}>
                                Activate
                            </Button>
                    }
                </td>
            </tr>
        ))
    }

    render() {
        return <div>
            {this.state.modal ? (
                <StaffModal
                    activeItem={this.state.activeItem}
                    toggle={this.toggle}
                    onSave={this.handleSubmit}
                />
            ) : null}
            <Row className="p-2 tg-header-block align-items-center">
                <Col>
                    <Form.Group>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Type here to search"
                            onChange={this.searchService}
                        />
                    </Form.Group>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <h3>Staff</h3>
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
            <Table striped>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Date Joined</th>
                        <th>Is Active</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderItems()}
                </tbody>
            </Table>
        </div>
    }
}