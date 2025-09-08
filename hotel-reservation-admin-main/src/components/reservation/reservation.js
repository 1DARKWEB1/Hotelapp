import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import {Col, Table} from "react-bootstrap";
import server from "../../index";
import axios from "axios";

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        fetch(server + "apps/reservation/list/")
            .then(res => res.json())
            .then(data => {
                this.setState({items: data});
            })
            .catch(err => {
                console.log(err)
            })
    };

    handleDelete = (item) => {
        axios
            .delete(`${server}apps/reservation/destroy/${item.id}/`)
            .then((res) => this.refreshList());
    };

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

    render() {
        return (
            <div>
                <Row className="p-2 tg-header-block align-items-center">
                    <Col>
                        {/*<SearchCategory />*/}
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <h3>Reservations</h3>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        {/*<button*/}
                        {/*    className="btn btn-light px-5 shadow"*/}
                        {/*    onClick={this.createItem}*/}
                        {/*>*/}
                        {/*    +*/}
                        {/*</button>*/}
                    </Col>
                </Row>
                <Table striped>
                    <thead>
                    <tr>
                        <th>Reservation ID</th>
                        <th>User ID</th>
                        <th>Room ID</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.items.map(item => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.user.first_name} {item.user.last_name}</td>
                            <td>{item.room[0].name}</td>
                            <td>
                                Date: {this.dateLocal(item.from_time)}
                                <br/>
                                Time: {this.timeLocal(item.from_time)}
                            </td>
                            <td>
                                Date: {this.dateLocal(item.to_time)}
                                <br/>
                                Time: {this.timeLocal(item.to_time)}
                            </td>
                            <td>{parseInt(item.price)}</td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-trash text-danger mx-2" viewBox="0 0 16 16"
                                     style={{cursor: "pointer"}}
                                     onClick={() => this.handleDelete(item)}>
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

export default Reservation;