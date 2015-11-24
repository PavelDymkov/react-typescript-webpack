/// <reference path="./types.d.ts" />

import { dispatcher } from "./dispatcher.ts";


function dispatch(type: ActionTypes, data?: any) {
	dispatcher.dispatch({
		type: type, data: data
	});
}


export enum ActionTypes {
	LOAD_USERS,
	NEXT_USER,
	PREVIOUS_USER,
	SELECT_USER,
	SELECT_USER_BY_HISTORY
};

export function loadUsers(url: string) {
	fetch(url)
		.then(response => response.json())
		.then(data => dispatch(ActionTypes.LOAD_USERS, data));
};

export function nextUser() {
	dispatch(ActionTypes.NEXT_USER);
};

export function previousUser() {
	dispatch(ActionTypes.PREVIOUS_USER);
};

export function selectUser(id: number) {
	dispatch(ActionTypes.SELECT_USER, id);
};

export function selectUserByHistory(id: number) {
	dispatch(ActionTypes.SELECT_USER_BY_HISTORY, id);
};