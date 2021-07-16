import React, {useState, useEffect} from 'react';
import './itemList.css';
import ErrorMessage from '../error';
import Spinner from '../spinner/';

import PropTypes from 'prop-types';




function ItemList({getData, onItemSelected, renderItem}) {
    
    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data);
            });
    }, [])
   
    
    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const text = renderItem(item)
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => onItemSelected(id)}
                    >
                    {text}
                </li>
            )
        })
    }

    if(!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );

}

export default ItemList;






// class ItemList extends Component {

//     renderItems(arr) {
//         return arr.map((item) => {
//             const {id} = item;
//             const text = this.props.renderItem(item);
//             console.log(item);
//             return (
//                 <li
//                     key={id}
//                     className="list-group-item"
//                     onClick={() => this.props.onItemSelected(id)}
//                     >
//                     {text}
//                 </li>
//             )
//         })
//     }

//     render() {
//         const {data} = this.props;
//         const items = this.renderItems(data);

//         return (
//             <ul className='item-list list-group'>
//                 {items}
//             </ul>
//         )
//     }
// }


// ItemList.defaultProps = {
//     onItemSelected: () => {}
// }

// ItemList.propTypes = {
//     onItemsSelected: PropTypes.func   
// }


// const withData = (View, getData) => {
//     return class extends Component {

//         state = {
//             data: null
//         }

//         componentDidMount() {
            
//             getData()
//                 .then((data) => {
//                     this.setState({
//                         data
//                     });
//                 });
//         }

//         render() {
//             const {data} = this.state;

//             if (!data) {
//                 return <Spinner/>
//             }

//             return (
//                 <View {...this.props} data={data}/>
//             )
//         }

//     }
// }

// const {getAllCharacters} = new gotService(); // проблема с отображением списка только персонажей

// export default withData(ItemList, getAllCharacters);

