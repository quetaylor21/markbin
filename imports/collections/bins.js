import { Mongo } from 'meteor/mongo';

Meteor.methods({ 
    'bins.insert': function(){
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],  
            ownerId: this.userId 
        });
    },
    
    
    'bins.remove': function(bin){
    return Bins.remove(bin);
        
    }, 
        
    
    'bins.update': function (bin, content){
        // I want to set up the bin with this id with the values passed in by the new content... Overrides the old content
        return Bins.update(bin._id, { $set: { content }});
    },
    
    'bins.share': function(bin, email){
        
        return Bins.update(bin._id, { $push: { sharedWith: email }});
    }
    

});

export const Bins = new Mongo.Collection('bins');