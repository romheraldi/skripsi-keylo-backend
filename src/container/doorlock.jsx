import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, Button, ButtonGroup, Col, Container, Row, Table} from "react-bootstrap";
import {deleteDoorlock, loadDoorlocks} from "../redux/actions/doorlock.action";

function mapStateToProps(state) {
    return {
        doorlock: state.doorlock
    };
}

class Doorlock extends Component {
    componentDidMount() {
        this.props.loadDoorlocks();
    }

    handleDelete = (id, event) => {
        event.preventDefault();

        if (window.confirm("Yakin untuk menghapus data?")) {
            this.props.deleteDoorlock(id);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.doorlock?.msg?.message ? <Alert variant={"info"}>
                        {this.props.doorlock?.msg?.message}
                    </Alert> : null
                }
                <Container>
                    <Row>
                        <Col>
                            <h4>Doorlock Data</h4>
                        </Col>
                        <Col className={'d-flex justify-content-end'}>
                            <ButtonGroup aria-label="Action Buttons">
                                <Button href={'/doorlock/add'} variant="success">Add new data</Button>
                                {/*<Button variant="warning">Export Data</Button>*/}
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row className={'mt-3'}>
                        <Col>
                            <Table striped bordered hover responsive>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Doorlock Name</th>
                                    <th>Category</th>
                                    <th>Authentication Need</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.doorlock.doorlocks.length <= 0 ?
                                        <tr>
                                            <td colSpan={5} className={'text-center'}>Tidak ada data</td>
                                        </tr> :
                                        this.props.doorlock.doorlocks.map((doorlock, i) =>
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{doorlock.name}</td>
                                                <td>{doorlock.category?.name}</td>
                                                <td>{doorlock.authenticator ? "True" : "False"}</td>
                                                <td>
                                                    <ButtonGroup size="sm">
                                                        <Button variant={"info"} href={`/doorlock/${doorlock._id}`}>Edit
                                                            Data</Button>
                                                        <Button variant={"danger"}
                                                                onClick={this.handleDelete.bind(this, doorlock._id)}>Delete
                                                            Data</Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        )
                                }
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
    mapStateToProps, {loadDoorlocks, deleteDoorlock}
)(Doorlock);