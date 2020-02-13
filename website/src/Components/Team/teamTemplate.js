import React from 'react';
import { Media } from "reactstrap";

const TeamTemplates = (props) => {

    const leaders = props.data.map( (leader) => {
      return (
        <div key={leader.id} className="col-12 m-1" > 
        <Media tag="li" >
        <Media left middle>
       <Media object src={leader.image} alt={leader.designation} height="110"
                           width="120"/>
                </Media>
                <Media body className="ml-5">
                  <h5 className="font-weight-bold font2 text-muted">
                    <span className="mr-1">{leader.title}</span>
                    {leader.name}
                  </h5>
                  <p className=" font text-muted">{leader.designation}<br/>
                  {/* <em>Tel:{leader.tel}</em> */}
                  </p>
                </Media>
              </Media>
        </div>
      );
    })



    
    return(
        <div>
           {leaders}
        </div>
    )
}
  
export default TeamTemplates;