import React from 'react';
import {Table} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class SwWatchList extends React.Component {
    render(){
        return (
            <Row>
                <Col lg={8} lgOffset={2}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Symbol</th>
                                <th># Shares</th>
                                <th>Buy Price</th>                        
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>AAPL</td>
                                <td>200</td>
                                <td>250.11</td>                        
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}