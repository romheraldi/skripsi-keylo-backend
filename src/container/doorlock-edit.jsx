import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form} from "react-bootstrap";
import {editDoorlock, getDoorlock} from "../redux/actions/doorlock.action";
import {Redirect} from "react-router-dom";
import {loadEmployees} from "../redux/actions/employee.action";
import {loadCategorys} from "../redux/actions/category.action";

function mapStateToProps(state) {
    return {
        doorlock: state.doorlock,
        category: state.category,
        employee: state.employee,
    };
}

class DoorlockEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            name: "",
            category: "",
            uniqueId: "",
            authenticator: ""
        }
    }

    componentDidMount() {
        this.props.getDoorlock(this.props.match.params.id);
        this.props.loadEmployees();
        this.props.loadCategorys();
    }

    UNSAFE_componentWillReceiveProps(np) {
        this.setState({
            name: np.doorlock.doorlock.name,
            category: np.doorlock.doorlock.category?.name,
            authenticator: np.doorlock.doorlock.authenticator?._id,
            uniqueId: np.doorlock.doorlock.uniqueId,
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
            this.props.editDoorlock(this.props.match.params.id, this.state);
        });
    }

    handleInput = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        if (this.props.doorlock?.success) return <Redirect to="/doorlock"/>;
        return (
            <div>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Doorlock Unique ID</Form.Label>
                        <Form.Control name={"uniqueId"} required type="text" value={this.state.uniqueId}
                                      placeholder="Enter doorlock unique ID" onChange={this.handleInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Doorlock name</Form.Label>
                        <Form.Control name={"name"} required type="text" value={this.state.name}
                                      placeholder="Enter doorlock name" onChange={this.handleInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select required onChange={this.handleInput} name={'category'} value={this.state.category}
                                     aria-label="Category">
                            <option>Choose one category</option>
                            {
                                this.props.category?.categorys?.map((category, i) => {
                                    return <option key={i} value={category._id}>{category.name}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Authenticator</Form.Label>
                        <Form.Select onChange={this.handleInput} name={'authenticator'} value={this.state.authenticator}
                                     aria-label="Authenticator">
                            <option>Choose one authenticator (optional)</option>
                            {
                                this.props.employee?.employees?.map((employee, i) => {
                                    return <option key={i} value={employee._id}>{employee.fullName}</option>
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
    mapStateToProps, {getDoorlock, editDoorlock, loadEmployees, loadCategorys}
)(DoorlockEdit);