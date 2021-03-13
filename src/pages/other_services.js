import React from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';

export default class OtherService extends React.Component {
    render() {
        return (
          <div>
              <NavBar/>
              <h1 style={{textAlign:'center', marginBottom:'750px'}}>Other service</h1>
              <Footer/>
          </div>
        );
    }
}