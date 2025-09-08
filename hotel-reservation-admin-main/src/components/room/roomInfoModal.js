import {Component} from "react";
import server from "../../index";
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class RoomInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
            categoryList: [],
            typeRoomList: []
        }
    }

    refreshCategoryList = () => {
        fetch(server + "apps/category/list/")
            .then(res => res.json())
            .then(data => {
                this.setState({categoryList: data});
            })
            .catch(err => {
                console.log(err)
            })
    };

    refreshTypeRoomList = () => {
        fetch(server + "apps/type-room/list/")
            .then(res => res.json())
            .then(data => {
                this.setState({typeRoomList: data});
            })
            .catch(err => {
                console.log(err)
            })
    };

    componentDidMount() {
        this.refreshCategoryList();
        this.refreshTypeRoomList();
    }
    // components
    categoryList = () => {
        const items = this.state.categoryList;

        return items.map((item) => (
            <option value={item.id}>
                {item.name}
            </option>
        ));
    };

    // components
    typeRoomList = () => {
        const items = this.state.typeRoomList;

        return items.map((item) => (
            <option value={item.id}>
                {item.name}
            </option>
        ))
    }

    handleChange = (e) => {
        let {name, value} = e.target;

        let activeItem = {...this.state.activeItem, [name]: value};

        switch (name){
            case "air_conditioner":
                activeItem = {...this.state.activeItem, [name]: !this.state.activeItem.air_conditioner};
                break;
            case "kitchen":
                activeItem = {...this.state.activeItem, [name]: !this.state.activeItem.kitchen};
                break;
            case "hair_dryer":
                activeItem = {...this.state.activeItem, [name]: !this.state.activeItem.hair_dryer};
                break;
            case "iron":
                activeItem = {...this.state.activeItem, [name]: !this.state.activeItem.iron};
                break;
            case "wifi":
                activeItem = {...this.state.activeItem, [name]: !this.state.activeItem.wifi};
                break;
            case "TV":
                activeItem = {...this.state.activeItem, [name]: !this.state.activeItem.TV};
                break;
            case "busy":
                activeItem = {...this.state.activeItem, [name]: !this.state.activeItem.busy};
                break;
            default:
                break;
        }

        this.setState({activeItem});

        console.log(this.state.activeItem);
    };

    render() {
        const { toggle, onSave } = this.props;

        return (
            <Modal show={true} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form encType="multipart/form-data">
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select
                                        value={this.state.activeItem.category}
                                        onChange={this.handleChange}
                                        name="category"
                                    >
                                        <option value={null}>
                                            Select Category
                                        </option>
                                        {this.categoryList()}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Type Of Room</Form.Label>
                                    <Form.Select
                                        value={this.state.activeItem.type_room}
                                        onChange={this.handleChange}
                                        name="type_room"
                                    >
                                        <option value={null}>
                                            Select Category
                                        </option>
                                        {this.typeRoomList()}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <br/>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <FormControl
                                name="name"
                                type="text"
                                value={this.state.activeItem.name}
                                placeholder="Room name"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Area Of The Room</Form.Label>
                            <FormControl
                                name="area"
                                type="number"
                                value={this.state.activeItem.area}
                                placeholder="Area in meter sq"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brief info about room</Form.Label>
                            <FormControl
                                name="info"
                                as="textarea"
                                value={this.state.activeItem.info}
                                placeholder="Information about room"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Floor</Form.Label>
                                    <FormControl
                                        name="floor"
                                        type="number"
                                        value={this.state.activeItem.floor}
                                        placeholder="Floor"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Room number</Form.Label>
                                    <FormControl
                                        name="room_number"
                                        type="text"
                                        value={this.state.activeItem.room_number}
                                        placeholder="Room number"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Single beds</Form.Label>
                                    <FormControl
                                        name="single_beds"
                                        defaultValue={0}
                                        type="number"
                                        value={this.state.activeItem.single_beds}
                                        placeholder="Single beds in the room"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Double beds</Form.Label>
                                    <FormControl
                                        name="double_beds"
                                        defaultValue={0}
                                        type="number"
                                        value={this.state.activeItem.double_beds}
                                        placeholder="Double beds in the room"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Check
                                        name="air_conditioner"
                                        type="checkbox"
                                        label="Air Conditioner"
                                        checked={this.state.activeItem.air_conditioner}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Check
                                        name="kitchen"
                                        type="checkbox"
                                        label="Kitchen"
                                        checked={this.state.activeItem.kitchen}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Check
                                        name="hair_dryer"
                                        type="checkbox"
                                        label="Hair Dryer"
                                        checked={this.state.activeItem.hair_dryer}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Check
                                        name="iron"
                                        type="checkbox"
                                        label="Iron"
                                        checked={this.state.activeItem.iron}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Check
                                        name="wifi"
                                        type="checkbox"
                                        label="Wifi"
                                        checked={this.state.activeItem.wifi}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Check
                                        name="TV"
                                        type="checkbox"
                                        label="TV"
                                        checked={this.state.activeItem.TV}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <FormControl
                                        name="price"
                                        type="number"
                                        placeholder="Price in Dollars"
                                        value={this.state.activeItem.price}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Check
                                        name="busy"
                                        type="checkbox"
                                        label="Busy"
                                        checked={this.state.activeItem.busy}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        color="success"
                        onClick={() => onSave(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };
}