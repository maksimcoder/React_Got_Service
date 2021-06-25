import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';


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

    gotApi = new GotService();

    state = {
        charList: null
    }
    
    componentDidMount() {
        this.gotApi.getAllCharacters()
            .then(charList => {
                this.setState({
                    charList
                });
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <ListItem
                    key={i}
                    onClick={() => this.props.onCharSelected(41 + i)} >
                    {item.name}
                </ListItem>
            )
        });
    }

    render() {

        const {charList} = this.state;
        
        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);
        return (
            <ListWrapper>
                {items}
            </ListWrapper>
        );
    }
}