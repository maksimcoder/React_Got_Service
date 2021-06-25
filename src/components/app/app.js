import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';

import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage';





export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRandomChar: true,
            error: false
        }
        this.toggleRandomChar = this.toggleRandomChar.bind(this);
    }

    componentDidCatch() {
        console.log('error in app');
        this.setState({
            error: true
        })
    }

    toggleRandomChar() {
        this.setState(prevState => ({
            showRandomChar: !prevState.showRandomChar
        }));
    }


    

    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        if (this.state.error) {
            return <ErrorMessage/>
        }

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
                    <CharacterPage toggleRandomChar={this.toggleRandomChar}/>
                </Container>
            </>
        );
    }
}
