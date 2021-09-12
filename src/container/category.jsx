import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, Button, ButtonGroup, Col, Container, Row, Table} from "react-bootstrap";
import {deleteCategory, loadCategorys} from "../redux/actions/category.action";

function mapStateToProps(state) {
    return {
        category: state.category
    };
}

class Category extends Component {
    componentDidMount() {
        this.props.loadCategorys();
    }

    handleDelete = (id, event) => {
        event.preventDefault();

        if (window.confirm("Yakin untuk menghapus data?")) {
            this.props.deleteCategory(id);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.category?.msg?.message ? <Alert variant={"info"}>
                        {this.props.category?.msg?.message}
                    </Alert> : null
                }
                <Container>
                    <Row>
                        <Col>
                            <h4>Category Data</h4>
                        </Col>
                        <Col className={'d-flex justify-content-end'}>
                            <ButtonGroup aria-label="Action Buttons">
                                <Button href={'/category/add'} variant="success">Add new data</Button>
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
                                    <th>Category Name</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.category.categorys.length <= 0 ?
                                        <tr>
                                            <td colSpan={4} className={'text-center'}>Tidak ada data</td>
                                        </tr> :
                                        this.props.category.categorys.map((category, i) =>
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{category.name}</td>
                                                <td>
                                                    <ButtonGroup size="sm">
                                                        <Button variant={"info"} href={`/category/${category._id}`}>Edit
                                                            Data</Button>
                                                        <Button variant={"danger"}
                                                                onClick={this.handleDelete.bind(this, category._id)}>Delete
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
    mapStateToProps, {loadCategorys, deleteCategory}
)(Category);