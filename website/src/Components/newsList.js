import React, { Component } from 'react';
import {firebase,firebaseNews,fireBaseLooper} from "./../firebase";
import NewsListTemplate from './newListTemplate';

class NewsList extends Component {
    state = { 
        news:[],
        imageURL:''
     }
     componentWillMount(){
         firebaseNews.limitToLast(3).once('value')
         .then((snapshot)=>{
            const news = fireBaseLooper(snapshot);
             this.setState({
                 news
             })
         })
         
     }
     getImageURL = (filename) =>{

        firebase.storage().ref('images')
        .child(filename).getDownloadURL()
        .then( url => {
            this.setState({
                imageURL: url
            })
        })

    }

    render() { 
        return ( 
            <NewsListTemplate data={this.state.news} />
         );
    }
}
 
export default NewsList;