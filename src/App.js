import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Inicio from './pages/Inicio'


function App(props) {
  return (
    <div className="App">
        <Inicio/>
    </div>
  );
}

function mapStateToProps(state) {
return {
...state
};
}
export default connect(mapStateToProps)(App);
