import React, {useState, useEffect} from 'react';
import './charDetails.css';
import GotService from '../../services/gotService';
import ErrorMessage from '../error';
import Spinner from '../spinner/';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field};

    
export default function CharDetails({itemId, getData, children})  {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        updateChar();
    }, [itemId]);


    function onCharDetailsLoaded(item) {
        setItem(item);
        setLoading(false);
    }

    function updateChar() {

        if (!itemId) {
            return;
        }

        setLoading(true);

        getData(itemId)
            .then( onCharDetailsLoaded )
            .catch( () => onError())
    }

    function onError(){
        setItem(null);
        setError(true);
    }


    if (!item && error) {
        return <ErrorMessage/>
    } else if (!item) {
        return <span className="select-error">Please select a character</span>
    }

    const {name} = item;

    if (loading) {
        return (
            <div className="char-details rounded">
                <Spinner/>
            </div>
        )
    }

    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
        </div>
    );
    
}

//