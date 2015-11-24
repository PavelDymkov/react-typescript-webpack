/// <reference path="../types.d.ts" />

import { IPayloads } from "../store.ts";
import { UserCard } from "./user_card.tsx";
import { Button } from "./button.tsx";
import { nextUser, previousUser } from "../actions.ts";


export interface INavigationProps extends IPayloads, __React.Props<any> {};

export class Navigation extends React.Component<INavigationProps, {}> {
	render() {
		var userCards = this.props.users
			.map(user => <UserCard key={ user.id } isSelected={ user.id == this.props.currentUser.id } { ...user } />);
		
		return <div className="navigation">
			<div className="navigation_cards">
				{ userCards }
			</div>
			<div className="navigation_controls">
				<Button text="←" action={ previousUser } />
				{ this.props.currentUser.id }
				<Button text="→" action={ nextUser } />
			</div>
		</div>
	}
};