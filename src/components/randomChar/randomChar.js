import React, {Component} from 'react';
// import styled from 'styled-components';

import {CharBlock, CharList, CharListItem} from '../charDetails/charDetails';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import styles from './RandomChar.module.css';




export default class RandomChar extends Component {

    gotApi = new GotService();
    state = {
        char: {},
        loading: true
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        });
    }

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*140 + 25);
        // const id = 142124412;

        this.gotApi.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const { char, loading, error} = this.state;
        console.log('render');

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <CharBlock>
                {errorMessage}
                {spinner}
                {content}
            </CharBlock>
        );
    }
}


const View = ({char}) => {
    const {name, gender, born, died, culture} = char; // props
    return (
        <>
            <h4>Random Character: {name}</h4>
            <CharList flush>
                <CharListItem>
                    <span className={styles.term}>Gender </span>
                    <span>{gender}</span>
                </CharListItem>
                <CharListItem>
                    <span className={styles.term}>Born </span>
                    <span>{born}</span>
                </CharListItem>
                <CharListItem>
                    <span className={styles.term}>Died </span>
                    <span>{died}</span>
                </CharListItem>
                <CharListItem>
                    <span className={styles.term}>Culture </span>
                    <span>{culture}</span>
                </CharListItem>
            </CharList>
        </>
    )
}