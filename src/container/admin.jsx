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
import EmployeeAdd from "./employee-add";
import EmployeeEdit from "./employee-edit";
import Employee from "./employee";
import CategoryEdit from "./category-edit";
import Category from "./category";
import CategoryAdd from "./category-add";
import DoorlockEdit from "./doorlock-edit";
import Doorlock from "./doorlock";
import DoorlockAdd from "./doorlock-add";

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
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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
                                <Nav.Link href="#link" className={'align-self-center'}>Hai, Aldi!</Nav.Link>
                                <Nav.Link href="#link" className={"flex-1"}><Button size={"sm"} variant={"light"}
                                                                                    style={{width: '100%'}}>Keluar</Button></Nav.Link>
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
                        <Route exact path="/employee" component={Employee}/>
                        <Route path="/employee/add" component={EmployeeAdd}/>
                        <Route path="/employee/:id" component={EmployeeEdit}/>
                        <Route exact path="/category" component={Category}/>
                        <Route path="/category/add" component={CategoryAdd}/>
                        <Route path="/category/:id" component={CategoryEdit}/>
                        <Route exact path="/doorlock" component={Doorlock}/>
                        <Route path="/doorlock/add" component={DoorlockAdd}/>
                        <Route path="/doorlock/:id" component={DoorlockEdit}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Admin);