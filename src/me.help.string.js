/**
 * HelpMe from the MeLibs
 * Library that help you - adding a lots of helpfull methods
 * Dependencies :
 *  - Jquery
 *
 */
(function($, window, document, undefined){
	"use strict";
	/* Create Me reference if does'nt exist */
	if(!window.Me){window.Me = {};}
	/* Initiate it if doesn't exist */
	if(!Me.help){Me.help = {};}
	if(!Me.help.string){Me.help.string = {};}

	Me.help.string.toSlug = function(str) {
		str = str.replace(/^\s+|\s+$/g, '');
		str = str.toLowerCase();

		// remove accents
		var from  = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
		var to    = "aaaaaeeeeeiiiiooooouuuunc------";
		var index = 0;
		for (index; index < from.length; index++) {
			str = str.replace(new RegExp(from.charAt(index), 'g'), to.charAt(index));
		}

		str = str
			.replace(/[^a-z0-9 -]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-');
		return str;
	};
}(jQuery, window, document));