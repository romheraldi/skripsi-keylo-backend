import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form} from "react-bootstrap";
import {addDivision} from "../redux/actions/division.action";
import {Redirect} from "react-router-dom";

function mapStateToProps(state) {
    return {
        division: state.division
    };
}

class DivisionAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            name: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({validated: true}, () => {
            this.props.addDivision(this.state);
        });
    }

    handleInput = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        if (this.props.division?.success) return <Redirect to="/division"/>;
        return (
            <div>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Division name</Form.Label>
                        <Form.Control name={"name"} required type="text" value={this.state.name}
                                      placeholder="Enter division name" onChange={this.handleInput}/>
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
    mapStateToProps, {addDivision}
)(DivisionAdd);