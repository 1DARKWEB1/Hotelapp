import React, {Component} from "react"
import { Helmet } from "react-helmet"
import {Col, Table} from "react-bootstrap";
import server from "../../index";
import axios from "axios";
import Row from "react-bootstrap/Row";
import CategoryModal from "./categoryModal";
// import SearchCategory from "./search_category";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            categoryList: [],
            modal: false,
            activeItem: {
                name: ''
            }
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        fetch(server + "apps/category/list/")
            .then(res => res.json())
            .then(data => {
                this.setState({categoryList: data});
            })
            .catch(err => {
                console.log(err)
            })
    };

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    displayCompleted = (status) => {
        if (status) {
            return this.setState({ viewCompleted: true });
        }

        return this.setState({ viewCompleted: false });
    };

    handleSubmit = (item) => {
        this.toggle();

        if (item.id) {
            axios
                .put(`${server}apps/category/update/${item.id}/`, item)
                .then((res) => this.refreshList());
            return;
        }
        else {
            axios
                .post(`${server}apps/category/create/`, item)
                .then((res) => this.refreshList());
        }
    };

    handleDelete = (item) => {
        axios
            .delete(`${server}apps/category/destroy/${item.id}/`)
            .then((res) => this.refreshList());
    };

    createItem = () => {
        const item = { name: '' };

        this.setState({ activeItem: item, modal: !this.state.modal });
    };

    editItem = (item) => {
        this.setState({ activeItem: item, modal: !this.state.modal });
    };

    render() {
        return (
            <div>
                <Helmet>
                    <meta name="keywords" content="bekki, bekzod" />
                    <meta
                        name="description"
                        content="Get lyrics of every music for free"
                    />
                </Helmet>
                {this.state.modal ? (
                    <CategoryModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
                <Row className="p-2 tg-header-block align-items-center">
                    <Col></Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <h3>Category Of Room</h3>
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
                        <th>ID</th>
                        <th>Category Name</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.categoryList.map(category => {
                            return <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-pencil-square text-primary mx-2" viewBox="0 0 16 16"
                                         style={{cursor: "pointer"}}
                                         onClick={() => this.editItem(category)}>
                                        <path
                                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd"
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-trash text-danger mx-2" viewBox="0 0 16 16"
                                         style={{cursor: "pointer"}}
                                         onClick={() => this.handleDelete(category)}>
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd"
                                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Category;