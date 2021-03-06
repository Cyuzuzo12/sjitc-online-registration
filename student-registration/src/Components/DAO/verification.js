import React, { Component } from 'react';
import {verifyUser} from "./UserFunctions";

class Verification extends Component {
constructor(){
    super()
    this.state = {
      token:''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit (e){
    e.preventDefault()

    const user = {
      token: this.state.token,
    }

    verifyUser(user).then(res => {
      if (res) {
        this.props.history.push('/sign-in')
      }
    })
  }

  render (){
    return (
     <section>
        <div className="container">
        <div className = "row">
          <div className = "col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className = "h3 mb-3 font-weight-normal">Enter Token Here!</h1>
              <div className = "form-group">
                <label htmlFor="token">Token</label>
                <input type="text" 
                className="form-control" 
                name="token" 
                placeholder="Enter Token"
                value={this.state.token}
                onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-lg btn-primary btn-block">Verify</button>
            </form>
          </div>  
        </div>
      </div>  
     </section>
    )
  }
}

export default Verification
