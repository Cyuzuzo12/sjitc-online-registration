import React from 'react';
 
class FilesUpload extends React.Component {
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
                <img src={this.state.image} alt="" height="120" width="120" style={{display:'none'}}/>
                
                <input type="file" name="myfile" onChange={this.onImageChange}  className="form-control"/>
              </div>
            </div>
          </div>
        );
      }
    }

export default FilesUpload