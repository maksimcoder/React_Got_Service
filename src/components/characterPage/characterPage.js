import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';


const Btn = styled.button`
    display: block;
    width: 200px;
    height: 25px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: blue;
    color: white;
    font-weight: bold;
    letter-spacing: .5px;
`;

export default class CharacterPage extends Component {

    state = {
        selectedChar: 130,
        error: false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    }

    componentDidCatch() {
        console.log('error in CharPage')
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Row>
                <Col md='6'>
                    <Btn onClick={this.props.toggleRandomChar}>Toggle randomChar</Btn>
                    <ItemList onCharSelected={this.onCharSelected}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar} />
                </Col>
            </Row>
        )
    }
}