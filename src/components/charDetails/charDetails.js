import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import './charDetails.css'; //.select-error
import Spinner from '../spinner/spinner';


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

    gotApi = new GotService();

    state = {
        char: null,
        loading: true
    }

    
    componentDidMount() {
        this.updateChar();
    }


    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    onDataLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.setState({
            loading: true
        })

        this.gotApi.getCharacter(charId)
            .then(this.onDataLoaded);
    }


    render() {

        if (!this.state.char) {
            return <span className='select-error'>Please select a character</span>
        }

        
        const {loading} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <View char={this.state.char}/> : null

        return (
            <CharBlock>
                {spinner}
                {content}
            </CharBlock>
        )
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>{name}</h4>
            <CharList flush>
                <CharListItem >
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </CharListItem>
                <CharListItem >
                    <span className="term">Born</span>
                    <span>{born}</span>
                </CharListItem>
                <CharListItem >
                    <span className="term">Died</span>
                    <span>{died}</span>
                </CharListItem>
                <CharListItem >
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </CharListItem>
            </CharList>
        </>
    );
}

export {CharBlock, CharList, CharListItem};