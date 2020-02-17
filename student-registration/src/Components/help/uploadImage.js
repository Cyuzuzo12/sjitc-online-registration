import React from 'react';
import {firebase} from "../../firebase";
import FileUploader from'react-firebase-file-uploader';
class ImageUpload extends React.Component{
  state = { 
    name:'',
    isUploading:false,
    progress:0,
    fileURL:''
 }
 handleUploadStart = () => {
    this.setState({ isUploading:true,progress:0})
}

handleUploadError = (error) => {
    this.setState({isUploading:false})
    console.log(error)
}

handleProgress = (progress) => {
    this.setState({
        progress
    })
}

handleUploadSuccess = (filename) => {
    
    this.setState({
        name: filename,
        progress:100,
        isUploading:false
    })
    ///
    firebase.storage().ref('registration')
    .child(filename).getDownloadURL()
    .then( url => {
        this.setState({fileURL:url})
    })

    this.props.filename(filename)

}



render(){
    return(
        <div>
            
            <FileUploader
                accept="image/*"
                name="image"
                randomizeFilename
                storageRef={firebase.storage().ref('registration')}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
            />
            { this.state.isUploading ? 
                <p>Progress:{this.state.progress}</p>
                :null
            }
            { this.state.fileURL ? 
                <img style={{
                    width:'140px',
                    height:'140px'
                }} src={this.state.fileURL} alt={this.state.fileURL} />
                : null
            }
    
        </div>
    )
}

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       image: null
    //     };
    
    //     this.onImageChange = this.onImageChange.bind(this);
    //   }
    
    //   onImageChange = event => {
    //     if (event.target.files && event.target.files[0]) {
    //       let img = event.target.files[0];
    //       this.setState({
    //         image: URL.createObjectURL(img)
    //       });
    //     }
    //   };
    
    //   render() {
    //     return (
    //       <div>
    //         <div>
    //           <div>
    //             <img src={this.state.image} alt="" height="140" width="140"/>
    //             <h5>Upload passport photo</h5>
    //             <input type="file" name="myImage" onChange={this.onImageChange} />
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   }
    }

export default ImageUpload