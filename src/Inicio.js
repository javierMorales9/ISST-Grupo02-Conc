import React from 'react';
import {footer, titulo, descripcion_titulo, foto_inicio, subtitulo, cuadrados_servicios, titulo_servicio, saber_mas, foto_servicio, 
descripcion_servicio, links_navegacion, link_hoteles, footer_upper_text, footer_lower_text} from './estilos_inicio';
//import footer from './footer';
import color from './media/color.jpeg'

export default class Game extends React.Component {
render() {
	return (
		<div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>

			<div style={{backgroundImage: 'url(' + color + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position:'absolute', height:'100%', width: '100%', left:'0', top:'0'}}>

			    <div style={{listStyleType:'none', padding:'0em', margin:'auto', display:'flex', alignItems:'center', justifyContent: 'center'}}>
			    	<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20%', margin:'1em 1em'}}>
			    		<a style={link_hoteles}>Hotels</a>
			    	</div>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60%', margin:'0 2.5em 0'}}>
						<a style={links_navegacion}>Reserva</a>
						<a style={links_navegacion}>Servicio</a>
						<a style={links_navegacion}>Transportes</a>
						<a style={links_navegacion}>Ocio</a>
					</div>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20%', margin:'1em 1em'}}>
						<a style={links_navegacion}>Link al perfil</a>
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
			
			<div style={{marginTop: '3.5em', marginBottom: '3em', fontSize: '200px', padding: '20px', display: 'grid', alignItems:'center'}}>
				<span style={subtitulo}>Servicios</span>
			</div>

			<footer style={footer}>

					<svg style={{padding:'20'}} width="55" height="55" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M2.7206e-07 1.838C2.7206e-07 1.35053 0.193646 0.883032 0.538338 0.53834C0.88303 0.193648 1.35053 2.45031e-06 1.838 2.45031e-06H20.16C20.4016 -0.000392101 20.6409 0.0468654 20.8641 0.139069C21.0874 0.231273 21.2903 0.366612 21.4612 0.537339C21.6322 0.708065 21.7677 0.910826 21.8602 1.13401C21.9526 1.3572 22.0001 1.59643 22 1.838V20.16C22.0003 20.4016 21.9529 20.6409 21.8606 20.8642C21.7683 21.0875 21.6328 21.2904 21.462 21.4613C21.2912 21.6322 21.0884 21.7678 20.8651 21.8602C20.6419 21.9526 20.4026 22.0001 20.161 22H1.838C1.59655 22 1.35746 21.9524 1.1344 21.86C0.911335 21.7676 0.708671 21.6321 0.537984 21.4613C0.367297 21.2905 0.231932 21.0878 0.139623 20.8647C0.0473133 20.6416 -0.000131096 20.4025 2.7206e-07 20.161V1.838ZM8.708 8.388H11.687V9.884C12.117 9.024 13.217 8.25 14.87 8.25C18.039 8.25 18.79 9.963 18.79 13.106V18.928H15.583V13.822C15.583 12.032 15.153 11.022 14.061 11.022C12.546 11.022 11.916 12.111 11.916 13.822V18.928H8.708V8.388ZM3.208 18.791H6.416V8.25H3.208V18.79V18.791ZM6.875 4.812C6.88105 5.08667 6.83217 5.35979 6.73124 5.61532C6.63031 5.87084 6.47935 6.10364 6.28723 6.30003C6.09511 6.49643 5.8657 6.65248 5.61246 6.75901C5.35921 6.86554 5.08724 6.92042 4.8125 6.92042C4.53776 6.92042 4.26579 6.86554 4.01255 6.75901C3.7593 6.65248 3.52989 6.49643 3.33777 6.30003C3.14565 6.10364 2.99469 5.87084 2.89376 5.61532C2.79283 5.35979 2.74395 5.08667 2.75 4.812C2.76187 4.27286 2.98439 3.75979 3.36989 3.38269C3.75539 3.00558 4.27322 2.79442 4.8125 2.79442C5.35178 2.79442 5.86961 3.00558 6.25512 3.38269C6.64062 3.75979 6.86313 4.27286 6.875 4.812V4.812Z" fill="white"/>
					</svg>


					<svg style={{padding:'20'}} width="55" height="53.3" viewBox="0 0 65 63" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.324 0.680367C5.92063 0.680367 0.764648 5.73925 0.764648 12.022V51.4529C0.764648 57.7357 5.92063 62.7946 12.324 62.7946H34.1053V38.5118H27.561V29.7692H34.1053V22.3C34.1053 16.4318 37.972 11.0437 46.8793 11.0437C50.4858 11.0437 53.1526 11.3834 53.1526 11.3834L52.9429 19.5476C52.9429 19.5476 50.223 19.5224 47.2552 19.5224C44.0431 19.5224 43.528 20.9745 43.528 23.3851V29.7693H53.1981L52.7767 38.5119H43.528V62.7946H52.5116C58.9149 62.7946 64.0709 57.7358 64.0709 51.453V12.0221C64.0709 5.73932 58.9149 0.680429 52.5116 0.680429H12.3239L12.324 0.680367Z" fill="white"/>
					</svg>

					<div style = {{display: 'grid', alignItems: 'center', justifyContent: 'center', padding: '0'}}>
						<a style={footer_upper_text}> Hotels </a>
						<a style={footer_lower_text}>Concierge</a>
					</div>

					<svg style={{padding:'20'}} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M25.9487 0.698631C19.1313 0.698631 18.274 0.730452 15.5955 0.851371C12.9169 0.978654 11.0924 1.40505 9.49408 2.0351C7.81751 2.67413 6.2989 3.6765 5.04443 4.97216C3.76661 6.24403 2.77754 7.7827 2.14603 9.48117C1.52427 11.0977 1.10035 12.9496 0.977878 15.6544C0.85855 18.3751 0.827148 19.2406 0.827148 26.1584C0.827148 33.0699 0.85855 33.9354 0.977878 36.6497C1.10349 39.3609 1.52427 41.2097 2.14603 42.8293C2.78977 44.5031 3.64704 45.9223 5.04443 47.3383C6.43867 48.7544 7.8392 49.6263 9.49094 50.2754C11.0924 50.9055 12.9137 51.335 15.5892 51.4591C18.2709 51.5801 19.125 51.6119 25.9487 51.6119C32.7723 51.6119 33.6233 51.5801 36.305 51.4591C38.9773 51.3318 40.8081 50.9055 42.4064 50.2754C44.0819 49.6361 45.5994 48.6337 46.8529 47.3383C48.2503 45.9223 49.1076 44.5031 49.7513 42.8293C50.3699 41.2097 50.7939 39.3609 50.9195 36.6497C51.0388 33.9354 51.0702 33.0699 51.0702 26.1553C51.0702 19.2406 51.0388 18.3751 50.9195 15.6576C50.7939 12.9496 50.3699 11.0977 49.7513 9.48117C49.1199 7.78265 48.1308 6.24396 46.8529 4.97216C45.5988 3.67602 44.0801 2.67357 42.4033 2.0351C40.8018 1.40505 38.9742 0.975472 36.3019 0.851371C33.6202 0.730452 32.7692 0.698631 25.9424 0.698631H25.9518H25.9487ZM23.6972 5.28719H25.9518C32.6593 5.28719 33.4537 5.30946 36.1009 5.43356C38.5503 5.54494 39.8817 5.96179 40.7672 6.30863C41.9385 6.77004 42.777 7.32372 43.6562 8.2147C44.5355 9.10568 45.0787 9.95211 45.534 11.1422C45.8795 12.0364 46.2877 13.3856 46.3976 15.8676C46.5201 18.5501 46.5452 19.3552 46.5452 26.1489C46.5452 32.9426 46.5201 33.7509 46.3976 36.4334C46.2877 38.9154 45.8763 40.2614 45.534 41.1587C45.1313 42.2641 44.4884 43.2635 43.6531 44.0831C42.7738 44.9741 41.9385 45.5246 40.7641 45.986C39.8848 46.336 38.5534 46.7497 36.1009 46.8642C33.4537 46.9851 32.6593 47.0138 25.9518 47.0138C19.2444 47.0138 18.4468 46.9851 15.7996 46.8642C13.3502 46.7497 12.0219 46.336 11.1364 45.986C10.0452 45.5784 9.05799 44.9282 8.24742 44.0831C7.41135 43.2622 6.76752 42.2618 6.36331 41.1556C6.02102 40.2614 5.60966 38.9122 5.49975 36.4302C5.38043 33.7477 5.3553 32.9426 5.3553 26.1425C5.3553 19.3456 5.38043 18.5437 5.49975 15.8612C5.6128 13.3792 6.02102 12.03 6.36645 11.1327C6.82177 9.94575 7.36817 9.09613 8.24742 8.20515C9.12667 7.31417 9.96196 6.76367 11.1364 6.30227C12.0219 5.95224 13.3502 5.53857 15.7996 5.42402C18.117 5.31583 19.0151 5.28401 23.6972 5.28082V5.28719ZM39.3604 9.51299C38.9646 9.51299 38.5725 9.592 38.2068 9.74552C37.8411 9.89904 37.5087 10.1241 37.2288 10.4077C36.9489 10.6914 36.7268 11.0281 36.5753 11.3988C36.4238 11.7694 36.3458 12.1666 36.3458 12.5678C36.3458 12.9689 36.4238 13.3662 36.5753 13.7368C36.7268 14.1074 36.9489 14.4442 37.2288 14.7278C37.5087 15.0115 37.8411 15.2365 38.2068 15.39C38.5725 15.5436 38.9646 15.6226 39.3604 15.6226C40.16 15.6226 40.9267 15.3007 41.4921 14.7278C42.0574 14.155 42.375 13.378 42.375 12.5678C42.375 11.7576 42.0574 10.9806 41.4921 10.4077C40.9267 9.83483 40.16 9.51299 39.3604 9.51299ZM25.9518 13.0833C24.2406 13.0562 22.5412 13.3744 20.9526 14.0193C19.3639 14.6641 17.9177 15.6228 16.6981 16.8395C15.4786 18.0562 14.5101 19.5065 13.849 21.1061C13.1879 22.7057 12.8475 24.4226 12.8475 26.1568C12.8475 27.8911 13.1879 29.608 13.849 31.2076C14.5101 32.8072 15.4786 34.2575 16.6981 35.4742C17.9177 36.6909 19.3639 37.6496 20.9526 38.2944C22.5412 38.9393 24.2406 39.2575 25.9518 39.2304C29.3386 39.1769 32.5689 37.7759 34.9453 35.33C37.3216 32.884 38.6536 29.5893 38.6536 26.1568C38.6536 22.7244 37.3216 19.4297 34.9453 16.9837C32.5689 14.5378 29.3386 13.1368 25.9518 13.0833ZM25.9518 17.6687C28.173 17.6687 30.3032 18.5628 31.8738 20.1543C33.4444 21.7459 34.3267 23.9045 34.3267 26.1553C34.3267 28.406 33.4444 30.5646 31.8738 32.1562C30.3032 33.7477 28.173 34.6419 25.9518 34.6419C23.7307 34.6419 21.6005 33.7477 20.0299 32.1562C18.4593 30.5646 17.5769 28.406 17.5769 26.1553C17.5769 23.9045 18.4593 21.7459 20.0299 20.1543C21.6005 18.5628 23.7307 17.6687 25.9518 17.6687Z" fill="#FFFDFD"/>
					</svg>

					<svg style={{padding:'20'}}width="55" height="47" viewBox="0 0 55 47" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M54.499 6.1629C52.9879 8.49942 51.1341 10.4912 48.9375 12.1382C48.9592 12.5799 48.9701 13.0792 48.9701 13.636C48.9701 16.7297 48.5362 19.8271 47.6684 22.9283C46.8007 26.0295 45.4752 28.9979 43.6919 31.8334C41.9087 34.669 39.7845 37.1811 37.3194 39.3697C34.8543 41.5583 31.8912 43.3033 28.4299 44.6048C24.9687 45.9064 21.2592 46.5571 17.3014 46.5571C11.1247 46.5571 5.43645 44.8236 0.236816 41.3567C1.15969 41.4634 2.0448 41.5168 2.89216 41.5168C8.05235 41.5168 12.6612 39.8645 16.7188 36.5599C14.3128 36.5141 12.1581 35.7441 10.2546 34.2501C8.35113 32.7561 7.04119 30.847 6.32481 28.5229C7.0329 28.6631 7.73177 28.7332 8.42142 28.7332C9.41411 28.7332 10.3909 28.5986 11.3518 28.3294C8.78418 27.7948 6.65411 26.4654 4.96161 24.3411C3.26917 22.2168 2.42295 19.765 2.42295 16.9856V16.8424C3.99897 17.7495 5.68004 18.2321 7.46616 18.29C5.94512 17.2358 4.73916 15.8612 3.84829 14.1661C2.95736 12.4709 2.5119 10.6365 2.5119 8.66277C2.5119 6.58114 3.01366 4.64275 4.0172 2.8476C6.80944 6.4097 10.1928 9.25665 14.1674 11.3884C18.142 13.5203 22.4059 14.7042 26.9593 14.9403C26.7651 14.0989 26.6678 13.2209 26.6674 12.3062C26.6674 9.11254 27.7546 6.38561 29.9289 4.12543C32.1033 1.86525 34.7265 0.735161 37.7986 0.735161C41.015 0.735161 43.7242 1.95266 45.9263 4.38767C48.4422 3.86961 50.7979 2.93257 52.9934 1.57654C52.1475 4.34388 50.5176 6.47869 48.1037 7.98098C50.3223 7.7069 52.4541 7.10088 54.4989 6.1629H54.499Z" fill="white"/>
					</svg>


			</footer>



		</div>

);
}
}

