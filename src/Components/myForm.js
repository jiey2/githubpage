import React, { Component } from 'react';
import { Form, Button, Spinner } from "react-bootstrap";

class myForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "company_name" : "",
            "position_name" : "",
            "location" : "",
            "loading": false,
            "url_open":""
        }
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val});
    }

    submitHandler = () => {
        if (this.state.company_name === "" || this.state.position_name === "" || this.state.location ==="" ) {
            console.log("SUBMIT")
        } else {
            this.setState({loading : true})
            this.fetchLatexURL()   
        }
    }

    fetchLatexURL = async () => {
        let url = "https://hbiaxoevyh.execute-api.us-east-2.amazonaws.com/Working/playwithS3?company_name=" + this.state.company_name + 
        "&position_name=" + this.state.position_name + "&location=" + this.state.location
        fetch(url)
            .then(result => result.json())
            .then(data => {
                window.open(data, "_blank")
                this.setState({ loading: false })
            })
    }

    wildSubmitHandler = () => {
        if (this.state.company_name === "" || this.state.position_name === "" || this.state.location === "") {
            console.log("SUBMIT")
        } else {
            this.setState({ loading: true })
            this.fetchWildLatexURL()
        }
    }

    fetchWildLatexURL = async () => {
        let url = "https://5zyy05dxf3.execute-api.us-east-2.amazonaws.com/Working/layer_test?company_name=" + this.state.company_name +
            "&position_name=" + this.state.position_name + "&location=" + this.state.location
        fetch(url)
            .then(result => result.json())
            .then(data => {
                window.open(data, "_blank")
                this.setState({ loading: false })
            }) 
    }

    


    render() {
        return (
            <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicCompany">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" name="company_name" placeholder="E.g. Amazon Robotics" onChange={this.changeHandler} />
                    <Form.Text className="text-muted">
                        No information will be stored.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPosition">
                    <Form.Label>Position Name</Form.Label>
                    <Form.Control type="Text" name="position_name" placeholder="E.g. SWE Intern, Food Taster" onChange={this.changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiclocation">
                    <Form.Label>Location</Form.Label>
                        <Form.Control type="Text" name="location" placeholder="E.g. Cupertino, California" onChange={this.changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="It is an internship" />
                </Form.Group>
                </Form>
                <Button variant="primary" type="submit" onClick={this.submitHandler}>Generate</Button>{' '}
                <Button variant="danger" type="submit" onClick={this.wildSubmitHandler} >Wild Generate*</Button>{' '}
                <Spinner style={this.state.loading ? {} : { display: 'none' }}
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="false"
                />
                {/* {this.state.loading ? {}: {}} */}
                <Form>
                <Form.Text className="text-muted">
                        This may take a few seconds to generate a cover letter. <br/>
                        * Wild Generate uses OpenAI's GPT-2 natural-language generation engine. It's still in development, and likely to output gibberish.
                </Form.Text>
                </Form>
                
                {console.log("[Message for myself] If this requests part doesn't work, and today is after Dec 31 2021, check Lambda Botocore. ")}
            </div>
        );
    }
}

export default myForm;