import React from 'react';
import SwNavbar from './SwNavbar';
import SwFooter from './SwFooter';
import SwWatchList from './SwWatchList';

export default class SwApplication extends React.Component {    
    
    render(){
        return (
            <div>
                <SwNavbar />   

                <SwWatchList />

                <SwFooter />                
            </div>
        );
    }
}
