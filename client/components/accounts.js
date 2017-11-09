import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
    // Lifecycle methods
    
    componentDidMount(){
      // Render the blaze accounts form then find the div we just rendered in the render method and place the blaz account form in that div  
        
        
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }
    
    componentWillUnmount(){
      // Go find the forms we created and destroy them we need to clean these forms up ourselves
    Blaze.remove(this.view);
        
    }
    render(){
        return(
        
            <div ref="container">
            </div>
        );
        
    }
}

export default Accounts;