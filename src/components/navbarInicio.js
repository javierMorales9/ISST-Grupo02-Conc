import React from 'react';
import color from '../media/color.jpeg'
import {titulo, descripcion_titulo, links_titulo, link_hoteles_titulo} from '../public/estilos_inicio';

export default class NavBar extends React.Component {
	render() {
	   return(
            <div style={{backgroundImage: 'url(' + color + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:'600px', width: '100%', left:'0', top:'0'}}>
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <div style={{flex:1, display: 'flex', padding:'10px 10px'}}>
                        <svg width="85" height="89" viewBox="0 0 85 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M84.6711 24.2677L70.5047 6.46798C70.2356 6.13127 69.8375 5.93555 69.4166 5.93555H15.584C15.1633 5.93555 14.7652 6.12988 14.4959 6.46798L0.32951 24.2677C-0.0232682 24.7098 -0.0998004 25.3253 0.133946 25.8459C0.367693 26.3665 0.867725 26.7002 1.4174 26.7002H83.5829C84.1326 26.7002 84.6326 26.3665 84.8663 25.8459C85.0989 25.3269 85.0239 24.7112 84.6711 24.2677ZM4.44216 23.7337L16.247 8.90067H68.7522L80.5571 23.7337H4.44216Z" fill="#51351B"/>
                            <path d="M43.8105 6.84903C43.5908 6.29435 43.0739 5.93384 42.5015 5.93384H15.5852C15.0781 5.93384 14.6106 6.21717 14.3571 6.67851C14.1036 7.13984 14.1049 7.70495 14.3614 8.16472L24.2779 25.9645C24.4988 26.3605 24.8828 26.629 25.3191 26.6883C25.38 26.6958 25.4409 26.7001 25.5004 26.7001C25.8744 26.7001 26.2357 26.5459 26.5034 26.2655L43.5032 8.46578C43.9083 8.04165 44.0301 7.40371 43.8105 6.84903ZM25.7979 22.808L18.0502 8.90052H39.0803L25.7979 22.808Z" fill="#51351B"/>
                            <path d="M84.851 24.5584C84.6129 24.0525 84.1201 23.7322 83.5817 23.7322H1.41619C0.877808 23.7322 0.386242 24.0525 0.146851 24.5584C-0.0912121 25.0642 -0.0359296 25.6679 0.291283 26.1158L41.3741 82.4818C41.6419 82.8496 42.0584 83.0662 42.5003 83.0662C42.9423 83.0662 43.3588 82.8496 43.6238 82.4818L84.7066 26.1158C85.0338 25.6679 85.0889 25.0642 84.851 24.5584ZM42.5003 79.1384L4.28058 26.7004H80.7201L42.5003 79.1384Z" fill="#51351B"/>
                            <path d="M43.852 81.135L26.8522 24.769C26.6653 24.152 26.1198 23.7322 25.5007 23.7322H1.41765C0.879273 23.7322 0.387707 24.0525 0.148316 24.5584C-0.0897472 25.0642 -0.0344648 25.6679 0.292748 26.1158L41.3756 82.4818C41.6503 82.86 42.0712 83.0662 42.5018 83.0662C42.7228 83.0662 42.9466 83.0128 43.1534 82.8971C43.7642 82.5665 44.0587 81.8218 43.852 81.135ZM4.28072 26.7004H24.4623L38.7081 73.9351L4.28072 26.7004Z" fill="#51351B"/>
                            <path d="M70.6446 6.67851C70.3924 6.21717 69.9236 5.93384 69.4164 5.93384H42.5C41.9277 5.93384 41.4106 6.29435 41.191 6.84903C40.9713 7.40371 41.0932 8.04165 41.4984 8.46578L58.4982 26.2655C58.7645 26.5459 59.1257 26.7001 59.4998 26.7001C59.5607 26.7001 59.6216 26.6956 59.6825 26.6883C60.1175 26.629 60.5028 26.362 60.7238 25.9645L70.6402 8.16472C70.8952 7.70495 70.8967 7.13984 70.6446 6.67851ZM59.2023 22.808L45.9197 8.90052H66.9498L59.2023 22.808Z" fill="#51351B"/>
                            <path d="M84.8539 24.5613C84.6158 24.0555 84.1229 23.7351 83.5845 23.7351H59.5015C58.8824 23.7351 58.3356 24.1549 58.15 24.772L41.1502 81.1379C40.9433 81.8231 41.238 82.5678 41.8486 82.9002C42.0555 83.0128 42.2792 83.0663 42.5002 83.0663C42.9295 83.0663 43.3502 82.8602 43.6264 82.4849L84.7093 26.119C85.0367 25.6707 85.0918 25.067 84.8539 24.5613ZM46.2928 73.9348L60.5386 26.7001H80.7201L46.2928 73.9348Z" fill="#51351B"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="85" height="89" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <a style={link_hoteles_titulo} href='/'>Hotel</a>
                    </div>
                    <div style={{flex:'2', display: 'flex', justifyContent: 'center'}}>
                        <a style={links_titulo} href='/booking'>Reserva</a>
                        <a style={links_titulo} href='/room_service'>Servicio</a>
                        <a style={links_titulo} href='/transport'>Transportes</a>
                        <a style={links_titulo} href='/leisure'>Ocio</a>
                    </div>
                    <div style={{flex:'1', display: 'flex', justifyContent: 'flex-end'}}>
                        <a style={links_titulo} href='/profile'>Link al perfil</a>
                    </div>
                </div>
                <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                    <h1 style={titulo}>CONCIERGE</h1>
                    <div style={{margin: '0 25% 0'}}>
                        <span style={descripcion_titulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis nulla turpis urna, gravida. Mattis mauris sagittis
                        </span>
                    </div>
                </div>     
            </div>
	   );
	}
}

