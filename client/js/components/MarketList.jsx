import React from 'react';
import MarketItem from './MarketItem';
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class Example extends React.Component {
    render() {
        const marketItems = marketArr.map(market => <MarketItem market = {market} />);
        return (
        <ListGroup>
            {marketItems}
        </ListGroup>
        );
    }
}