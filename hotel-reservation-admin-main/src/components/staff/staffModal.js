import {Component} from "react";
import {
    Button,
    Form, FormControl,
    Modal,
} from "react-bootstrap";

export default class StaffModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        let activeItem = { ...this.state.activeItem, [name]: value };

        if (name === "is_active"){
            activeItem = {...this.state.activeItem, [name]: !this.state.activeItem.is_active};
        }

        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;

        return (
            <Modal show={true} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Staff</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <FormControl
                                name="first_name"
                                type="text"
                                placeholder="First Name"
                                value={this.state.activeItem.first_name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <FormControl
                                name="last_name"
                                type="text"
                                placeholder="Last Name"
                                value={this.state.activeItem.last_name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <FormControl
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={this.state.activeItem.email}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <FormControl
                                name="phone"
                                type="text"
                                placeholder="Phone Number"
                                value={this.state.activeItem.phone}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <Form.Check
                                name="is_active"
                                label="Is active"
                                type="checkbox"
                                checked={this.state.activeItem.is_active}
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
