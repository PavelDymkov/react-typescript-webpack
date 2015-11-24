/// <reference path="../types.d.ts" />

import { store, IPayloads } from "../store.ts";
import { UserData } from "./user_data.tsx";
import { Navigation } from "./navigation.tsx";


export interface IApplication extends __React.Props<any> {};

export class Application extends React.Component<IApplication, IPayloads> {
	constructor() {
		super();
		
		this.state = store.payloads;
		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		store.addListener(this.onChange);
	}

	componentWillUnmount() {
		store.removeListener(this.onChange);
	}
	
	onChange(state: IPayloads) {
		this.setState(state);
	}
	
	render() {
		if (!this.state.users)
			return <div> Loading... </div>
		
		return <div className="application">
			<UserData { ...this.state.currentUser } />
			<Navigation { ...this.state } />
		</div>
	}
};