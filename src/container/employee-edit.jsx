import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form} from "react-bootstrap";
import {editEmployee, getEmployee} from "../redux/actions/employee.action";
import {Redirect} from "react-router-dom";
import {loadDivisions} from "../redux/actions/division.action";
import {loadPositions} from "../redux/actions/position.action";

function mapStateToProps(state) {
    return {
        employee: state.employee,
        position: state.position,
        division: state.division
    };
}

class EmployeeEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            fullName: "",
            sureName: "",
            email: "",
            password: "",
            confirmPassword: "",
            position: "",
            division: "",
        }
    }

    componentDidMount() {
        this.props.loadDivisions();
        this.props.loadPositions();
        this.props.getEmployee(this.props.match.params.id);
    }

    UNSAFE_componentWillReceiveProps(np) {
        this.setState({
            fullName: np.employee.employee.fullName,
            sureName: np.employee.employee.sureName,
            email: np.employee.employee.email,
            division: np.employee.employee.division?._id,
            position: np.employee.employee.position?._id,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({validated: true}, () => {
            this.props.editEmployee(this.props.match.params.id, this.state);
        });
    }

    handleInput = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        if (this.props.employee?.success) return <Redirect to="/employee"/>;
        return (
            <div>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Employee Full Name</Form.Label>
                        <Form.Control name={"fullName"} required type="text" value={this.state.fullName}
                                      placeholder="Enter employee full name" onChange={this.handleInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Employee Sure Name</Form.Label>
                        <Form.Control name={"sureName"} required type="text" value={this.state.sureName}
                                      placeholder="Enter employee sure name" onChange={this.handleInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name={"email"} required type="text" value={this.state.email}
                                      placeholder="Enter employee email" onChange={this.handleInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name={"password"} type="password" value={this.state.password}
                                      placeholder="Enter employee password" onChange={this.handleInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Division</Form.Label>
                        <Form.Select onChange={this.handleInput} name={'division'} value={this.state.division}
                                     aria-label="Division">
                            <option>Choose one division</option>
                            {
                                this.props.division?.divisions?.map((division, i) => {
                                    return <option key={i} value={division._id}>{division.name}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Position</Form.Label>
                        <Form.Select onChange={this.handleInput} name={'position'} value={this.state.position}
                                     aria-label="Position">
                            <option>Choose one position</option>
                            {
                                this.props.position?.positions?.map((position, i) => {
                                    return <option key={i} value={position._id}>{position.name}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default connect(
    mapStateToProps, {getEmployee, editEmployee, loadDivisions, loadPositions}
)(EmployeeEdit);