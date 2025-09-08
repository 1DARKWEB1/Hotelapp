import React, {Component} from "react"
import server from "../../index";
import axios from "axios";
import Row from "react-bootstrap/Row";
import {Button, Card, Carousel, Col, Form} from "react-bootstrap";
import RoomModal from "./roomModal";
import ImageModal from "./imageModal";
import RoomInfoModal from "./roomInfoModal";
import ShowCardImage from "./showCardImage";

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                busy: ''
            },
            categoryList: [],
            typeRoomList: [],
            roomList: [],
            modal: false,
            imageModal: false,
            infoModal: false,
            activeImage: {
                imageName: null,
                roomId: null,
                image: null,
            },
            activeItem: {
                category: null,
                type_room: null,
                name: null,
                area: null,
                info: null,
                floor: null,
                room_number: null,
                single_beds: null,
                double_beds: null,
                air_conditioner: null,
                kitchen: null,
                hair_dryer: null,
                iron: null,
                wifi: null,
                TV: null,
                price: null,
                busy: null
            },
            imageShowModal: false,
            imageForModal: null
        };
    }

    componentDidMount() {
        this.refreshList();
        this.refreshCategoryList();
        this.refreshTypeRoomList();
    }

    refreshList = () => {
        fetch(`${server}apps/room/list?category=${this.state.sort.category}&type_room=${this.state.sort.type_room}&floor=${this.state.sort.floor}&air_conditioner=${this.state.sort.air_conditioner}&kitchen=${this.state.sort.kitchen}&hair_dryer=${this.state.sort.hair_dryer}&iron=${this.state.sort.iron}&wifi=${this.state.sort.wifi}&TV=${this.state.sort.TV}&busy=${this.state.sort.busy}`)
            .then(res => res.json())
            .then(data => {
                this.setState({roomList: data});
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
                    console.log(this.state.categoryList)
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
                    console.log(this.state.typeRoomList);
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    toggleImage = () => {
        this.setState({ imageModal: !this.state.imageModal });
    };

    toggleInfo = () => {
        this.setState({ infoModal: !this.state.infoModal });
    }

    toggleShowImageModal = () => {
        this.setState({ imageShowModal: !this.state.imageShowModal })
    }

    handleSubmit = (item) => {
        this.toggle();

        const itemForm = new FormData();
        Object.keys(item).forEach(key => itemForm.append(key, item[key]));

        axios
            .post(`${server}apps/room/create/`, itemForm)
            .then((res) => this.refreshList());
    };

    handleDelete = (item) => {
        let really = window.confirm("Do you want delete");

        if (really) {
            axios
                .delete(`${server}apps/room/destroy/${item.id}/`)
                .then((res) => this.refreshList());
        }
    };

    handleSubmitImage = (item) => {
        this.toggleImage();

        const itemImage = new FormData();
        itemImage.append(item.imageName, item.image)

        axios
            .patch(`${server}apps/room/update/${item.roomId}/`, itemImage)
            .then((res) => this.refreshList());
        return;
    }

    handleSubmitInfo = (item) => {
        let itemNew = item;
        delete itemNew.image1
        delete itemNew.image2
        delete itemNew.image3
        delete itemNew.image4
        this.toggleInfo();

        axios
            .patch(`${server}apps/room/update/${item.id}/`, itemNew)
            .then((res) => this.refreshList());
    }

    createItem = () => {
        const item = {
            category: null,
            type_room: null,
            name: null,
            area: null,
            info: null,
            floor: null,
            room_number: null,
            single_beds: null,
            double_beds: null,
            air_conditioner: null,
            kitchen: null,
            hair_dryer: null,
            iron: null,
            wifi: null,
            TV: null,
            price: null,
            busy: null
        };

        this.setState({ activeItem: item, modal: !this.state.modal });
    };

    editImage = (imageName, roomId) => {
        let Item = {
            imageName: imageName,
            roomId: roomId
        }
        this.setState({ activeImage: Item, imageModal: !this.state.imageModal})
    }

    editItem = (item) => {
        this.setState({ activeItem: item, infoModal: !this.state.infoModal });
    };

    getCategoryById = (pk) => {
        for(let i = 0; i < this.state.categoryList.length; ++i) {
            if (this.state.categoryList[i].id === pk){
                return this.state.categoryList[i].name;
            }
        }
    }

    getTypeRoomById = (pk) => {
        for(let i = 0; i < this.state.typeRoomList.length; ++i) {
            if (this.state.typeRoomList[i].id === pk){
                return this.state.typeRoomList[i].name;
            }
        }
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

    handleChangeSort = (e) => {
        let {name, value} = e.target;

        let sort = {...this.state.sort, [name]: value};

        this.setState({ sort }, () =>{
            this.refreshList();
            console.log(this.state.sort)
        });
    }

    renderItems = () => {
        const items = this.state.roomList;

        if (items.length === 0){
            return <h1>There is no rooms</h1>;
        }

        return items.map((item) => (
            <Card className="tg-card" key={item.id}>
                <Carousel slide={false} style={{height: '200px', overflow: "hidden", justifySelf: "center"}}>
                    <Carousel.Item>
                        <Row className="p-2 bg-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-pencil-square text-light mx-2" viewBox="0 0 16 16" style={{cursor: "pointer"}} onClick={() => { this.editImage('image1', item.id) }}>
                                <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd"
                                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </Row>
                        <img
                            className="d-block w-100"
                            src={item.image1}
                            alt="First slide"
                            style={{ cursor: "pointer" }}
                            onClick={() => {this.openImage(item.image1)}}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="p-2 bg-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-pencil-square text-light mx-2" viewBox="0 0 16 16" style={{cursor: "pointer"}} onClick={() => { this.editImage('image2', item.id) }}>
                                <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd"
                                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </Row>
                        <img
                            className="d-block w-100"
                            src={item.image2}
                            alt="Second slide"
                            style={{ cursor: "pointer" }}
                            onClick={() => {this.openImage(item.image2)}}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="p-2 bg-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-pencil-square text-light mx-2" viewBox="0 0 16 16" style={{cursor: "pointer"}} onClick={() => { this.editImage('image3', item.id) }}>
                                <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd"
                                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </Row>
                        <img
                            className="d-block w-100"
                            src={item.image3}
                            alt="Third slide"
                            style={{ cursor: "pointer" }}
                            onClick={() => {this.openImage(item.image3)}}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="p-2 bg-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-pencil-square text-light mx-2" viewBox="0 0 16 16" style={{cursor: "pointer"}} onClick={() => { this.editImage('image4', item.id) }}>
                                <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd"
                                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </Row>
                        <img
                            className="d-block w-100"
                            src={item.image4}
                            alt="Third slide"
                            style={{ cursor: "pointer" }}
                            onClick={() => {this.openImage(item.image4)}}
                        />
                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <Card.Title style={{fontWeight: 600, color: "#229ED9"}}>{item.name}</Card.Title>
                    <Row>
                        <Col>
                            <h6>Category: {this.getCategoryById(item.category)}</h6>
                            <br/>
                            <h6>Floor {item.floor}</h6>
                            <h6>Room number: {item.room_number}</h6>
                            <h6>Room area: {item.area} kv</h6>
                            <h6>Single Beds: {item.single_beds}</h6>
                            <h6>Double Beds: {item.double_beds}</h6>
                            <h6>Room number: {item.room_number}</h6>
                            <h6>Price: {item.price} $</h6>
                        </Col>
                        <Col>
                            <h6>Room Type: {this.getTypeRoomById(item.type_room)}</h6>
                            <br/>
                            <h6>Air Conditioner: {item.air_conditioner ? "✅" : "❌"}</h6>
                            <h6>Kitchen: {item.kitchen ? "✅" : "❌"}</h6>
                            <h6>Hair Dryer: {item.hair_dryer ? "✅" : "❌"}</h6>
                            <h6>Iron: {item.iron ? "✅" : "❌"}</h6>
                            <h6>WiFi: {item.wifi ? "✅" : "❌"}</h6>
                            <h6>TV: {item.TV ? "✅" : "❌"}</h6>
                            <h6>Busy: {item.busy ? "✅" : "❌"}</h6>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col className="d-flex justify-content-end">
                            <button
                                className="tg-btn tg-btn-round"
                                title="Edit"
                                onClick={() => {this.editItem(item)}}
                            >
                                <span role="img" aria-label="edit">✏️</span>
                            </button>
                            <button
                                className="tg-btn tg-btn-round"
                                title="Delete"
                                onClick={() => {this.handleDelete(item)}}
                            >
                                <span role="img" aria-label="delete">🗑️</span>
                            </button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        ))
    }

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
                },
            }, () => {
                this.refreshList();
            });
    }

    openImage = (image) => {
        this.setState({imageForModal: image}, () => {
            this.toggleShowImageModal();
        });
    }

    render() {
        return (
            <div>
                {/* ... модальные окна ... */}
                <div className="d-flex flex-row">
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <Row className="p-2">
                            <Col className="d-flex justify-content-evenly flex-wrap">
                                {this.renderItems()}
                            </Col>
                        </Row>
                    </div>
                    <aside
                        className="tg-filter-sidebar"
                        style={{
                            width: 320,
                            minWidth: 260,
                            marginLeft: 24,
                            background: "#f7fbff",
                            borderRadius: 18,
                            boxShadow: "0 2px 12px rgba(34, 158, 217, 0.07)",
                            padding: "32px 20px",
                            height: "fit-content",
                            alignSelf: "flex-start",
                            position: "sticky",
                            top: 32
                        }}
                    >
                        <h4 style={{ color: "#229ED9", fontWeight: 700, marginBottom: 24 }}>Filters</h4>
                        <button
                            type="button"
                            className="btn w-100 mb-3"
                            onClick={this.changeSortToDefault}
                            style={{ borderRadius: "12px", fontWeight: 500 }}
                        >
                            Reset Filters
                        </button>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                                name="category"
                                value={this.state.sort.category}
                                onChange={this.handleChangeSort}
                            >
                                <option value="">Any</option>
                                {this.categoryListOptions()}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Room Type</Form.Label>
                            <Form.Select
                                name="type_room"
                                value={this.state.sort.type_room}
                                onChange={this.handleChangeSort}
                            >
                                <option value="">Any</option>
                                {this.typeRoomListOptions()}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Floor</Form.Label>
                            <Form.Control
                                name="floor"
                                type="number"
                                placeholder="Floor"
                                value={this.state.sort.floor}
                                onChange={this.handleChangeSort}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Air Conditioner</Form.Label>
                            <Form.Select
                                name="air_conditioner"
                                value={this.state.sort.air_conditioner}
                                onChange={this.handleChangeSort}
                            >
                                <option value="">Any</option>
                                <option value="1">Exist</option>
                                <option value="0">Not Exist</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Kitchen</Form.Label>
                            <Form.Select
                                name="kitchen"
                                value={this.state.sort.kitchen}
                                onChange={this.handleChangeSort}
                            >
                                <option value="">Any</option>
                                <option value="1">Exist</option>
                                <option value="0">Not Exist</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Hair Dryer</Form.Label>
                            <Form.Select
                                name="hair_dryer"
                                value={this.state.sort.hair_dryer}
                                onChange={this.handleChangeSort}
                            >
                                <option value="">Any</option>
                                <option value="1">Exist</option>
                                <option value="0">Not Exist</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Iron</Form.Label>
                            <Form.Select
                                name="iron"
                                value={this.state.sort.iron}
                                onChange={this.handleChangeSort}
                            >
                                <option value="">Any</option>
                                <option value="1">Exist</option>
                                <option value="0">Not Exist</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>WiFi</Form.Label>
                            <Form.Select
                                name="wifi"
                                value={this.state.sort.wifi}
                                onChange={this.handleChangeSort}
                            >
                                <option value="">Any</option>
                                <option value="1">Exist</option>
                                <option value="0">Not Exist</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>TV</Form.Label>
                            <Form.Select
                                name="TV"
                                value={this.state.sort.TV}
                                onChange={this.handleChangeSort}
                            >
                                <option value="">Any</option>
                                <option value="1">Exist</option>
                                <option value="0">Not Exist</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Busy</Form.Label>
                            <Form.Select
                                name="busy"
                                value={this.state.sort.busy}
                                onChange={this.handleChangeSort}
                            >
                                <option value="">Any</option>
                                <option value="1">Busy</option>
                                <option value="0">Not Busy</option>
                            </Form.Select>
                        </Form.Group>
                    </aside>
                </div>
                {this.state.imageShowModal ? (
                    <ShowCardImage
                        activeItem={this.state.imageForModal}
                        toggle={this.toggleShowImageModal}
                    />
                ) : null}
                {this.state.modal ? (
                    <RoomModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
                {this.state.imageModal ? (
                    <ImageModal
                        activeImage={this.state.activeImage}
                        toggle={this.toggleImage}
                        onSave={this.handleSubmitImage}
                    />
                ) : null}
                {this.state.infoModal ? (
                    <RoomInfoModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggleInfo}
                        onSave={this.handleSubmitInfo}
                    />
                ) : null}
            </div>
        )
    }
}

export default Room;