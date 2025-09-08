import {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";

export default class AddEventModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        }
    }

    handleChange = (e) => {
        let { name, files, value } = e.target;

        if (name === 'image'){
            const activeImage = { ...this.state.activeImage, [name]: files[0] };
            this.setState({activeImage});
        } else {
            const activeImage = { ...this.state.activeImage, [name]: value };
            this.setState({activeImage});
        }
    };

    render() {
        let {toggle, onSave} = this.props;

        return (
            <Modal show={true} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form encType="multipart/form-data">
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
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                name="image"
                                type="file"
                                value={this.state.activeItem.image}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Place</Form.Label>
                            <Form.Control
                                name="where"
                                type="text"
                                value={this.state.activeItem.where}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>When</Form.Label>
                            <Form.Control
                                name="when"
                                type="datetime-local"
                                value={this.state.activeItem.when}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        color="success"
                        onClick={() => onSave(this.state.activeImage)}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}