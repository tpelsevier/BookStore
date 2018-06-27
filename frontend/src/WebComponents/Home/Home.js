import React, { Component } from 'react';
import { getBooks } from '../../utils/APIUtils';
import { Panel, ListGroupItem, Row, Grid, Col, Jumbotron, Button } from 'react-bootstrap';

// const books = [
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     },
//     {
//         title: "Wimpy Kid",
//         author: "Daniel",
//         isbn: '978-3-16-148410-0'
//     }
// ];





class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            organizedRows: [],
        };
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
                    // console.log(books[i].name)
                    // console.log(books[i].price)
                    // console.log(books[i].isbn)
                    row.push(
                        <Panel bsStyle="success">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">{books[i].name}</Panel.Title>
                            </Panel.Heading>
                            <ListGroupItem><b>Price:</b> {books[i].price}</ListGroupItem>
                            <ListGroupItem><b>ISBN:</b> {books[i].isbn}</ListGroupItem>
                            <ListGroupItem>
                                <Button bsStyle="primary">Details</Button>
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
                {this.state.organizedRows}
            </div>

        );
    }
}

export default Home;