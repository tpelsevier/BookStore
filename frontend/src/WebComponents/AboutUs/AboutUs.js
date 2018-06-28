import React from 'react';
import { Row, Col, Grid, Panel, ListGroup, ListGroupItem, Image, Jumbotron } from 'react-bootstrap';
import dummyFace from './Our_Face.png';
import './AboutUs.css';


class AboutUs extends React.Component {
    render() {
        return (
            <div className ="">

                <Grid>
                    <Jumbotron className="jumbotron1">
                        <h1>Meet Our Team!</h1>
                        <hr />
                        <p>
                            Like-minded Elsevier New Grads who came together to create the best bookstore app you've ever seen.
                    </p>
                    </Jumbotron>
                    <Row className="show-grid">
                        <Col sm={6} md={3}>
                            <br />
                            <Panel bsStyle="info">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Tao Pan</Panel.Title>
                                </Panel.Heading>
                                <ListGroup>
                                    <ListGroupItem>
                                        <div className="face">
                                            <Image src={dummyFace} rounded alt="181x180" />
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>Backend Engineer</ListGroupItem>
                                    <Panel.Body>Tao is our head designer and backend engineer. He is passionate about software development and knows a lot about software.</Panel.Body>
                                </ListGroup>
                            </Panel>
                        </Col>
                        <Col sm={6} md={3}>
                            <br />
                            <Panel bsStyle="info">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Sam Nguyen</Panel.Title>
                                </Panel.Heading>
                                <ListGroup>
                                    <ListGroupItem>
                                        <div className="face">
                                            <Image src={dummyFace} rounded alt="181x180" />
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>Fullstack Developer</ListGroupItem>
                                    <Panel.Body>Sam is our fullstack developer who enjoys learning on his free time. He has worked on connecting the backend with the frontend and acting as the scrum master when our scrum master has left.</Panel.Body>
                                </ListGroup>
                            </Panel>
                        </Col>
                        <Col sm={6} md={3}>
                            <br />
                            <Panel bsStyle="info">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Ronak Amin</Panel.Title>
                                </Panel.Heading>
                                <ListGroup>
                                    <ListGroupItem>
                                        <div className="face">
                                            <Image src={dummyFace} rounded alt="181x180" />
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>Database Designer</ListGroupItem>
                                    <Panel.Body>Ronak has developed and designed our database which we use to store all necessary data on our website.</Panel.Body>
                                </ListGroup>
                            </Panel>
                        </Col>
                        <Col sm={6} md={3}>
                            <br />
                            <Panel bsStyle="info">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Riley Wong</Panel.Title>
                                </Panel.Heading>
                                <ListGroup>
                                    <ListGroupItem>
                                        <div className="face">
                                            <Image src={dummyFace} rounded alt="181x180" />
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>Fullstack Developer</ListGroupItem>
                                    <ListGroupItem>Riley is our other fullstack developer mostly focusing on frontend development</ListGroupItem>
                                </ListGroup>
                            </Panel>
                        </Col>
                    </Row>
                    <div>
                        <Row>
                            <Col sm={2} >
                            </Col>
                            <Col sm={8} >
                                <Panel bsStyle="info">
                                    <Panel.Heading>
                                        <Panel.Title componentClass="h3">Ben Hancock</Panel.Title>
                                    </Panel.Heading>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <div className="face">
                                                <Image src={dummyFace} rounded alt="181x180" />
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>Scrum Master</ListGroupItem>
                                        <Panel.Body>Great scrum master. Hope he's having fun in Asia.</Panel.Body>
                                    </ListGroup>
                                </Panel>
                            </Col>
                            <Col sm={2} >
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default AboutUs; 