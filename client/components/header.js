import React, { Component } from 'react';
import Accounts from './accounts'; 
import { Link, browserHistory } from 'react-router';


class Header extends Component{
    
    onBinClick(event) {
        event.preventDefault();
       if (!Meteor.user()) {  alert('You must be logged in to create a bin'); }else{   
        
        // Navigates me to new bin created when its created
        Meteor.call('bins.insert', (error, binId) => {
           browserHistory.push(`/bins/${binId}`); 
        });
         } 
    }
    
    render(){
        
        return(
        <nav className="nav navbar-default">
            <div className="navbar-header">
            <Link to="/" className="navbar-brand">Markdown</Link>
            </div>
            <ul className="nav navbar-nav">
                <li>
                    <Accounts /> 
                </li>
                <li>
                    <a href='#' onClick={this.onBinClick.bind(this)}>Create Bin</a>  
                </li>
            </ul>
        </nav>    
        
        );  
    }  
}

export default Header;