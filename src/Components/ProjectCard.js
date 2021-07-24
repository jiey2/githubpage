import React, { Component } from "react";
import { Card , Col } from 'react-bootstrap';

class ProjectCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "hovered": false
        }
    }

    cardHover(e) {
        this.setState({"hovered":true})
    }

    cardLeave(e) {
        this.setState({ "hovered": false })
    }

    render() { 
        return (  
            <Col onMouseOver={this.cardHover.bind(this)} onMouseLeave={this.cardLeave.bind(this)}>
                <Card bg={this.state.hovered ? "light" : ""}>
                <Card.Img variant="top" src={this.props.ImgLink}/>
                <Card.Body>
                    <Card.Title>{this.props.Title}</Card.Title>
                    <Card.Text>
                        {this.props.Text}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        );
    }
}
 
export default ProjectCard;