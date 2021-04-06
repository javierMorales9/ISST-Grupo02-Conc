
export function loginAction(login, id_client){
	return {type:"LOGIN", payload:{id_client,login}};
}

