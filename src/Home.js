import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ProjectCard from './Components/ProjectCard';

import { project_data } from './ProjectListMetadata.js'

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const Explain = styled.p`
    padding: 1em 0.5em;
    color: gray;
`;

const Emphasis = styled.span`
    color: black;
    font-weight: bold;
`;

class Home extends Component {
    componentDidMount() {
        document.title = "Projects";
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Title>
                        <p class="text-center" id="wrong-test">Projects List</p>
                    </Title>
                    <Col xs={7}>
                        <Explain>
                            A few projects of mine I feel worth sharing. For each of them, I'll briefly talk about <Emphasis>what it is</Emphasis>, and <Emphasis>why it's interesting</Emphasis>. I won't touch much on the technical side, but most of them will include a paper or report (if it has one).
                        </Explain>
                        <Row xs={1} md={2} className="g-4">
                            {project_data.map((_, idx) => (
                                <ProjectCard Title={project_data[idx].title}
                                    Text={project_data[idx].text}
                                    ImgLink={project_data[idx].img_url}
                                    pageLink={{ pathname: '/projects/' + project_data[idx].pageID, query: { pageID: project_data[idx].pageID } }}
                                    Subtitle={project_data[idx].subtitle}
                                    Time={project_data[idx].time}
                                    pageID={project_data[idx].pageID}
                                />
                            ))}
                        </Row>

                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Home;