import React ,{ Component } from 'react';

import { BrowserRouter as Router, 
  Switch, 
  Route,
   Link } from "react-router-dom";
   import Login from "./components/home/login";
   import SignUp from "./components/home/signup";
   import complaint from "./components/User/complaint";
   import Home from "./components/home/home";
   import about from "./components/home/about"
   import UserHome from "./components/User/UserHome";
   import wardlogin from "./components/home/wardlogin.js"; 
   import adminlogin from "./components/home/adminlogin.js"; 
   import wardhome from "./components/ward/wardhome";
   import wardlogout from "./components/ward/logout.js"
   import wardLeaderboard from "./components/ward/leaderboard.js"
   import EditProfile from "./components/User/Profile.js";
   //import Leaflet from "./components/User/leaflet.js";
   import ViewUsers from "./components/ward/viewusers";
   import ViewComplaints from "./components/ward/viewComplaints.js"
   import PendingComplaints from "./components/ward/pendingComplaints.js"
   import ClosedComplaints from "./components/ward/closedComplaints.js"
   import UserLogout from "./components/User/logout.js"
   import ViewUserComplaints from "./components/User/viewComplaints.js"
   import PendingUserComplaints from "./components/User/pendingComplaints.js"
   import ClosedUserComplaints from "./components/User/closedComplaints.js"
   import UserLeaderboard from "./components/User/leaderboard.js"
   import viewAndClose from "./components/ward/viewAndClose.js"
   import view from "./components/ward/sample.js"
   import RecentlyCreated from "./components/ward/recentlyCreated.js"
   import RecentlyClosed from "./components/ward/recentlyClosed.js"
   //import Map from "./components/User/sample.js"
   import Authority from "./components/Authority/AuthorityHome"
   import Pending from "./components/Authority/Pending"
   import wardLogin from "./components/home/wardlogin"

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
  return (
    <div>
            <Router>
                <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <Route exact path='/' component={ Home } />
            <Route exact path='/Home' component={ Home } />
            <Route path="/Login" component={ Login } />
            <Route path="/sign-up" component={ SignUp } />
            <Route path="/user-home" component={ UserHome }/>
            <Route path="/complaint" component={ complaint }/>
            <Route path="/wardlogin" component= { wardlogin}/>
            <Route path="/about" component= { about }/>
            <Route path="/wardhome" component= { wardhome }/>
            <Route path="/viewusers" component= { ViewUsers }/>
            <Route path="/profile" component= { EditProfile }/>
            <Route path="/viewcomplaints" component = {ViewComplaints}/>
            <Route path="/pendingcomplaints" component = {PendingComplaints}/>
            <Route path="/closedcomplaints" component = {ClosedComplaints}/>
            <Route path="/userLogout" component = {UserLogout}/>
            <Route path="/viewusercomplaints" component = {ViewUserComplaints}/>
            <Route path="/pendingusercomplaints" component = {PendingUserComplaints}/>
            <Route path="/closedusercomplaints" component = {ClosedUserComplaints}/>
            <Route path="/wardleaderboard" component = {wardLeaderboard}/>
            <Route path="/userleaderboard" component = {UserLeaderboard}/>
            <Route path="/viewandclose/:Cid" component = {viewAndClose}/>
            <Route path="/view" component = {view}/>
            <Route path="/map" component = {Map}/>
            <Route path="/wardlogout" component = {wardlogout}/>
            <Route path="/recentlycreated" component = {RecentlyCreated}/>
            <Route path="/recentlyclosed" component = {RecentlyClosed}/>
            <Route path="/authority" component = {Authority}/>
            <Route path="/pending" component = {Pending}/>
            <Route path="/wardlogin" component = {wardLogin}/>
            <Route path="/adminlogin" component = {adminlogin}/>
          
                </Switch>
            </Router>
            </div>
        
  );
}}

export default App;
