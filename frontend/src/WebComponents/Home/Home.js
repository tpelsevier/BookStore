import React, { Component } from 'react';
import { getBooks } from '../../utils/APIUtils';
import { Panel, ListGroupItem, Row, Grid, Col, Jumbotron, Button, Image } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            organizedRows: [],
        };
    }

    handleShowDetails(e) {
        console.log(e.currentTarget.dataset.id)
        // this.props.history.push("BookDetails");
        this.props.history.push({
            pathname: '/BookDetails',
            state: { detail: e.currentTarget.dataset.id }
        })
    }

    componentDidMount() {
        getBooks()
            .then(response => {
                var books = {};
                var rowOfBooks = [];
                books = response;
                loopBreak:
                for (var i = 0; i < books.length; i++) {
                    var row = [];
                    for (var x = 0; x < 4; x++) {
                        console.log(books)
                        row.push(
                            <Panel bsStyle="success">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">{books[i].name}</Panel.Title>
                                </Panel.Heading>
                                <ListGroupItem>
                                    <div className="face">
                                        <Image src={books[i].imageUrl} rounded alt="181x180" />
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem><b>Price:</b> {books[i].price}</ListGroupItem>
                                {/* <ListGroupItem><b>ISBN:</b> {books[i].isbn}</ListGroupItem> */}
                                <ListGroupItem>
                                    <Button onClick={this.handleShowDetails.bind(this)} data-id={books[i].isbn} bsStyle="primary" >Details</Button>
                                </ListGroupItem>
                            </Panel>
                        );

                        i++;
                        if (i == books.length) {
                            rowOfBooks.push(row);
                            break loopBreak;
                        }
                    }
                    rowOfBooks.push(row);
                }

                var organizedRows = [];

                for (var i = 0; i < rowOfBooks.length - 1; i++) {
                    organizedRows.push(
                        <Grid>
                            <Row className="show-grid">
                                <Col sm={6} md={3}>
                                    <br />
                                    {rowOfBooks[i][0]}
                                </Col>
                                <Col sm={6} md={3}>
                                    <br />
                                    {rowOfBooks[i][1]}
                                </Col>
                                <Col sm={6} md={3}>
                                    <br />
                                    {rowOfBooks[i][2]}
                                </Col>
                                <Col sm={6} md={3}>
                                    <br />
                                    {rowOfBooks[i][3]}
                                </Col>
                            </Row>
                        </Grid>
                    );
                }

                var lastRow = [];
                for (var i = 0; i < rowOfBooks[rowOfBooks.length - 1].length; i++) {
                    lastRow.push(
                        <Col sm={6} md={3}>
                            <br />
                            {rowOfBooks[rowOfBooks.length - 1][i]}
                        </Col>
                    );
                }

                organizedRows.push(
                    <Grid>
                        <Row>
                            {lastRow}
                        </Row>
                    </Grid>

                );
                this.state.organizedRows = organizedRows
                this.forceUpdate()
            })

    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to Our Bookstore!</h1>
                    <hr />
                    <p>
                        View our wide variety of reads.
                    </p>
                </Jumbotron>
                <div className="">
                    {this.state.organizedRows}
                </div>

            </div>

        );
    }
}

export default Home;