/// <reference path="./types.d.ts" />

import { ActionTypes } from "./actions.ts";


export interface IDispatcherData {
	type: ActionTypes;
	data: any;
};

export var dispatcher = new Flux.Dispatcher<IDispatcherData>();