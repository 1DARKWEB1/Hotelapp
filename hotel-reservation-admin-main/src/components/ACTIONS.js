import {Component} from "react";
import server from "../index";

export default class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            categoryList: [],
            modal: false,
            activeItem: {
                message: ''
            }
        };
    }

    refreshList = () => {
        fetch(server + `apps/${this.props.name}/list/`)
            .then(res => res.json())
            .then(data => {
                this.setState({categoryList: data});
            })
            .catch(err => {
                console.log(err)
            })
    };
}