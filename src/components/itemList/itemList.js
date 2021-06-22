import React, {Component} from 'react';
import styled from 'styled-components';


const ListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;

    li:first-child {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    li:last-child {
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }
`;

const ListItem = styled.li`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;

    & + & {
        border-top-width: 0;
    }
`;

export default class ItemList extends Component {

    render() {
        return (
            <ListWrapper>
                <ListItem>
                    John Snow
                </ListItem>
                <ListItem>
                    Brandon Stark
                </ListItem>
                <ListItem>
                    Geremy
                </ListItem>
            </ListWrapper>
        );
    }
}