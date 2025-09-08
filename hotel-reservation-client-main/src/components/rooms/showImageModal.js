import {Component} from "react";
import {Image, Modal} from "react-bootstrap";
import './rooms.css';

export default class ShowImageModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
        }
    }

    render() {
        let {toggle} = this.props;

        return (
            <Modal show={true} onHide={toggle} size="xl" centered className="bg-invisible">
                <div className="w-100 bg-invisible">
                    <Image src={this.state.image} className="w-100"/>
                </div>
            </Modal>
        )
    };
}