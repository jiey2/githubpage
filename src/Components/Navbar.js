import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

class Navbar extends Component {
    render() { 
        return (  
            <Container fluid>
                <Row>
                    <Col>
                        <Nav className="justify-content-center" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey='disable' disabled >Jie Yang</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link a href= "/home">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link a href="/resume">Resume</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link a href="/coverletter">Cover Letter</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>

        );
    }
}
 
export default Navbar;