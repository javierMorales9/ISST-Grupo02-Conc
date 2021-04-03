import React from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import TarjetaOcio from '../components/tarjeta_ocio.js';
import '../public/leisure.css';

export default class Leisure extends React.Component {
    render() {
        return (
        <div>
            <h1 className='subtitulo'>Ocio</h1>
            <hr style={{color:'gray', width: '70%', border:'2px solid'}}/>

            <div className='container'>
                <div className='texto'>
                    <span className='descripcion_titulo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, egestas mauris eu aenean elementum.</span>
                    <span className='descripcion_titulo'>Enim consectetur proin sed ipsum ullamcorper ipsum posuere. Viverra quam sed cursus augue sed enim.</span>
                    <span className='descripcion_titulo'> Elit a nisl quam malesuada vulputate ipsum.</span>    
                </div>
                <TarjetaOcio name={'GYM'} imagen={'gym.png'}/>
                <TarjetaOcio name={'SPA'} imagen={'spa.png'}/>
                <TarjetaOcio name={'CINE'} imagen={'cine.png'}/>
                <TarjetaOcio name={'TEATRO'} imagen={'teatro.png'}/>
            </div>

            <Footer/>
          </div>
        );
    }
}