import React, {useState, useEffect} from 'react';
import './randomChar.css';
import GotService from '../../services/gotService';
import Spinner from '../spinner/';
import ErrorMessage from '../error/';
import PropTypes from 'prop-types';

    
export default function RandomChar({interval}) {

    const gotService = new GotService();

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        updateChar();
        let timerId = setInterval(updateChar, interval);
        return () => {
            clearInterval(timerId);
        }
    }, []);

    

    function onCharLoaded(char) {
        setChar(char);
        setLoading(false);
        
    };

    function onError(err) {
        setError(true);
        setLoading(false);
    }

    function updateChar() {
        const id = Math.floor(Math.random()*140 + 25);
        // const id = 130000;
        gotService
          .getCharacter(id)
          .then(onCharLoaded)
          .catch(onError);
    }


    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char} /> : null;
    

    return (
        <div className="random-block rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
}

RandomChar.defaultProps = {
    interval: 15000
}

RandomChar.propTypes = {
    interval: PropTypes.number
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

// RandomChar.propTypes = {
//     interval: (props, propName, componentName) => {
//         const value = props[propName];

//         if (typeof value === 'number' && !isNaN(value)) {
//             return null
//         }
//         return new TypeError(`${componentName}: ${propName} must be a number`);
//     }
// }
