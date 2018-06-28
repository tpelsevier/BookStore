import './BookDetails.css';
import React, { Component } from 'react';
import { Row, Col, Grid, Thumbnail, Button, Panel} from 'react-bootstrap';
import cover from './cover.webp';
import { getItem, addToCart} from '../../utils/APIUtils';

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

    handleAddToCart(){
        const addToCartRequest = {
            book:{ 
                ISBN: this.props.location.state.detail,
                imageUrl: this.state.imageUrl,
                name:this.state.name,
                price:this.state.price,
                description:this.state.description
            },
            quantity: 1
        };

        addToCart(addToCartRequest)
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
                            <Button onClick = {this.handleAddToCart.bind(this)} bsStyle="primary">Add To Cart</Button>&nbsp;
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
        );
    }
}


export default BookDetails;