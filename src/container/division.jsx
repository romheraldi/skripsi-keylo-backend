import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, Button, ButtonGroup, Col, Container, Row, Table} from "react-bootstrap";

function mapStateToProps(state) {
    return {};
}

class Division extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Alert variant={'success'}>
                        Berhasil memasukan data
                    </Alert>
                    <Alert variant={'success'}>
                        Data berhasil dihapus
                    </Alert>
                    <Row>
                        <Col>
                            <h4>Division Data</h4>
                        </Col>
                        <Col className={'d-flex justify-content-end'}>
                            <ButtonGroup aria-label="Action Buttons">
                                <Button variant="success">Add new data</Button>
                                <Button variant="warning">Export Data</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row className={'mt-3'}>
                        <Col>
                            <Table striped bordered hover responsive>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Maryana</td>
                                    <td>Lucas</td>
                                    <td>@facebook</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Division);