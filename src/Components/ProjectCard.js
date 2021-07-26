import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
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

    

    cardEnter = () => {
        let path = this.props.pageLink;
        if (path != null) { this.props.history.push(path) } else { console.log(this.props)};
        
    }

    render() { 
        return (  
            <Col>
                <Card bg={this.state.hovered ? "light" : ""} onClick={this.cardEnter.bind(this)} style={{ cursor: 'help' }} onMouseOver={this.cardHover.bind(this)} onMouseLeave={this.cardLeave.bind(this)}>
                <Card.Img variant="top" src={this.props.ImgLink}/>
                <Card.Body>
                    <Card.Title>{this.props.Title}</Card.Title>
                    <Card.Subtitle>{this.props.Subtitle}</Card.Subtitle>
                    <Card.Text>
                        {this.props.Text}
                    </Card.Text>
                        <Card.Text>
                            <small className="text-muted">{this.props.Time}</small>
                        </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        );
    }
}
 
export default withRouter(ProjectCard);