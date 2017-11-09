import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

class BinsMain extends Component {
    render() {

        if(!this.props.bin) { return <div><h2>No bins created... click on "Create Bin" to get started</h2></div>}

       // console.log(this.props.params.binId);
        return (

            <div>
            <BinsEditor bin={this.props.bin}/>
            <BinsViewer bin={this.props.bin}/>
            <BinsShare bin={this.props.bin}/>
            </div>
        );
    }
}


export default createContainer((props) => {
 const { binId } = props.params;
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');


    return { bin: Bins.findOne(binId)};
}, BinsMain);
