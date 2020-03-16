import React, { Component } from "react";
import { useHistory, withRouter,Link } from "react-router-dom";
import './UserHome.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Nav  from './nav.js';
import {Container,Row,Col} from 'react-bootstrap';

class closedComplaints extends Component{
  constructor(props) {
    super(props);
    this.state={
      complaints :[]
    }
}
indexN(cell, row, enumObject, index) {
    return (<div>{index+1}</div>) 
}
componentDidMount(){
  var body = {
    id: sessionStorage.getItem("Identity")
  }
  console.log("Body"+body.id);

      const url = "http://localhost:9000/userClosedComplaints";
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
            console.log("Response:"+res)
            this.setState({
                complaints : res
            })          
          })
        }
        
        })
        console.log(body);
        console.log("Body"+body.id);
           
  } 
  expandComponent(row) {
    var route= "/viewandclose/"+row.Cid;
    var closedimg="/images/"+row.ClosedImage;
    return (
      <div>
        <Container border="5px">
          <Row>
            <Col>Cid : {row.Cid}</Col>
            <Col>Closed Time : {row.ClosedAt}</Col>
          </Row>
         <Row>
            <Col>Image : <img src={closedimg}/></Col>
        </Row>
        <Row>
    <Col>Description:{row.ClosedDescription}</Col>
    </Row>
</Container>
      </div>
    );
  }

  isExpandableRow(row) {    
      return true;      
  }


    render() {
        
      return (
        <div>
            <div className="wrapper">
            <Nav/>
            <br></br><br/>
            <br/>
                    <div className="main_content">
                        <div className="header"><h2><u>Closed Complaints</u></h2></div>
          <BootstrapTable data={ this.state.complaints }  expandComponent={ this.expandComponent } expandableRow={ this.isExpandableRow } striped hover condensed>
          
          <TableHeaderColumn width='70' dataField="any" dataFormat={this.indexN}>S.No</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Cid' isKey hidden>CID</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Category'>CATEGORY</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Location'>LOCATION</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Status'>STATUS</TableHeaderColumn>
          
      </BootstrapTable>
            
          </div></div></div>
        );
    }
}
export default withRouter(closedComplaints);