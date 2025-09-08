import {Component} from "react";
import {Form} from "react-bootstrap";

export default class SearchCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        const activeItem = { ...this.state.activeItem, [name]: value };

        console.log(activeItem);

        // this.setState({ activeItem });
    };
    render() {
        return(
            <Form className="d-flex justify-content-start align-items-center">
                <Form.Group className="m-1 d-flex">
                    <Form.Control
                        name="name"
                        placeholder="Search"
                        onChange={this.handleChange}
                        className="shadow"
                    />
                </Form.Group>
            </Form>
        )
    }
}