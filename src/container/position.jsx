import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, Button, ButtonGroup, Col, Container, Row, Table} from "react-bootstrap";
import {loadPositions, deletePosition} from "../redux/actions/position.action";

function mapStateToProps(state) {
    return {
        position: state.position
    };
}

class Position extends Component {
    componentDidMount() {
        this.props.loadPositions();
    }

    handleDelete = (id, event) => {
        event.preventDefault();

        if (window.confirm("Yakin untuk menghapus data?")) {
            this.props.deletePosition(id);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.position?.msg?.message ? <Alert variant={"info"}>
                        {this.props.position?.msg?.message}
                    </Alert> : null
                }
                <Container>
                    <Row>
                        <Col>
                            <h4>Position Data</h4>
                        </Col>
                        <Col className={'d-flex justify-content-end'}>
                            <ButtonGroup aria-label="Action Buttons">
                                <Button href={'/position/add'} variant="success">Add new data</Button>
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
                                    <th>Position Name</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.position.positions.length <= 0 ?
                                        <tr>
                                            <td colSpan={4} className={'text-center'}>Tidak ada data</td>
                                        </tr> :
                                    this.props.position.positions.map((position, i) =>
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{position.name}</td>
                                            <td>
                                                <ButtonGroup size="sm">
                                                    <Button variant={"info"} href={`/position/${position._id}`}>Edit Data</Button>
                                                    <Button variant={"danger"} onClick={this.handleDelete.bind(this, position._id)}>Delete Data</Button>
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
    mapStateToProps, {loadPositions, deletePosition}
)(Position);