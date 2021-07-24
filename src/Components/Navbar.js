import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 1em;
`;

class Navbar extends Component {
    render() {
        return (
            <Container fluid>
                <Wrapper>
                <Row>
                    <Col>
                        <Nav className="justify-content-center" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey='disable' disabled >Jie Yang</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#/home">
                                    <span class="emoji">🏗</span> Projects
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#/resume">
                                    <span class="emoji">📄</span> Résumé
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#/coverletter">
                                    <span class="emoji">✉️</span> Cover Letter
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                </Wrapper>
            </Container>

        );
    }
}

export default Navbar;