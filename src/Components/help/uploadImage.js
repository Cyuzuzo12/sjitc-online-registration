import React from 'react';
 
class ImageUpload extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          image: null
        };
    
        this.onImageChange = this.onImageChange.bind(this);
      }
    
      onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };
    
      render() {
        return (
          <div>
            <div>
              <div>
                <img src={this.state.image} alt="" height="140" width="140"/>
                <h5>Upload passport photo</h5>
                <input type="file" name="myImage" onChange={this.onImageChange} />
              </div>
            </div>
          </div>
        );
      }
    }

export default ImageUpload