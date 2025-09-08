import {Component} from "react";
import {Image, Modal} from "react-bootstrap";

export default class ShowCardImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeImage: this.props.imageForModal,
        }
    }

    render() {
        let {toggle} = this.props;

        return (
            <Modal show={true} onHide={toggle} size="xl" centered>
                <div className="w-100 bg-dark p-5">
                    <Image src={this.props.activeItem} className="w-100"/>
                </div>
            </Modal>
        )
    };
}