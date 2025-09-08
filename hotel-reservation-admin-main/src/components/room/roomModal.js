import {Component} from "react";
import {
    Button,
    Form, FormControl,
    Modal,
} from "react-bootstrap";
import server from "../../index";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class RoomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: {
                air_conditioner: false,
                kitchen: false,
                hair_dryer: false,
                iron: false,
                wifi: false,
                TV: false,
            },
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
            case "image1":
                activeItem = {...this.state.activeItem, [name]: e.target.files[0]};
                break;
            case "image2":
                activeItem = {...this.state.activeItem, [name]: e.target.files[0]};
                break;
            case "image3":
                activeItem = {...this.state.activeItem, [name]: e.target.files[0]};
                break;
            case "image4":
                activeItem = {...this.state.activeItem, [name]: e.target.files[0]};
                break;
            default:
                break;
        }

        this.setState({activeItem});
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
                                placeholder="Room name"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Area Of The Room</Form.Label>
                            <FormControl
                                name="area"
                                type="number"
                                placeholder="Area in meter sq"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brief info about room</Form.Label>
                            <FormControl
                                name="info"
                                as="textarea"
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
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Image 1</Form.Label>
                                    <FormControl
                                        name="image1"
                                        type="file"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Image 2</Form.Label>
                                    <FormControl
                                        name="image2"
                                        type="file"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Image 3</Form.Label>
                                    <FormControl
                                        name="image3"
                                        type="file"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Image 4</Form.Label>
                                    <FormControl
                                        name="image4"
                                        type="file"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br/>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <FormControl
                                name="price"
                                type="text"
                                placeholder="Price in Dollars"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
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