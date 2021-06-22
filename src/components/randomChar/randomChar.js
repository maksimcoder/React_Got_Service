import React, {Component} from 'react';
// import styled from 'styled-components';

import {CharBlock, CharList, CharListItem} from '../charDetails/charDetails';
import GotService from '../../services/gotService';
import styles from './RandomChar.module.css';




export default class RandomChar extends Component {
    gotApi = new GotService();
    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }

    render() {
        const {name, gender, born, died, culture} = this.state;
        return (
            <CharBlock>
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
            </CharBlock>
        );
    }
}
