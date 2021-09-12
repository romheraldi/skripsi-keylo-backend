import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form} from "react-bootstrap";
import {editCategory, getCategory} from "../redux/actions/category.action";
import {Redirect} from "react-router-dom";

function mapStateToProps(state) {
    return {
        category: state.category
    };
}

class CategoryEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            name: ""
        }
    }

    componentDidMount() {
        this.props.getCategory(this.props.match.params.id);
    }

    UNSAFE_componentWillReceiveProps(np) {
        this.setState({
            name: np.category.category.name,
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
            this.props.editCategory(this.props.match.params.id, this.state);
        });
    }

    handleInput = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        if (this.props.category?.success) return <Redirect to="/category"/>;
        return (
            <div>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Category name</Form.Label>
                        <Form.Control name={"name"} required type="text" value={this.state.name}
                                      placeholder="Enter category name" onChange={this.handleInput}/>
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
    mapStateToProps, {getCategory, editCategory}
)(CategoryEdit);