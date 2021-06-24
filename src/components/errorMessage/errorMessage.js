import React from 'react';
import styled from 'styled-components';

const ErrorText = styled.span`
    text-transform: uppercase;
`;

const ErrorBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

`;


const ErrorMessage = () => {
    return (
        <ErrorBlock>
            <ErrorText>Something went wrong <br /> refresh the page </ErrorText>
        </ErrorBlock>
    )
}

export default ErrorMessage;