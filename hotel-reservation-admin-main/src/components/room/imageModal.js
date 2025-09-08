import {Component} from "react";
import {Button, Form, FormControl, Modal} from "react-bootstrap";

export default class ImageModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeImage: this.props.activeImage,
        }
    }

    handleChange = (e) => {
        let { name, files } = e.target;

        const activeImage = { ...this.state.activeImage, [name]: files[0] };

        this.setState({activeImage});
    };

    render() {
        let {toggle, onSave} = this.props;

        return (
            <Modal show={true} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Category</Modal.Title>
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
                            <Button
                                style={{display: "none"}}
                                color="success"
                                onClick={() => onSave(this.state.activeImage)}
                            >
                                Save
                            </Button>
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
        )
    };
}