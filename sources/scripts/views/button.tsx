/// <reference path="../types.d.ts" />


export interface IButton extends __React.Props<any> {
	action: Function;
	text: string;
};

export class Button extends React.Component<IButton, {}> {
	render() {
		return <div className="button" onClick={ event => this.props.action() }>
			{ this.props.text }
		</div>
	}
};