/// <reference path="../types.d.ts" />

import { IUser } from "../store.ts";
import { selectUser } from "../actions.ts";


export interface IUserCard extends IUser, __React.Props<any> {
	isSelected: boolean;
};

export class UserCard extends React.Component<IUserCard, {}> {
	render() {
		var className = "user-card";
		
		if (this.props.isSelected) {
			className += " selected";
		}
		
		return <div className={ className } onClick={ event => selectUser(this.props.id) }>
			<div> { this.props.first_name } </div>
			<div> { this.props.age } </div>
		</div>
	}
};