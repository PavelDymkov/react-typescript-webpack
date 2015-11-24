export function urlApi(callback: Function) {
	passId();
	
	window.addEventListener("popstate", event => passId());
	
	function passId() {
		console.log(history.state)
		var match = location.search.match(/id=(\d+)/);
		
		if (match) {
			callback(+match[1]);
		}
	}
};