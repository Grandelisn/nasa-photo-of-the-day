import React from 'react';
import styled from 'styled-components';

export default function Box(props){
    const { box } = props;
    
    

    return (
    <div className="box.js container">
        <BoxStyle>
        <p>Date: {box.date} <br/> Title: {box.title} </p>
        </BoxStyle>
        <img src = {box.url}></img>
    
    </div>)
}
const BoxStyle = styled.p`
    color: red;
    

`;