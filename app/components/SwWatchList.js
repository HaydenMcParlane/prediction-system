import React from 'react';
import {Table} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import api from '../api';
import WatchListStore from '../stores/WatchListStore';


let _getWatchListState = () => {
    return { watchList: WatchListStore.getAll() };
};
export default class SwWatchList extends React.Component {
    constructor(props){
        super(props);
        this.state = _getWatchListState();
        this.onChange = this.onChange.bind(this);
    }

    onChange(){
        this.setState(_getWatchListState());
    }
    componentWillUnmount(){
        WatchListStore.removeListener('change', this.onChange);
    }
    componentDidMount(){
        api.fetchWatchList();
        WatchListStore.on('change', this.onChange);
    }

    render(){
        let content = this.state.watchList.map(link => {
            return (
                    <div>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>                        
                        <td>
                            <FontAwesome name="plus-circle" size="2x" />
                        </td>
                    </div>
            );
        });

        return (
            <Row>
                <Col lg={8} lgOffset={2}>
                    <Table striped bordered condensed responsive>
                        <thead>
                            <tr>                                
                                <th>Symbol</th>
                                <th># Shares</th>
                                <th>Buy Price</th>                        
                                <th>Actions</th>                        
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                                
                                {/*<td>--</td>
                                <td>--</td>
                                <td>--</td>                        
                                <td>
                                    <FontAwesome name="plus-circle" size="2x" />
                                </td>*/}
                                {content}
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}