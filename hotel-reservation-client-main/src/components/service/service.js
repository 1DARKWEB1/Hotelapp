import {Component} from "react";

export default class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
        }
    }
    render() {
        return (
            <div>
                <h1>Service</h1>
            </div>
        );
    }
}