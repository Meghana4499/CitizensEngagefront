import React, { Component } from "react";
import { useHistory, withRouter,Link } from "react-router-dom";
import './home.css';
import Navigation from './Nav.js';
import img from '../images/adminlogin.jpeg';
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

class wardlogin extends Component{

    constructor(props) {
        super(props);
        //onsole.log(this.props.name)  
        this.handlelogin = this.handlelogin.bind(this);
        this.handlename = this.handlename.bind(this);
        this.handlepass = this.handlepass.bind(this);
      }
      handlename(e){
          this.setState({ name: e.target.value});
      }
      handlepass(e){
        this.setState({ pass: e.target.value});
    }

    handlelogin(event) {

        event.preventDefault();
          console.log(this.state)
           var body = {
            Name : this.state.name,
            Password : this.state.pass,
          }
          console.log(body);
          console.log(body.Name);
          console.log(body.Password);
          if(this.state.name===""){
            alert('Please enter the name')
      
          }
          else if(this.state.password===""){
            alert('Please enter the password')
          }
          
          else{
              const url = "http://localhost:9000/wardlogin";
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
                    
                    console.log(res.Name)
                    sessionStorage.setItem("UserName",res.Name);
                    console.log(res.Category)
                    sessionStorage.setItem("category",res.Category);

                    window.location.href="/wardhome";
                  })
                }
                else if(!response.ok){
                  console.log("Wrong name or password")
                  alert("Wrong name or password")
                }
                })
                {/*}.catch((error)=> {console.log("can't access" + url + "response. " +error )},
                  alert("Wrong email or password"))*/}
      
                }
            
          } 

    render() {
        return (
        <div style={image}>
            <Navigation/>
            <br></br><br/><br/>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Ward Login</h3>
                        <div className="form-group">
                            <label>Ward Name</label>
                            <input type="text" name="name" id="examplename" onChange={this.handlename} className="form-control" placeholder="Enter name"/>
                        </div>
                        <div className="form-group">
                             <label>Password</label>
                            <input type="password" name="password" id="examplePassword"   onChange={this.handlepass} className="form-control" placeholder="Enter password" />
                        </div>
                        <a type="submit" className="btn btn-primary btn-block" onClick={this.handlelogin} >Login</a>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                         </p>
                    </form>
                </div>
            </div> 
            <br/> <br/> <br/> <br/> <br/> <br/>          
        </div>
        );
    }

    
}
export default withRouter(wardlogin);