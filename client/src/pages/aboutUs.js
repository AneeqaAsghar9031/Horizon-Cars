import React from "react";
import { Row, Col, Form, Input } from "antd";


import AOS from 'aos';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import DefaultLayout from "../components/DefaultLayout";
// ..
AOS.init()
function Register() {

  return (
    <DefaultLayout>
    <div className="login">
   
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={8}>
            <div>
        <iframe
        src="https://media.gettyimages.com/videos/cute-active-senior-couple-using-car-sharing-service-the-very-first-video-id1295907285"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        data-aos='fade-right'
        data-aos-duration='1500'
      />{" "}
      <iframe
        src="https://media.gettyimages.com/videos/woman-sitting-on-back-seat-in-the-car-and-holding-scarf-through-the-video-id904755838"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        data-aos='fade-left'
        data-aos-duration='1500'
      />{" "}
      <iframe
        src="https://media.gettyimages.com/videos/customer-getting-new-car-keys-video-id975813450"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        
      />{" "}
      </div>
         </Col>
         <Col lg={14} className="p-5">
            <div>
            <img 
           className='w-100'
           data-aos='zoom-in-up'
           data-aos-duration='1500'
           height="400px"
           width="900px"
          src="https://cdn.thisiswhyimbroke.com/thumb/charge-electric-ford-mustang_400x333.jpg" />
                <h1 style={{color:"white"}}>About Us</h1>
                <h4 style={{color:"white"}}>We reimagine the way the world moves for the better</h4>
                <p style={{color:"white"}}>Movement is what we power. It is our lifeblood. It runs through our veins. It is what gets us out of bed each morning. It pushes us to constantly reimagine how we can move better. For you. For all the places you want to go. For all the things you want to get. For all the ways you want to earn. Across the entire world. In real time. At the incredible speed of now.</p>
                
                  
            </div>
         </Col>
         </Row>
    </div>
    </DefaultLayout>
  );
}

export default Register;
