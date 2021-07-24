import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import styled from 'styled-components';

import Form from './Components/myForm';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const Wrapper = styled.section`
  padding: 2em;
`;

class CoverLetter extends Component {
    componentDidMount() {
        document.title = "Cover Letter"
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Title>
                        <p class="text-center" id="wrong-test">Cover Letter</p>
                    </Title>
                    <Col xs={8}>
                    <Form/>
                    </Col>
                </Row>
                
            </Container>
        );
    }
}

export default CoverLetter;