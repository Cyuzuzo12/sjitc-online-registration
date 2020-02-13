import React, { Component } from 'react';
import {firebase,firebaseLeaders,fireBaseLooper} from "./../../firebase";
import TeamTemplates from './teamTemplate';

class TeamList extends Component {
    state = { 
        leaders:[]
     }
     componentWillMount(){
         firebaseLeaders.once('value')
         .then((snapshot)=>{
            const leaders = fireBaseLooper(snapshot);
            const asyncFunction = (item,i,cb) =>{
                firebase.storage().ref('images')
                .child(item.image).getDownloadURL()
                .then(url => {
                    leaders[i].image = url;
                    cb();
                })
            }
            let requests = leaders.map((item,i) =>{
                return new Promise((resolve)=> {
                    asyncFunction(item,i, resolve)
                })
            })

            Promise.all(requests).then(()=>{
                this.setState({
                    leaders
                })
            })
         })
         
     }
    render() { 
        return ( 
                <TeamTemplates data={this.state.leaders} />
          
            
         );
    }
}
 
export default TeamList;