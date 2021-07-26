import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const WhiteSpace = styled.span`
    white-space: pre-line;
`;

class Project_cfd extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Title>
                        <p>Empty page</p>
                    </Title>
                    <Col xs={8}>
                        {/* <h5> What it is? </h5>
                        <p>
                            An industry term... is a type of technical terminology that has a particular meaning in a specific industry. It implies that a word or phrase is a typical one in a particular industry and people working in the respective industry or business will be familiar with and use the term."[22]
                            <br />
                            Technical terminology evolves due to the need for experts in a field to communicate with precision and brevity, but often has the effect of excluding those who are unfamiliar with the particular specialized language of the group. This can cause difficulties as, for example, when a patient is unable to follow the discussions of medical practitioners, and thus cannot understand his own condition and treatment. Differences in jargon also cause difficulties where professionals in related fields use different terms for the same phenomena.[
                        </p>
                        <h5> Why it's interesting? </h5>
                        <p>
                            "An industry term... is a type of technical terminology that has a particular meaning in a specific industry. It implies that a word or phrase is a typical one in a particular industry and people working in the respective industry or business will be familiar with and use the term."[22]Technical terminology evolves due to the need for experts in a field to communicate with precision and brevity, but often has the effect of excluding those who are unfamiliar with the particular specialized language of the group. This can cause difficulties as, for example, when a patient is unable to follow the discussions of medical practitioners, and thus cannot understand his own condition and treatment. Differences in jargon also cause difficulties where professionals in related fields use different terms for the same phenomena.[
                        </p>



                        <div class="list-group">
                            <h6> Technical Documents: </h6>
                            <a href="https://www.google.com" target="_blank" rel="noreferrer" class="list-group-item list-group-item-action">Report</a>
                            <a href="https://www.google.com" target="_blank" rel="noreferrer" class="list-group-item list-group-item-action">Paper</a>
                        </div> */}

                    </Col>


                </Row>
            </Container>
        );
    }
}

export default Project_cfd;