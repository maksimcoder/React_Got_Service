import React, {Component} from 'react';
// import styled from 'styled-components';
import {CharBlock, CharList, CharListItem} from '../charDetails/charDetails';
import styles from './RandomChar.module.css';




export default class RandomChar extends Component {

    render() {
        return (
            <CharBlock>
                <h4>Random Character: John</h4>
                <CharList flush>
                    <CharListItem>
                        <span className={styles.term}>Gender </span>
                        <span>male</span>
                    </CharListItem>
                    <CharListItem>
                        <span className={styles.term}>Born </span>
                        <span>11.03.1039</span>
                    </CharListItem>
                    <CharListItem>
                        <span className={styles.term}>Died </span>
                        <span>13.09.1089</span>
                    </CharListItem>
                    <CharListItem>
                        <span className={styles.term}>Culture </span>
                        <span>Anarchy</span>
                    </CharListItem>
                </CharList>
            </CharBlock>
        );
    }
}
