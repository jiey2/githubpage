import React, { Component } from 'react';
import { Col, Row, Container, Spinner, Figure } from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;


class ProjectPage extends Component {
    state = {
        contentsData: {},
        properties: {},
        title: "",
        what_it_is: "",
        why_it_is_interesting: "",
        figs: [],
        docs: [],
        loading: false,
        pageID: this.props.location.pathname.replace('/projects/', '')
    }

    redirectURL = (oldURL) => {
        // console.log('figs url', oldURL, oldURL.includes('githubpage.s3.us-east-2.amazonaws.com'));
        return oldURL.replace('githubpage.s3.us-east-2.amazonaws.com', 'd3xdgu3rc17hb.cloudfront.net');
    }

    rearrangeArray = (array_name, array_url) => {
        let res = []
        for (let i = 0; i < array_name.length; i++) {
            res.push(
                {
                    name: array_name[i],
                    url: array_url[i]
                }
            )
        }
        return res
    }

    fetchContents = async () => {
        const myHeaders = new Headers();
        // myHeaders.append("Notion-Version", "2021-05-13");
        // myHeaders.append("Authorization", "Bearer secret_XqE3HGLH5teE1z1BF5PhKz0o10Kv8lVr7G0RcdrVTts");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        this.setState({ loading: true })

        fetch("https://bgcomzqvsj.execute-api.us-east-2.amazonaws.com/Working/notion-project-list?pageID=" + this.state.pageID, requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ contentsData: JSON.parse(result) })
                this.setState({ title: this.state.contentsData.properties.Name.title[0].plain_text })
                this.setState({ what_it_is: this.state.contentsData.properties.what_it_is.rich_text[0].plain_text })
                this.setState({ why_it_is_interesting: this.state.contentsData.properties.why_it_is_interesting.rich_text[0].plain_text })

                let figures_name_arr = this.state.contentsData.properties.Figs.multi_select
                figures_name_arr = figures_name_arr.map(obj => obj.name)
                let figures_url_arr = this.state.contentsData.properties.Fig_url.multi_select
                figures_url_arr = figures_url_arr.map(obj => obj.name)
                let figs_arr = this.rearrangeArray(figures_name_arr, figures_url_arr)
                this.setState({ figs: figs_arr })

                let docs_name_arr = this.state.contentsData.properties.Docs.multi_select
                docs_name_arr = docs_name_arr.map(obj => obj.name)
                let docs_url_arr = this.state.contentsData.properties.Docs_url.multi_select
                docs_url_arr = docs_url_arr.map(obj => obj.name)
                let docs_arr = this.rearrangeArray(docs_name_arr, docs_url_arr)
                this.setState({ docs: docs_arr })

                this.setState({ loading: false })
                console.log(this.props)
            })
            .catch(error => console.log('error', error));
    }

    componentDidMount() {
        this.fetchContents()
        document.title = ("Projects")
    }

    componentDidUpdate() {
        if (this.state.title !== "") {
            document.title = (this.state.title)
        }
    }


    render() {
        let Contents;

        if (this.state.loading) {
            Contents = (
                <Col xs={8}>
                    <Title>
                        <p>Loading...</p>
                        <Spinner animation="border" size="lg" />
                    </Title>
                </Col>
            );

        } else {
            Contents = (
                <Col xs={8} >
                    <Title>
                        <p>{this.state.title}</p>
                    </Title>
                    <h5> What it is? </h5>
                    <p>
                        {this.state.what_it_is}
                    </p>
                    <h5> Why it's interesting? </h5>
                    <p> {this.state.why_it_is_interesting} </p>
                    <br />
                    <Row className="justify-content-md-center">
                        <Col xs={8} className="justify-content-center">
                            {this.state.figs.map((obj, idx) => {
                                this.redirectURL(obj.url);
                                return (
                                    <Figure >
                                        <Figure.Image
                                            // width={171}
                                            // height={180}
                                            alt="171180"
                                            src={this.redirectURL(obj.url)}
                                        />
                                        <Figure.Caption className="justify-content-md-center">
                                            Fig {idx + 1}. {obj.name}
                                        </Figure.Caption>
                                    </Figure>
                                )
                            }
                            )}
                        </Col>
                    </Row>
                    <h6>{this.state.docs.length === 0 ? 'No Documents Appended' : 'Technical Documents:'} </h6>
                    <div class="list-group">
                        {this.state.docs.map((obj, idx) => (
                            <a href={this.redirectURL(obj.url)} target="_blank" rel="noreferrer" class="list-group-item list-group-item-action">{obj.name}</a>
                        ))
                        }
                    </div>
                </Col>
            );
        }


        return (
            <Container>
                <Row className="justify-content-md-center">
                    {Contents}
                </Row>
            </Container>
        );


    }
}

export default ProjectPage;