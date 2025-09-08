import {Component} from "react";
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import server from "../../index";

export default class AddImageModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeImage: this.props.activeImage,
            categoryList: []
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

    componentDidMount() {
        this.refreshCategoryList();
    }

    categoryList = () => {
        const items = this.state.categoryList;

        return items.map((item) => (
            <option value={item.id} key={item.id}>
                {item.name}
            </option>
        ));
    };

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
                    <Modal.Title>Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form encType="multipart/form-data">
                        <Form.Group>
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
                        </Form.Group>
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
                        onClick={() => onSave(this.state.activeImage)}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    };
}