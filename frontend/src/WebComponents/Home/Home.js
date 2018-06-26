import React, { Component } from 'react';
import { Panel, ListGroupItem, Row, Grid, Col, Jumbotron, Button } from 'react-bootstrap';

const books = [
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    },
    {
        title: "Wimpy Kid",
        author: "Daniel",
        isbn: '978-3-16-148410-0'
    }
];

var rowOfBooks = [];

loopBreak:
for (var i = 0; i < books.length; i++) {
    var row = [];
    for (var x = 0; x < 4; x++) {
        row.push(
            <Panel bsStyle="success">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">{books[i].title}</Panel.Title>
                </Panel.Heading>
                <ListGroupItem><b>Author:</b> {books[i].author}</ListGroupItem>
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

class Home extends Component {
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
                {organizedRows}
            </div>

        );
    }
}

export default Home;