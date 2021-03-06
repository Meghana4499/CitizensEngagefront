import React, { Component } from "react";
import { useHistory, withRouter,Link } from "react-router-dom";
import './home.css';
import Navigation  from './Nav.js';
import img from '../images/userlogin.jpeg';
import UserProfile from '../User/UserProfile';
import {createBrowserHistory} from 'history';

const image = {
  backgroundImage: 'url(' + img + ')',
  width: "100%",
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
}
var body;
let token="";
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


class Login extends Component{
  constructor(props) {
    super(props);
    this.state={
      email : '',
      password : '',
      errors : {
        email: '',
        password : ''
      }
    }
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {

  event.preventDefault();
    console.log(this.state)
     var body = {
      Email : this.state.email,
      Password : this.state.password,
    }
    console.log(body);
    if(this.state.email==""){
      alert('Please enter the email')

    }
    else if(this.state.password==""){
      alert('Please enter the password')
    }
    
    else{
        const url = "http://localhost:9000/login";
          let headers = new Headers();
      
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
      
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
      
          headers.append('POST','GET');
      
          fetch(url, {
            headers:headers,
            method: 'POST',
            body: JSON.stringify(body)
          })
    
          .then(response => {if(response.ok){
            // UserProfile.setEmail(this.state.email);
            response.json()
            .then(res=> {
              console.log(res.id)
              sessionStorage.setItem("Identity",res.id);
              console.log("Email:"+res.Email)
              sessionStorage.setItem("EmailId",res.Email);
              console.log(res.Name)
              sessionStorage.setItem("UserName",res.Name);
              window.location.href="/user-home";
            })
          }
          else if(!response.ok){
            console.log("Wrong email or password")
            alert("Wrong email or password")
          }
          })
          {/*}.catch((error)=> {console.log("can't access" + url + "response. " +error )},
            alert("Wrong email or password"))*/}

          }
      
    } 

  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 5;
  }

  
  handleEmailChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
    if(errors.email ==  '')
      {
         this.setState({e : true});
     }
    this.setState({errors, [name]: value});
  }

  handlePasswordChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.password = 
    value.length < 8
      ? 'Password must be 8 characters long!'
      : '';
    if(errors.password ==  '')
      {
        this.setState({p : true});
      }
    this.setState({errors, [name]: value});
  }

    render() {
      const {errors} = this.state;
        return (<div style={image}>

<Navigation/>
            <br></br><br/>
            <br/>

            <div className="auth-wrapper">
            <div className="auth-inner">
               
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" name="email" id="exampleEmail" className="form-control" placeholder="Enter email"
                    onChange = {this.handleEmailChange} />
                     <span className='error'>{errors.email}</span>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" id="examplePassword" className="form-control" placeholder="Enter password" 
                    onChange = {this.handlePasswordChange}/>
                     <span className='error'>{errors.password}</span>
                </div>

                

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                
         
             
                <p className="forgot-password text-right">
                    If not registered <a href="/sign-up">Signup?</a>
                </p>
            
        

            </form>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            </div>
        );
    }
}
export default withRouter(Login);