import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from "./dashboard";
import {Route, Switch} from "react-router-dom";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Division from "./division";
import DivisionAdd from "./division-add";
import DivisionEdit from "./division-edit";
import Position from "./position";
import PositionAdd from "./position-add";
import PositionEdit from "./position-edit";

function mapStateToProps(state) {
    return {};
}

class Admin extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" style={{fontWeight: "bold"}}><span
                            style={{color: "#31C4A0"}}>Key</span>lo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto text-center">
                                <Nav.Link href="/">Dashboard</Nav.Link>
                                <NavDropdown title="Employee" id="employee-navbar">
                                    <NavDropdown.Item href="/division">Division</NavDropdown.Item>
                                    <NavDropdown.Item href="/position">Position</NavDropdown.Item>
                                    <NavDropdown.Item href="/employee">Employee List</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Devices" id="employee-navbar">
                                    <NavDropdown.Item href="/category">Category</NavDropdown.Item>
                                    <NavDropdown.Item href="/doorlock">Doorlock</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className={"mr-auto"}>
                                <Nav.Link href="#link"><Button variant={"light"} style={{width: '100%'}}>Keluar</Button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className={"pt-5"}>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/division" component={Division}/>
                        <Route path="/division/add" component={DivisionAdd}/>
                        <Route path="/division/:id" component={DivisionEdit}/>
                        <Route exact path="/position" component={Position}/>
                        <Route path="/position/add" component={PositionAdd}/>
                        <Route path="/position/:id" component={PositionEdit}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Admin);