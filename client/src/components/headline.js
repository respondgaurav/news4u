import React, { Component } from 'react';
import styled from 'styled-components';

const HeadlineSection = styled.div`
  padding: 1em;
  margin: 5px auto 5px auto;
  background: white;
  color:#595959;
  text-align: left;
  font-size: 15px;
  height: auto;
  width: 90%;
  float: left;
  @media (max-width: 1200px) {
    width: 100%;
    float: none;
}   
`;

const HeadlineImage = styled.img`
    float: left;
    height: 220px; 
    margin-top:20px;
    padding-right: 2em; 
    @media (max-width: 1200px) {
        width: 100%;
        height: auto;
        float: none;
        margin: 0;
        padding: none;
    }  
`;

const HeadlineText = styled.div`
    overflow: hidden;
`;

class Headline extends Component {

    render() {
        return ( 
            <HeadlineSection > 
                { this.props.headline.urlToImage!=null ? <HeadlineImage src={this.props.headline.urlToImage} /> : null }        
                <HeadlineText>
                    <h3>{this.props.headline.title}</h3>
                    <h5>{this.props.headline.source.name} at {this.props.headline.publishedAt}</h5>
                    <h5>{this.props.headline.description}</h5>
                    <p>{this.props.headline.content}</p>
                    <h6><a href={this.props.headline.url} target="_blank" rel="noopener noreferrer">Full Article</a></h6>
                </HeadlineText>
            </HeadlineSection>
        );
    }
}

export default Headline