import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../charDetails';
import ErrorMessage from '../../error';
import RowBlock from '../../rowBlock';





export default class CharacterPage extends Component {
    gotService = new GotService();

    state = {
        selectedChar: 130,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={(item) => `${item.name} (${item.gender})`}/>
        );
        const charDetails = (
            <CharDetails 
                itemId = {this.state.selectedChar}
                getData={this.gotService.getCharacter} >
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
            </CharDetails>
        )

        return (
            <RowBlock leftPart={itemList} rightPart={charDetails}/>
        )
    }
}