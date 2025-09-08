import {Component} from "react";
import './gallery.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Col, Container, Row} from "react-bootstrap";

export default class Gallery extends Component {
    render() {
        return (
            <div className="Gallery">
                <Row>
                    <h1 className="text-light">Gallery</h1>
                </Row>
                <Container fluid className="w-100 ContainerGallery">
                    <Row className="ImgGrid d-flex">
                       {/*<Col className="Column1" xxl={2} xl={2} lg={3} md={6} sm={12}>*/}
                       {/*    <img className="w-100 my-2" src="images/delicious.jpg" alt=".jpg"/>*/}
                       {/*</Col>*/}
                        <Col xxl={2} xl={2} lg={3} md={6} sm={12}>
                            <Row>
                                <img className="w-100 my-2" src="images/palmplace.jpg" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/event_image.png" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/RegistrationPart.png" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/event_image.png" alt=".jpg"/>
                            </Row>
                        </Col>
                        <Col xxl={2} xl={2} lg={3} md={6} sm={12}>
                            <Row>
                                <img className="w-100 my-2" src="images/event_image.png" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/ring.jpg" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/delicious.jpg" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/RegistrationPart.png" alt=".jpg"/>
                            </Row>
                        </Col>
                        <Col xxl={2} xl={2} lg={3} md={6} sm={12}>
                            <Row>
                                <img className="w-100 my-2" src="images/palmplace.jpg" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/bed1.jpg" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/RegistrationPart.png" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/palmplace.jpg" alt=".jpg"/>
                            </Row>
                        </Col>
                        <Col xxl={2} xl={2} lg={3} md={6} sm={12}>
                            <Row>
                                <img className="w-100 my-2" src="images/event_image.png" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/poolfoto.jpg" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/event_image.png" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/plyaj1.jpg" alt=".jpg"/>
                            </Row>
                        </Col>
                        <Col xxl={2} xl={2} lg={3} md={6} sm={12}>
                            <Row>
                                <img className="w-100 my-2" src="images/palmplace.jpg" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/event_image.png" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/plyaj1.jpg" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/delicious.jpg" alt=".jpg"/>
                            </Row>
                        </Col>
                        <Col xxl={2} xl={2} lg={3} md={6} sm={12}>
                            <Row>
                                <img className="w-100 my-2" src="images/palmplace.jpg" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/plyaj1.jpg" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/delicious.jpg" alt=".jpg"/>
                                <img className="w-100 my-2" src="images/event_image.png" alt=".jpg"/>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}