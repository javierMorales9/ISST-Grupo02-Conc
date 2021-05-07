import { combineReducers } from 'redux';


function loginReducer (state = [], action){
	switch(action.type){
		case 'LOGIN':
			return action.payload.login;

		default:
			return state;
	}
}

function idClientReducer (state = [], action){
	switch(action.type){
		case 'LOGIN':
			return action.payload.id_client;
		default:
			return state;
	}
}

function entireClientReducer (state = [], action){
	switch(action.type){
		case 'SAVE':
			return action.entire_client;
		default:
			return state;
	}
}
function allServicesReducer (state = [], action){
	switch(action.type){
		case 'SERVSAVE':
			return action.all_services;
		default:
			return state;
	}
}

const GlobalState = (combineReducers({
	login:loginReducer,
	id_cliente: idClientReducer,
	entire_client: entireClientReducer,
	all_services: allServicesReducer
}));

export default GlobalState;
