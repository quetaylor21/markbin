import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinViewer extends Component{
    render(){
        
const RawHTML =
        markdown.toHTML(this.props.bin.content);
        return(
        
            <div className="col-xs-4">
            <h5>Output</h5>
            <div dangerouslySetInnerHTML={{ __html: RawHTML}}></div>   
            </div>
        
        );
    }
}

export default BinViewer;