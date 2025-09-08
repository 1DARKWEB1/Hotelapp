import React, {Component} from 'react';
import {Button, Card, Carousel, Col} from "react-bootstrap";
import ShowImageModal from "./showImageModal";
import server from "../../index";
import BookRoom from "../book_room/bookRoom";
import axios from "axios";

class RoomItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // item: this.props.item,
            showImageModal: false,
            image: null,
            category: null,
            type_room: null,
            bookRoomModal: false,
        }
    }

    componentDidMount() {
        this.getCategoryById(this.props.item.category);
        this.getTypeRoomById(this.props.item.type_room);
    }

    toggleShowImageModal = () => {
        this.setState({ showImageModal: !this.state.showImageModal })
    }

    toggleBookRoomModal = () => {
        this.setState({bookRoomModal: !this.state.bookRoomModal});
    }

    openImage = (image) => {
        this.setState({image: image})
        this.toggleShowImageModal();
    }

    getCategoryById = (pk) => {
        fetch(server + `apps/category/retrieve/${pk}`)
            .then(res => res.json())
            .then(data => {
                this.setState({category: data.name})
            })
            .catch(err => {
                console.log(err)
            })
    }

    getTypeRoomById = (pk) => {
        fetch(server + `apps/type-room/retrieve/${pk}`)
            .then(res => res.json())
            .then(data => {
                this.setState({type_room: data.name})
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleSubmit = (item) => {
        this.toggleBookRoomModal();

        let {refresh} = this.props;

        refresh();

        axios
            .post(`${server}apps/reservation/create/`,
                item,
                {
                    headers: {
                        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authTokens')).access}`
                    }
                }
            )
            .then(res => {
                alert("Order received!!!");
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Card className="bg-warning rounded-0 d-flex flex-row justify-content-between bg-light my-3 card-height shadow">
                {this.state.showImageModal ? (
                    <ShowImageModal
                        image={this.state.image}
                        toggle={this.toggleShowImageModal}
                    />
                ) : null}
                {this.state.bookRoomModal ? (
                    <BookRoom
                        toggle={this.toggleBookRoomModal}
                        item={this.props.item}
                        onSave={this.handleSubmit}
                    />
                ) : null}
                <Col xs={4} className="">
                    <Carousel className="carousel-size">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src={this.props.item.image1}
                                alt="First slide"
                                style={{ cursor: "pointer" }}
                                onClick={() => {this.openImage(this.props.item.image1)}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src={this.props.item.image2}
                                alt="First slide"
                                style={{ cursor: "pointer" }}
                                onClick={() => {this.openImage(this.props.item.image2)}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src={this.props.item.image3}
                                alt="First slide"
                                style={{ cursor: "pointer" }}
                                onClick={() => {this.openImage(this.props.item.image3)}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src={this.props.item.image4}
                                alt="First slide"
                                style={{ cursor: "pointer" }}
                                onClick={() => {this.openImage(this.props.item.image4)}}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={4} className="p-1 text-line">
                    <Card.Title className="title-text-size">{this.props.item.name}</Card.Title>
                    <Card.Text className="text-size">{this.props.item.floor}-floor, {this.props.item.room_number}-room, {this.props.item.area} kv</Card.Text>
                    <Card.Text className="text-size">{this.state.category}, {this.state.type_room}</Card.Text>
                    <Card.Text className="text-size">Single Beds: {this.props.item.single_beds}, Double Beds: {this.props.item.double_beds}</Card.Text>
                    <Card.Text className="text-size text-primary">
                        {this.props.item.air_conditioner ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-fan mx-1" viewBox="0 0 20 20">
                                <path
                                    d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z"/>
                            </svg>
                            : null
                        }
                        {this.props.item.wifi ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-wifi mx-1" viewBox="0 0 20 20">
                                <path
                                    d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                                <path
                                    d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                            </svg>
                            : null
                        }
                        {this.props.item.TV ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-tv mx-1" viewBox="0 0 20 20">
                                <path
                                    d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                            </svg>
                            : null
                        }
                        {this.props.item.TV ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-egg-fried mx-1" viewBox="0 0 20 20">
                                <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path
                                    d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
                            </svg>
                            : null
                        }
                    </Card.Text>
                    <Card.Text className="text-size">{this.props.item.price} $</Card.Text>
                </Col>
                <Col xs={4} className="d-flex flex-column justify-content-between border-left px-2">
                    <Card.Text className="text-size h-100 overflow-hidden">{this.props.item.info}</Card.Text>
                    {/*<Card.Footer className="text-center cursor-pointer rounded-0 text-light">Book Now</Card.Footer>*/}
                    <Card.Text className="p-2 d-flex justify-content-center align-items-center">
                        <Button
                            variant="outline-primary btn-size d-flex justify-content-center align-items-center rounded-0 button-color"
                            onClick={this.toggleBookRoomModal}
                            disabled={this.props.item.busy ? true : false}
                        >
                            {this.props.item.busy ? "Room Busy" : "Book Now"}
                        </Button>
                    </Card.Text>
                </Col>
            </Card>
        );
    }
}

export default RoomItem;