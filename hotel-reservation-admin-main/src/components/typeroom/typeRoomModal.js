import {Component} from "react";
import {
    Button,
    Form, FormControl,
    Modal,
} from "react-bootstrap";

export default class TypeRoomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;

        return (
            <Modal show={true} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Type Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Type Name</Form.Label>
                            <FormControl
                                name="name"
                                type="text"
                                placeholder="Name of Type Room"
                                value={this.state.activeItem.name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Button
                            type="submit"
                            style={{display: "none"}}
                            color="success"
                            onClick={() => onSave(this.state.activeItem)}
                        >
                            Save
                        </Button>
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
        )
    }
}
