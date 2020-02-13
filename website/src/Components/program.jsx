import React, { Component } from 'react';
import {
    Card,  CardImg, CardTitle, CardText, CardBody
  } from 'reactstrap';
  import {Link} from 'react-router-dom';
  import secondary from '../images/secondary.jpg';
  import diploma from '../images/diploma.jpg';
  // import shortCourse from '../images/shortcourse.jpg';
class Program extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section className="program">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col">
                            <em><h3 className="p-5 text-center text-white"><span>WHICH PROGRAM DO YOU WHAT TO ATTEND </span><i className="fa fa-question fa-lg text-white"/></h3></em>
                        </div>
                    </div>
                    <div className="row justify-content-center" data-aos="fade-up"
     data-aos-duration="1500"><div className="col-md-3 col-sm-12 ">
                {/* <CardDeck> */}
      <Card >
      <CardBody>
        <CardTitle><h6 className="text-center ">ADVENCED LEVEL(A2)</h6></CardTitle>
        <hr className="bg-warning"/>
        <Link to="/advenced-level">
        <CardText className="text-dark">Sed ut perspiciatis unde omnis iste natus error.</CardText>
        </Link></CardBody>
        <CardImg top  src={secondary} alt="secondary" className="program-image"/>
      </Card>
      </div>
 <div className="col-md-3 col-sm-12 ">
      <Card>
      <CardBody>
          <CardTitle><h6 className="text-center ">ADVENCED DIPLOMA & DIPLOMA</h6></CardTitle>
          <hr className="bg-warning"/>
          <Link to="/advenced-diploma">
          <CardText className="text-dark">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</CardText>
          </Link>
        </CardBody>
        <CardImg top  src={diploma} alt="diploma" />
        
      </Card>
      </div>
      <div className="col-md-3 col-sm-12 ">
      <Card>
      <CardBody>
        <CardTitle><h6 className="text-center ">SHORT COURSES</h6></CardTitle>
        <hr className="bg-warning"/>
        <Link to="/short-course">
          <CardText className="text-dark">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium .</CardText>
          </Link>
        </CardBody>
        <CardImg top  src="#" alt="short-courses" />
       
      </Card>
      </div></div>
    {/* </CardDeck> */}
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Program;