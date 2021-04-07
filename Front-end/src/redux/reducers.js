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
			//console.log({action.payload.entire_client})
			console.log(action.entire_client)
			return action.entire_client;
		default:
			return state;
	}
}


const GlobalState = (combineReducers({
	login:loginReducer,
	id_cliente: idClientReducer,
	entire_client: entireClientReducer
}));

export default GlobalState;
