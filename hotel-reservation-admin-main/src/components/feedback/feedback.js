import React, {Component} from "react"
import server from "../../index";
import CategoryModal from "../category/categoryModal";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import SearchCategory from "../category/search_category";

class FeedBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            feedBackList: [],
            modal: false,
            activeItem: {
                message: ''
            }
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        fetch(server + "apps/feedback/list/")
            .then(res => res.json())
            .then(data => {
                this.setState({feedBackList: data});
            })
            .catch(err => {
                console.log(err)
            })
    };

    displayCompleted = (status) => {
        if (status) {
            return this.setState({ viewCompleted: true });
        }

        return this.setState({ viewCompleted: false });
    };

    renderItems = () => {
        const items =this.state.feedBackList;

        return items.map((item) => (
            <Row className="bg-secondary text-light my-3 p-2 shadow" key={item.id}>
                <Col xs={9}>
                    {item.message}
                </Col>
                <Col xs={3}>
                    {item.created_at}
                </Col>
            </Row>
        ))
    }

    render() {
        return (
            <div>
                {this.state.modal ? (
                    <CategoryModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
                <Row className="p-2 tg-header-block align-items-center">
                    <Col>
                        <SearchCategory />
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <h3>FeedBack</h3>
                    </Col>
                    <Col></Col>
                </Row>
                <Row className="p-2">
                    <Col>
                        {this.renderItems()}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default FeedBack;