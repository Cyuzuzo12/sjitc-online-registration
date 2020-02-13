import React from 'react';
// import avatar from '../../images/avatar.jpg';
class UpdateProfie extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          image: require('../../images/avatar.jpg')
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
                {/* <h5>Upload passport photo</h5> */}
                <i className="fa fa-edit m-2"><input type="file"  name="myImage" onChange={this.onImageChange} /></i>
              </div>
            </div>
          </div>
        );
      }
    }

export default UpdateProfie