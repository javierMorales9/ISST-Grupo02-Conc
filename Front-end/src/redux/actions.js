
export function loginAction(login, id_client){
	return {type:"LOGIN", payload:{id_client,login}};
}

export function savetheclient(entire_client){
	
	return {type:"SAVE", entire_client};
}

export function savetheservicesavailabe(all_services){
	return {type:"SERVSAVE", all_services};
}