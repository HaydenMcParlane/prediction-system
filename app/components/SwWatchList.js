import React from 'react';
import {Table} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


export default class SwWatchList extends React.Component {
    render(){
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
                                {/*TODO Dynamically populate*/}
                                {/*TODO Use AJAX to populate stock box*/}
                                {/*TODO Randomly allow insert (mutation operation)
                                if there isn't actual use case*/}
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>                        
                                <td>
                                    <FontAwesome name="plus-circle" size="2x" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}