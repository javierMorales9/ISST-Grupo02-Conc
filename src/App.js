import React, { Component } from 'react';
import { connect } from 'react-redux';
import Inicio from './pages/Inicio';
import Booking from './pages/booking';
import Leisure from './pages/leisure';
import OtherService from './pages/other_services';
import Profile from './pages/profile';
import RoomService from './pages/room_service';
import Transport from './pages/transport';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App(props) {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Inicio/>
          </Route>
          <Route path="/leisure">
            <Leisure/>
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
          <Route path="/other_services">
            <OtherService/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/room_service">
            <RoomService/>
          </Route>
          <Route path="/transport">
            <Transport/>
          </Route>
        </Switch>
    </Router>
  );
}
    
   
  

function mapStateToProps(state) {
return {
...state
};
}
export default connect(mapStateToProps)(App);