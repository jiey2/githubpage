import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ProjectCard from './Components/ProjectCard';

import { project_data } from './ProjectListMetadata.js'

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;

class Home extends Component {
    componentDidMount() {
        document.title = "Projects"
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Title>
                        <p class="text-center" id="wrong-test">Projects List</p>
                    </Title>
                    <Col xs={7}>
                    <Row xs={1} md={2} className="g-4">
                            {project_data.map((_, idx) => (
                                <ProjectCard Title={project_data[idx].title} Text={project_data[idx].text} ImgLink={project_data[idx].img_url}/>
                            ))}
                    </Row>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Home;