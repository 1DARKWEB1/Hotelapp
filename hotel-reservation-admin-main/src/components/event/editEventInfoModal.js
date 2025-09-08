import {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";

export default class EditEventInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        console.log(name, value)

        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({activeItem}, ()=>{
            console.log("Edited")
        });
    };
    
    

    render() {
        let {toggle, onSave} = this.props;

        return (
            <Modal show={true} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Event Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                value={this.state.activeItem.name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Info</Form.Label>
                            <Form.Control
                                name="info"
                                type="text"
                                value={this.state.activeItem.info}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                name="where"
                                type="text"
                                value={this.state.activeItem.where}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                name="when"
                                type="datetime-local"
                                value={this.datetimeLocal(this.state.activeItem.when)}
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
    }

    datetimeLocal(datetime) {
        const dt = new Date(datetime);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        console.log(dt.toISOString().slice(0, 16))
        return dt.toISOString().slice(0, 16);
    }
}