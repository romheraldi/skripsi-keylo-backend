import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, Button, ButtonGroup, Col, Container, Row, Table} from "react-bootstrap";
import {deleteDivision, loadDivisions} from "../redux/actions/division.action";

function mapStateToProps(state) {
    return {
        division: state.division
    };
}

class Division extends Component {
    componentDidMount() {
        this.props.loadDivisions();
    }

    handleDelete = (id, event) => {
        event.preventDefault();

        if (window.confirm("Yakin untuk menghapus data?")) {
            this.props.deleteDivision(id);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.division?.msg?.message ? <Alert variant={"info"}>
                        {this.props.division?.msg?.message}
                    </Alert> : null
                }
                <Container>
                    <Row>
                        <Col>
                            <h4>Division Data</h4>
                        </Col>
                        <Col className={'d-flex justify-content-end'}>
                            <ButtonGroup aria-label="Action Buttons">
                                <Button href={'/division/add'} variant="success">Add new data</Button>
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
                                    <th>Division Name</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.division.divisions.length <= 0 ?
                                        <tr>
                                            <td colSpan={4} className={'text-center'}>Tidak ada data</td>
                                        </tr> :
                                        this.props.division.divisions.map((division, i) =>
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{division.name}</td>
                                                <td>
                                                    <ButtonGroup size="sm">
                                                        <Button variant={"info"} href={`/division/${division._id}`}>Edit
                                                            Data</Button>
                                                        <Button variant={"danger"}
                                                                onClick={this.handleDelete.bind(this, division._id)}>Delete
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
    mapStateToProps, {loadDivisions, deleteDivision}
)(Division);