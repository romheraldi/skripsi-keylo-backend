import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, Button, ButtonGroup, Col, Container, Row, Table} from "react-bootstrap";
import {deleteEmployee, loadEmployees} from "../redux/actions/employee.action";

function mapStateToProps(state) {
    return {
        employee: state.employee
    };
}

class Employee extends Component {
    componentDidMount() {
        this.props.loadEmployees();
    }

    handleDelete = (id, event) => {
        event.preventDefault();

        if (window.confirm("Yakin untuk menghapus data?")) {
            this.props.deleteEmployee(id);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.employee?.msg?.message ? <Alert variant={"info"}>
                        {this.props.employee?.msg?.message}
                    </Alert> : null
                }
                <Container>
                    <Row>
                        <Col>
                            <h4>Employee Data</h4>
                        </Col>
                        <Col className={'d-flex justify-content-end'}>
                            <ButtonGroup aria-label="Action Buttons">
                                <Button href={'/employee/add'} variant="success">Add new data</Button>
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
                                    <th>Full Name</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Division</th>
                                    <th>Position</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.employee.employees.length <= 0 ?
                                        <tr>
                                            <td colSpan={4} className={'text-center'}>Tidak ada data</td>
                                        </tr> :
                                        this.props.employee.employees.map((employee, i) =>
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{employee.fullName}</td>
                                                <td>{employee.sureName}</td>
                                                <td>{employee.email}</td>
                                                <td>{employee.division?.name}</td>
                                                <td>{employee.position?.name}</td>
                                                <td>
                                                    <ButtonGroup size="sm">
                                                        <Button variant={"info"} href={`/employee/${employee._id}`}>Edit
                                                            Data</Button>
                                                        <Button variant={"danger"}
                                                                onClick={this.handleDelete.bind(this, employee._id)}>Delete
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
    mapStateToProps, {loadEmployees, deleteEmployee}
)(Employee);