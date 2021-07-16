import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GotService from '../../services/gotService';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../error';
import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage';
import BooksItem from '../pages/bookItem/booksItem';
import NotFoundPage from '../pages/404/notFoundPage';

import './app.css';



export default class App extends Component {

    gotService = new GotService();
    state = {
        showRandomChar: true,
        error: false
    }
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
       
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomChar ? <RandomChar /> : null;

        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button 
                                    className="toggle-btn"
                                    onClick={this.toggleRandomChar}>Toggle random character</button>
                            </Col>
                        </Row>

                        <Switch>
                            <Route path='/characters' exact component={CharacterPage}/>
                            <Route path='/houses' exact component={HousePage}/>
                            <Route path='/books' exact component={BookPage}/>
                            <Route path='/books/:id'exact render={
                                ({match}) => {
                                    const {id} = match.params;
                                    
                                    return <BooksItem bookId={id}/>
                                }
                            } />

                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
};
