import {Component} from "react";
import {
    Button,
    Form, FormControl,
    Modal,
} from "react-bootstrap";

export default class CategoryModal extends Component {
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
                    <Modal.Title>Category Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Category Name</Form.Label>
                            <FormControl
                                name="name"
                                type="text"
                                placeholder="Category Room"
                                value={this.state.activeItem.name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Button
                            style={{display: "none"}}
                            type="submit"
                            color="success"
                            onClick={() => onSave(this.state.activeItem)}
                        >
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
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
