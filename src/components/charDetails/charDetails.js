import React, {Component} from 'react';
import styled from 'styled-components';
import './charDetails.css'; //.select-error


const CharBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem;

    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const CharList = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    
    li:first-child {
        border-top-width: ${props => props.flush ? 0 : 1}
    }
    li {
        border-right-width: 0;
        border-left-width: 0;
    }
    li + li {border-top-width: 0;}
    
    li:last-child {
        border-bottom-width: ${props => props.flush ? 0 : 1}
    }
`;

const CharListItem = styled.li`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
`;

export default class CharDetails extends Component {

    render() {
        return (
            <CharBlock>
                <h4>John Snow</h4>
                <CharList flush>
                    <CharListItem >
                        <span className="term">Gender</span>
                        <span>male</span>
                    </CharListItem>
                    <CharListItem >
                        <span className="term">Born</span>
                        <span>1783</span>
                    </CharListItem>
                    <CharListItem >
                        <span className="term">Died</span>
                        <span>1820</span>
                    </CharListItem>
                    <CharListItem >
                        <span className="term">Culture</span>
                        <span>First</span>
                    </CharListItem>
                </CharList>
            </CharBlock>
        );
    }
}

export {CharBlock, CharList, CharListItem};