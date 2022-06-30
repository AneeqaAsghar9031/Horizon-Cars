import React from 'react'

import { Button, Col,  Row ,Carousel} from 'antd';
import {Link} from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout';
import EditUser from './EditUser';
const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    marginTop:"20px",
    marginRight:"20px",
    background: '#364d79',
  };
function UserProfile(){
    const user = JSON.parse(localStorage.getItem('user'))
    
    return(
        <DefaultLayout>
            <Row gutter={16} className="">
                <Col lg={8} md={24}>
                    <div className='align-items-left shadow-lg p-3 pt-8 mb-7 mt-5 ml-5 rounded' style={{backgroundColor: "lightGrey"}}>
             <img className='rounded-circle' style={{width:"150px",height:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYT5vWrJRxhNRIOnkpLlz_x4gUJTtnplXCxA&usqp=CAU"/>
             <b><h1>MY PROFILE</h1></b>
             <hr/>
             <h6 style={{color:'orangered'}}> Name: {user.username}</h6>
             
             <h6 style={{color:'orangered'}}>Password: {user.password}</h6>
            
             <hr/>
            
             <h5 className='userbooking'><Link to='/UserBookings'>My  Bookings</Link></h5>
             <button className='btn1' onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>Logout</button>
             </div>
                </Col>
                <Col lg={16} md={24}>
                
                <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img className='profileimg' src="https://images.unsplash.com/photo-1597220542065-dbd32fb169f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='profileimg' src="https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='profileimg' src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80"/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='profileimg'  src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80"/></h3>
    </div>
  </Carousel>

        
    
            
                </Col>
            </Row>
            </DefaultLayout>
        
    )
}
export default UserProfile