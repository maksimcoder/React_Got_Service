import React, { Component } from 'react';
import GotService from '../../../services/gotService';
import CharDetails, {Field} from '../../charDetails/charDetails';


export default class BooksItem extends Component {
    gotService = new GotService();

    

    render() {
        return (
            <CharDetails
                itemId={this.props.bookId}
                getData={this.gotService.getBook}>
                <Field field="name" label="Name" />
                <Field field="publisher" label="Publisher" />
                <Field field="numberOfPages" label="PagesAmount" />
                <Field field="released" label="Released" />
            </CharDetails>
        );
    }
}

