"use strict";

window.navigator.serviceWorker.register("sw.js").then(
	(res)=>{ /*console.log(res);*/ },
	(err)=>{ console.log(err); }
);
