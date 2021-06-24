import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


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



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRandomChar: true
        }
        this.toggleRandomChar = this.toggleRandomChar.bind(this);
    }

    toggleRandomChar() {
        this.setState(prevState => ({
            showRandomChar: !prevState.showRandomChar
        }));
    }


    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <Btn onClick={this.toggleRandomChar}>Toggle randomChar</Btn>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
