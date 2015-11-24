import { ActionTypes } from "./actions.ts";
import { dispatcher, IDispatcherData } from "./dispatcher.ts";


class Store {
	payloads: IPayloads;
	defaultUserId = 2;
	
	private listeners: Function[] = [];
	
	constructor() {
		this.payloads = { users: null, currentUser: null };
		
		dispatcher.register(this.update.bind(this));
	}
	
	addListener(handler: Function) {
		this.listeners.push(handler);
	}

	removeListener(handler: Function) {
		var index = this.listeners.indexOf(handler);

		this.listeners.splice(index, 1);
	}
	
	private selectUser(id: number, pushState=true) {
		var users = this.payloads.users;
		
		if (users) {
			for (var i = 0, lim = users.length; i < lim; i++) {
				var user = users[i];
				
				if (user.id != id) continue;
				
				this.payloads.currentUser = user;
			
				if (pushState) {
					history.pushState(null, null, "?id=" + user.id);
				}
				
				break;
			}
		}
	}
	
	private selectInitialUser() {
		var match = location.search.match(/id=(\d+)/);
		var id = match ? +match[1] : this.defaultUserId;
		
		this.selectUser(id, false);
	}
	
	update(message: IDispatcherData) {
		switch (message.type) {
			case ActionTypes.LOAD_USERS:
				this.payloads.users = message.data;
				this.selectInitialUser();
				break;
			
			case ActionTypes.SELECT_USER:
				this.selectUser(message.data);
				break;
			
			case ActionTypes.NEXT_USER:
				this.selectUser(this.payloads.currentUser.id + 1);
				break;
			
			case ActionTypes.PREVIOUS_USER:
				this.selectUser(this.payloads.currentUser.id - 1);
				break;
			
			case ActionTypes.SELECT_USER_BY_HISTORY:
				this.selectUser(message.data, false);
				break;
		
			default: return;
		}
		
		this.listeners.forEach(handler => handler(this.payloads));
	}
}


export interface IUser {
	first_name: string;
	last_name: string;
	age: number;
	location: string;
	id: number;
};

export interface IPayloads {
	users: IUser[];
	currentUser: IUser;
};

export var store = new Store;