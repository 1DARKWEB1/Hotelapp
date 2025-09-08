import {Component} from "react"
import server from "../../index";
import Row from "react-bootstrap/Row";
import {Col, Form, Image} from "react-bootstrap";
import ShowImageModal from "./showImageModal";
import axios from "axios";
import AddImageModal from "./addImageModal";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                category: ""
            },
            categoryList: [],
            imageList: [],
            showImageModal: false,
            addImageModal: false,
            activeItem: {
                category: null,
                image: null
            }
        };
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

    categoryList = () => {
        const items = this.state.categoryList;

        return items.map((item) => (
            <option value={item.id} key={item.id}>
                {item.name}
            </option>
        ));
    };

    componentDidMount() {
        this.refreshList();
        this.refreshCategoryList();
    }

    refreshList = () => {
        fetch(server + `apps/gallery/list/?category=${this.state.sort.category}`)
            .then(res => res.json())
            .then(data => {
                this.setState({imageList: data});
            })
            .catch(err => {
                console.log(err)
            })
    };

    toggleShowImageModal = () => {
        this.setState({ showImageModal: !this.state.showImageModal })
    }

    toggleAddImageModal = () => {
        this.setState({ addImageModal: !this.state.addImageModal })
    }

    openImage = (image) => {
        this.setState({activeItem: image})
        this.toggleShowImageModal();
    }

    createImage = () => {
        const item = {
            category: null,
            image: null
        };

        this.setState({ activeItem: item, addImageModal: !this.state.addImageModal });
    }

    handeDeleteImage = (item) =>{
        axios
            .delete(`${server}apps/gallery/destroy/${item.id}/`)
            .then((res) => this.refreshList());
    }

    renderImages = () => {
        const images = this.state.imageList;

        if (images.length === 0){
            return <h1>There is no images</h1>
        } else {
            return images.map((image) => (
                <div
                    className="d-flex justify-content-center align-items-center overflow-hidden flex-wrap bg-dark m-2 position-relative"
                    style={{width: "350px", height: "180px", cursor: "pointer"}}
                    key={image.id}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-trash text-light m-3 position-absolute shadow" viewBox="0 0 16 16"
                         style={ { right: "0px", top: "0px", cursor: "pointer" } }
                         onClick={() => {this.handeDeleteImage(image)}}
                    >
                        <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    <Image
                        src={image.image}
                        className="w-100"
                        onClick={() => {this.openImage(image)}}
                    />
                </div>
            ))
        }
    }

    handleSubmit = (item) => {
        this.toggleAddImageModal();

        const itemForm = new FormData();
        Object.keys(item).forEach(key => itemForm.append(key, item[key]));

        axios
            .post(`${server}apps/gallery/create/`, itemForm)
            .then((res) => this.refreshList());
    }

    handleChangeCategory = (e) => {
        let {name, value} = e.target;

        let sort = {...this.state.sort, [name]: value};

        this.setState({ sort }, () =>{
            this.refreshList();
        });
    }

    render() {
        return (
            <div>
                {this.state.showImageModal ? (
                    <ShowImageModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggleShowImageModal}
                    />
                ) : null}
                {this.state.addImageModal ? (
                    <AddImageModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggleAddImageModal}
                        onSave={this.handleSubmit}
                    />
                ) : null}
                <Row className="p-2 tg-header-block align-items-center">
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Select
                                    name="category"
                                    value={this.state.sort.category}
                                    onChange={this.handleChangeCategory}
                                >
                                    <option value="">All</option>
                                    {this.categoryList()}
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <h3>Gallery</h3>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <button
                            className="btn btn-light px-5 shadow"
                            onClick={this.createImage}
                        >
                            +
                        </button>
                    </Col>
                </Row>
                <Row className="p-2">
                    <Col className="d-flex justify-content-evenly flex-wrap">
                        {this.renderImages()}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Gallery;