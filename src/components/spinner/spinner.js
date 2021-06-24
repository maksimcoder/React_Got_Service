import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import './spinner.css';


const top = keyframes`
    0% {transform: translateY(0);}

    25% {transform: translateY(-30px);}

    50% {transform: translateX(30px);}

    75% {transform: translateY(30px);}
    
    100% {transform: translateY(0);}
`;

const right = keyframes`
    0% {transform: translateY(0);}

    25% {transform: translateX(30px);}

    50% {transform: translateY(30px);}

    75% {transform: translateX(-30px)}
    
    100% {transform: translateX(0);}
`;

const bottom = keyframes`
    0% {transform: translateY(0);}

    25% {transform: translateY(30px);}

    50% {transform: translateX(-30px);}

    75% {transform: translateY(-30px)}
    
    100% {transform: translateY(0);}
`;

const left = keyframes`
    0% {transform: translateY(0);}

    25% {transform: translateX(-30px);}

    50% {transform: translateY(-30px);}

    75% {transform: translateX(30px)}
    
    100% {transform: translateX(0);}
`;


const SpinBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`;

const SpinItem = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #4682B4;
    border-radius: 50%;
    animation: ${props => props.animation} 1s linear infinite;
`;


export default class Spinner extends Component {
    render() {
        return (
            <SpinBlock>
                <SpinItem animation={top} />
                <SpinItem animation={right} />
                <SpinItem animation={bottom} />
                <SpinItem animation={left} />
            </SpinBlock>
        );
    }
}









