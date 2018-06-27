import './BookDetails.css';
import React, { Component } from 'react';
import { Row, Col, Grid, Thumbnail, Button, Panel} from 'react-bootstrap';
import cover from './cover.webp';
import { getItem } from '../../utils/APIUtils';

class BookDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: "",
            name:"",
            description:"",
            price:""
        };
    }

    componentDidMount(){
        getItem(this.props.location.state.detail)
        .then(response => {
            this.state.imageUrl = response.imageUrl
            this.state.name = response.name
            this.state.description = response.description
            this.state.price = response.price
            this.forceUpdate()
            console.log(response)
        })
    }
    render() {
        console.log(this.props.location.state.detail)
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail src={this.state.imageUrl} alt="242x200">
                            <h4>{this.state.name}</h4>
                            <p>{this.state.price}</p>
                            <p>
                            <Button bsStyle="primary">Add To Cart</Button>&nbsp;
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={8}>
                        <Panel>
                            <Panel.Heading>Book Details</Panel.Heading>
                            <Panel.Body>
                                <p>{this.state.description}</p>
                                {/* <p>Publisher</p>
                                <p>Publish Date</p>
                                <p>ISBN</p>
                                <p>Description</p>
                                <p>etc..</p> */}
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
            // <div>
            //     <Panel bsStyle="info">
            //         <Panel.Heading>
            //             <Panel.Title componentClass="h3">Book Title</Panel.Title>
            //         </Panel.Heading>
            //         <ListGroup>
            //             <ListGroupItem>
            //                 <div class="face">
            //                     <img src={cover} />
            //                 </div>
            //             </ListGroupItem>
            //             <ListGroupItem>Author</ListGroupItem>
            //             <ListGroupItem>Price</ListGroupItem>
            //             <ListGroupItem>Etc...</ListGroupItem>
            //             <Panel.Body>Book Description</Panel.Body>
            //         </ListGroup>
            //     </Panel>
            //     <Link to="/BookDetails">
            //     <button type="button">
            //         Add To Cart
            //     </button>
            //     </Link>
            // </div>
        );
    }
}


export default BookDetails;