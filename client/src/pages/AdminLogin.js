import React from 'react';
import { withRouter } from "react-router-dom";
import './AdminLogin.css'
class AdminLogin extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  changeInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validationForm() {
    let returnData = {
      error : false,
      msg: ''
    }
    const {password} = this.state
    //Check password
    if(password.length < 8) {
      returnData = {
        error: true,
        msg: 'Password must be more than 8 characters'
      }
    }
    return returnData;
  }

  submitForm(e) {
    e.preventDefault();
    const validation = this.validationForm()
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    if (validation.error) {
      alert(validation.msg)
    }else if(username === 'admin' && password === 'admin786') {
        alert("login successfull");
        this.props.history.push("/admin");
        
       
      

    }else {
      alert("Wrong password or username");
    }
  }
    
  render() {
    return (
      <div className="container align-items-center shadow-lg p-3 mb-5 mt-5  bg-black rounded" style={{ paddingTop: "5%" }}>
        <form
          onSubmit={e => {
            this.submitForm(e);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              onChange={e => this.changeInputValue(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={e => this.changeInputValue(e)}
              
            />
          </div>
          <button value="submit" className="btn1 float-right" onClick={this.postDetails}>
            Submit
          </button>
        </form>
        <img className='img-fluid'src='https://schoolknot.com/website/img/bg-img/default-2.png'/>
      </div>
    
    );
  }
}

export default AdminLogin;