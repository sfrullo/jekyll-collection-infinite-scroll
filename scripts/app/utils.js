define(	function () {
	
	return {
		
		_load : function(what, where) {
			var xhr= new XMLHttpRequest();
			xhr.open('GET', what, true);
			xhr.onreadystatechange= function() {
			    if (this.readyState!==4) return;
			    if (this.status!==200) return; // or whatever error handling you want
			    document.getElementById(where).innerHTML= this.responseText;
			};
			xhr.send();
		}

	}
});