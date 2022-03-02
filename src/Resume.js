import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
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
                        <p class="text-center" id="wrong-test">Résumé</p>
                    </Title>
                    <Col xs={8}>
                        <div class="list-group">
                            <a href="https://d3xdgu3rc17hb.cloudfront.net/cvs/Resume_2021_soft.pdf" target="_blank" rel="noreferrer" class="list-group-item list-group-item-action">Résumé Software Emphasis</a>
                            <a href="https://d3xdgu3rc17hb.cloudfront.net/cvs/Resume_2021_hard.pdf" target="_blank" rel="noreferrer" class="list-group-item list-group-item-action">Résumé Hardware Emphasis</a>
                            <a href="https://d3xdgu3rc17hb.cloudfront.net/cvs/Resume_2021_soft_zh.pdf" target="_blank" rel="noreferrer" class="list-group-item list-group-item-action">中文简历（软件倾向）</a>
                            <a href="https://d3xdgu3rc17hb.cloudfront.net/cvs/Resume_2021_hard_zh.pdf" target="_blank" rel="noreferrer" class="list-group-item list-group-item-action">中文简历（硬件倾向）</a>
                        </div>
                        <br/>
                        <div style={{ textAlign: "right" }}>
                            <text>Last Update: 2022/03/02</text>
                        </div>
                    </Col>


                </Row>
            </Container>
        );
    }
}

export default Resume;