/*
 * HelpMeString
 * String Methods
 * */
(function($, window, document, undefined){
	var HelpMeString = {};

	HelpMeString.encodeURL = function(url) {
		return encodeURIComponent(url).replace(/'/g,"%27").replace(/"/g,"%22");
	};

	HelpMeString.decodeURL = function(url) {
		return decodeURIComponent(url.replace(/\+/g,  " "));
	};

	if (window.Me && window.Me.help) {
		Me.help.string = HelpMeString;
	}
}(jQuery, window, document));