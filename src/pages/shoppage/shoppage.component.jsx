import React from 'react';

// data
import SHOP_DATA from './shop.data'
// children components
import CollectionDirectory from '../../components/collection-directory/collection-directory.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const collections = this.state.collections;
        return(
            <div className='shop-page'>
            {
                collections.map(({id, ...collectionProps}) => (
                    <CollectionDirectory key={id} {...collectionProps} />
                ))
            }
            </div>
        )
    }
}

export default ShopPage