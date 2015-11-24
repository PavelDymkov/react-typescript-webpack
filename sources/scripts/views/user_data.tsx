/// <reference path="../types.d.ts" />

import { IUser } from "../store.ts";


export interface IUserProps extends IUser, __React.Props<any> {};

export class UserData extends React.Component<IUserProps, {}> {
	render() {
		return <div className="user-data">
			<div className="user-data_title">
				{ this.props.first_name } { this.props.last_name }
			</div>
			<div>
				<div>
					First name: { this.props.first_name }
				</div>
				<div>
					Last name: { this.props.last_name }
				</div>
				<div>
					Age: { this.props.age }
				</div>
				<div>
					Location: { this.props.location }
				</div>
			</div>
		</div>
	}
};