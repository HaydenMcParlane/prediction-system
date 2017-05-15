import React from 'react';
import SwNavbar from './SwNavbar';
import SwFooter from './SwFooter';

export default class SwApplication extends React.Component {    
    
    render(){
        return (
            <div>
                <SwNavbar />   

                {/* Content... */}

                <SwFooter />                
            </div>
        );
    }
}
