import {Component} from "react";
import {Button, Form, FormControl, Modal} from "react-bootstrap";

export default class EditEventImageModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        }
    }

    handleChange = (e) => {
        let { name, files } = e.target;

        const activeItem = { ...this.state.activeItem, [name]: files[0] };

        this.setState({activeItem});
    };

    render() {
        let {toggle, onSave} = this.props;

        return (
            <Modal show={true} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Event's name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form encType="multipart/form-data">
                        <Form.Group>
                            <Form.Label>Choose Image</Form.Label>
                            <FormControl
                                name="image"
                                type="file"
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
        )
    };
}