import React from 'react';
import MarketItem from './MarketItem';
import {Table} from 'reactstrap';
import BootstrapTable from 'reactjs-bootstrap-table';

export default class MarketList extends React.Component {

    //sort the table
    onSort(col, dir) {
        this.props.sort(col, dir);
    }

    //definition of table columns
    columns = [
        { name: 'col1', display: 'Market A' },
        { name: 'col2', display: 'Market B' },
        { name: 'spread', display: 'Arbitrage Spread' }
    ]

    //generate the table
    render() {
        return (
        <BootstrapTable data = { marketsArr }>
            onSort = {this.onSort} 
            columns = {columns}
            </BootstrapTable>
        );
    }

    //https://github.com/raythree/reactjs-bootstrap-table-demo/blob/8618565b5221479423fe55995626385018f3c129/src/components/PageOne.js
    //http://demo.ray3.io/bootstrap-table/
    //https://www.npmjs.com/package/reactjs-bootstrap-table
    
}