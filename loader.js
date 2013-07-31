function load_resource(filename, filetype) {
	if (filetype == "js"){ //if filename is a external JavaScript file
		var fileref = document.createElement('script')
		fileref.setAttribute("type","text/javascript")
		fileref.setAttribute("src", filename)
	} else if (filetype == "css") { //if filename is an external CSS file
		var fileref = document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
	}

	if(typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}

load_resource('static/jquery.js', 'js');
load_resource('static/jquery.ui.js', 'js');
load_resource('static/jquery.ui.smoothness.css', 'css');
load_resource('static/drawer.css', 'css');

load_resource('static/nrc_init.js', 'js');
