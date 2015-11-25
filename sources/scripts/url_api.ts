export function urlApi(callback: Function) {
	window.addEventListener("popstate", event => passId());
	
	function passId() {
		var match = location.search.match(/id=(\d+)/);
		var id: number = match ? +match[1] : -1;
		
		callback(id);
	}
};