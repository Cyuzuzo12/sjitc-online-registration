import React, { Component } from 'react';
import FormField from '../sign/formField';
import {Editor} from 'react-draft-wysiwyg';
import{firebaseNews} from "../../firebase";
import{EditorState} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Uploader from './fileUploader';
import "./dashboard.css";
class Dashboard extends Component {
    state = { 
        editorState: EditorState.createEmpty(),
        postError:'',
        success:'',
        loading:false,
        formdata:{
            title:{
                element:'input',
                value:'',
                config:{
                    name:'title_input',
                    type:'text',
                    placeholder:'Enter news title'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            date:{
                element:'input',
                value:'',
                config:{
                    name:'date_input',
                    type:'date',
                    placeholder:'dd/mm/yyyy'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            body:{
                element:'texteditor',
                placeholder:'Type here...',
                value:'',
                valid:true
            },
            image:{
                element:'image',
                value:'',
                valid:true
            }
    }

     }
     updateForm = (element,content='') => {
        const newFormdata = {
            ...this.state.formdata
        }
        const newElement = {
            ...newFormdata[element.id]
        }

        if(content === ''){
            newElement.value = element.event.target.value;
        } else {
            newElement.value = content
        }
        if(element.blur){
            let validData = this.validate(newElement);
            newElement.valid = validData[0];
            newElement.validationMessage = validData[1];   
        }
        newElement.touched = element.blur;
        newFormdata[element.id] = newElement;
        
        this.setState({
            formdata:newFormdata
        })
    }

    validate = (element) => {
        let error = [true,''];

        if(element.validation.required){
            const valid = element.value.trim() !=='';
            const message = `${!valid ? 'This field is required':''}`;
            error = !valid ? [valid,message] : error
        }

        return error;
    }

    submitForm = (event) => {
        event.preventDefault();

            let dataToSubmit = {};
            let formIsValid = true;

            for(let key in this.state.formdata){
                dataToSubmit[key] = this.state.formdata[key].value
            }
            for(let key in this.state.formdata){
                formIsValid = this.state.formdata[key].valid && formIsValid;
            }
            if(formIsValid){
              this.setState({
                loading:true,
                postError:''
            })

            firebaseNews.orderByChild("id")
            .limitToLast(1).once('value')
            .then( snapshot => {
                let newsId = null;
                snapshot.forEach(childSnapshot=>{
                    newsId = childSnapshot.val().id;
                });

                // dataToSubmit['date'] = firebase.database.ServerValue.TIMESTAMP
                dataToSubmit['id'] = newsId + 1;

                firebaseNews.push(dataToSubmit)
               .then( news => {
                    this.props.history.push(`/news/${news.key}`)
                    this.setState({
                        success:'New Added'
                    })
               }).catch( e =>{
                   this.setState({
                       postError: e.message
                   })
               })
            })
        }
                else {
                 this.setState({
                     postError:'something went wrong'
                 })
                }
            }
       
    submitButton = () => (
        // this.state.loading ? 
        //     'loading...'
        // :
        <div>
           
            <button type="submit"> add </button>
        </div>
    )
    showError = () => (
        this.state.postError !== '' ? 
            <div className="error">{this.state.postError}</div>
        : ''
    )
    success = () => (
        this.state.postError !== '' ? 
            <div className="text-success">{this.state.success}</div>
            : ''
    )
    onEditorStateChange = (editorState) => {

        let contentState = editorState.getCurrentContent();

        let html = stateToHTML(contentState)

        this.updateForm({id:'body'},html)

        this.setState({
            editorState
        })
    }
    storeFilename = (filename) => {
        this.updateForm({id:'image'},filename)
    } 
    render() { 
        return ( <section style={{
            minHeight:'700px',
            maxHeight:'2700px',
            background:'#fff'
        }}>
            <div className="container">
<div className="row">
    <div className="col m-4">
    <div className="postContainer">
            <form onSubmit={this.submitForm}>
                <h2>Add News</h2>
                <FormField
                        id={'title'}
                        formdata={this.state.formdata.title}
                        change={(element)=>this.updateForm(element)}
                    />
                     
                    <Editor
                    editorState={this.state.editorState}
                    wrapperClassName="myEditor-wrapper"
                    editorClassName="myEditor-editor"
                    onEditorStateChange={this.onEditorStateChange}

                    />
                     <FormField
                        id={'date'}
                        formdata={this.state.formdata.date}
                        change={(element)=>this.updateForm(element)}
                    />
                    <Uploader
                    filename={ (filename)=> this.storeFilename(filename) }
                     />
                    { this.submitButton() }
                    {this.success()}
                    {this.showError()}
            </form>
        </div>
        
    </div>
</div>
            </div>
        </section> );
    }
}
 
export default Dashboard;