import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

class Resume extends Component {


    componentDidMount() {
        document.title = "Résumé"
    }
    render() {

        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Title>
                        <p class="text-center" id="wrong-test">Résumé </p>
                    </Title>
                    <Col xs={8}>

                        <div class="list-group">
                                <a href="https://githubpage.s3.us-east-2.amazonaws.com/cvs/Resume_2021_.pdf" target="_blank" rel="noreferrer" class="list-group-item list-group-item-action">2021 Résumé Software Emphasis</a>
                                <a href="https://www.google.com" target="_blank" rel="noreferrer" class="list-group-item list-group-item-action">2021 Résumé Hardware Emphasis</a>
                                <a href="https://www.google.com" target="_blank" rel="noreferrer" class="list-group-item list-group-item-action">2021 中文简历（软件倾向）</a>
                                <a href="https://www.google.com" target="_blank" rel="noreferrer" class="list-group-item list-group-item-action">2021 中文简历（硬件倾向）</a>
                        </div>

                    </Col>


                </Row>
            </Container>
        );
    }
}

export default Resume;