import React from 'react';
import color from '../media/color.jpeg';
import obras from '../media/obras.png';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../public/main_styles.css';

export default class RoomService extends React.Component {
    render() {
        return (
          <div>

            <NavBar/>

            <h1 className='subtitulo'>RoomService</h1>
            <hr style={{color:'gray', width: '70%', border:'2px solid'}}/>

            <Footer/>

          </div>
        );
    }
}