import {Component} from "react";
import {Button, Card, Carousel, Col, Container, Row, Stack} from "react-bootstrap";
import './privateArea.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import {Link} from "react-router-dom";

export default class PrivateArea extends Component {
    render() {
        return (
            <Container fluid className="main p-0">
                <Header />
                <Row className="px-5 py-3 bg-light">
                    <Container className="shadow p-3 text-dark rounded filter">
                        Faka Ferry
                    </Container>
                </Row>
                <Row className="bg-light px-5 py-3 pb-5">
                    <Col xs={3} className="d-flex flex-column justify-content-evenly align-items-center p-4">
                        <Row>
                            <Col>
                                <Link to='/'>
                                    <button type="button" className="btn btn-outline-secondary border-0 shadow-lg btn-square-md m-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                             className="bi bi-house-door-fill" viewBox="0 0 20 20">
                                            <path
                                                d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                                        </svg>
                                        <br/>
                                        Home
                                    </button>
                                </Link>
                            </Col>
                            <Col>
                                <button type="button" className="btn btn-outline-secondary border-0 shadow-lg btn-square-md m-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-calendar-event-fill" viewBox="0 0 20 20">
                                        <path
                                            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                    <br/>
                                    Events
                                </button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button type="button" className="btn btn-outline-secondary border-0 shadow-lg btn-square-md m-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-nut-fill" viewBox="0 0 20 20">
                                        <path
                                            d="M4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58zm5.018 9.696a3 3 0 1 1-3-5.196 3 3 0 0 1 3 5.196z"/>
                                    </svg>
                                    <br/>
                                    Service
                                </button>
                            </Col>
                            <Col>
                                <button type="button" className="btn btn-outline-secondary border-0 shadow-lg btn-square-md m-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-egg-fried" viewBox="0 0 20 20">
                                        <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        <path
                                            d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
                                    </svg>
                                    <br/>
                                    Food
                                </button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button type="button" className="btn btn-outline-secondary border-0 shadow-lg btn-square-md m-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-heart-pulse-fill" viewBox="0 0 20 20">
                                        <path
                                            d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9H1.475Z"/>
                                        <path
                                            d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.88Z"/>
                                    </svg>
                                    <br/>
                                    Doctor
                                </button>
                            </Col>
                            <Col>
                                <button type="button" className="btn btn-outline-secondary border-0 shadow-lg btn-square-md m-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-house-gear-fill" viewBox="0 0 20 20">
                                        <path
                                            d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
                                        <path
                                            d="M11.07 9.047a1.5 1.5 0 0 0-1.742.26l-.02.021a1.5 1.5 0 0 0-.261 1.742 1.5 1.5 0 0 0 0 2.86 1.504 1.504 0 0 0-.12 1.07H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6 4.724 4.724a1.5 1.5 0 0 0-1.654 1.03Z"/>
                                        <path
                                            d="m13.158 9.608-.043-.148c-.181-.613-1.049-.613-1.23 0l-.043.148a.64.64 0 0 1-.921.382l-.136-.074c-.561-.306-1.175.308-.87.869l.075.136a.64.64 0 0 1-.382.92l-.148.045c-.613.18-.613 1.048 0 1.229l.148.043a.64.64 0 0 1 .382.921l-.074.136c-.306.561.308 1.175.869.87l.136-.075a.64.64 0 0 1 .92.382l.045.149c.18.612 1.048.612 1.229 0l.043-.15a.64.64 0 0 1 .921-.38l.136.074c.561.305 1.175-.309.87-.87l-.075-.136a.64.64 0 0 1 .382-.92l.149-.044c.612-.181.612-1.049 0-1.23l-.15-.043a.64.64 0 0 1-.38-.921l.074-.136c.305-.561-.309-1.175-.87-.87l-.136.075a.64.64 0 0 1-.92-.382ZM12.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
                                    </svg>
                                    <br/>
                                    Rooms
                                </button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={9} className="bg-primary rounded shadow-lg text-dark">
                        {/*<RoomCardInPrivateArea />*/}
                        <Carousel indicators={false}>
                            <Carousel.Item>
                                <Stack
                                    direction="horizontal"
                                    className="h-100 justify-content-center align-items-center"
                                    gap={3}
                                >
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Stack>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Stack
                                    direction="horizontal"
                                    className="h-100 justify-content-center align-items-center"
                                    gap={3}
                                >
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card sfafafasf</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Stack>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}