/// <reference path="../../typings/tsd.d.ts" />

declare var React: typeof __React;

interface IReactDOM {
	render(source: __React.ReactElement<any>, destination: HTMLElement);
}

declare var ReactDOM: IReactDOM;