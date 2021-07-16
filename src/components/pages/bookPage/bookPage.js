import React, { Component } from 'react';
import GotService from '../../../services/gotService';
import {withRouter} from 'react-router-dom';
import ItemList from '../../itemList';
import ErrorMessage from '../../error';


class BookPage extends Component {
    gotService = new GotService();
    state = {
        error: false
    }


    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }


        return (
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.history.push(`/books/${itemId}`);
                }}
                getData={this.gotService.getAllBooks}
                renderItem={(item) => `${item.name} (${item.numberOfPages})`}/>
        );
    }
}

export default withRouter(BookPage);