import React, { Component } from 'react';
import GotService from '../../../services/gotService';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../charDetails';
import RowBlock from '../../rowBlock';
import ErrorMessage from '../../error';



export default class HousePage extends Component {
    gotService = new GotService();
    state = {
        selectedHouse: 1,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={(item) => `${item.name} (${item.region})`}/>
        );



        const charDetails = (
            <CharDetails
                itemId={this.state.selectedHouse}
                getData={this.gotService.getHouse}>
                <Field field="name" label="Name" />
                <Field field="region" label="Region" />
                <Field field="words" label="Words" />
                <Field field="titles" label="Titles" />
                <Field field="ancestralWeapons" label="AncestralWeapons" />
            </CharDetails>
        )

        return (
            <RowBlock leftPart={itemList} rightPart={charDetails} />
        );
    }
}


