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
	if(!Me.help.array){Me.help.array = {};}

	Me.help.array.rotateCounterClockwise = function (array) {
		var w = array[0].length;
		var h = array.length;
		var newArray = this.makeArray(h, w, 0);
		for (var i = 0; i < w; i++) {
			for (var j = h - 1; j >= 0; j--) {
				newArray[i][j] = array[j][i];
			}
		}
		return newArray;

		//FLIP VERTICAL
		//var w = array[0].length;
		//var h = array.length;
		//var newArray = this.makeArray(w, h, 0);
		//for (var i = 0; i < h; i++) {
		//    for (var j = 0; j < w; j++) {
		//        newArray[i][j] = array[h-1-i][j];
		//    }
		//}
		//return newArray;
	};

	Me.help.array.rotateClockwise = function (array) {
		var w = array[0].length;
		var h = array.length;
		var newArray = this.makeArray(h, w, 0);
		for (var i = w - 1; i >= 0; i--) {
			for (var j = h - 1; j >= 0; j--) {
				newArray[i][j] = array[h - j - 1][i];
			}
		}
		return newArray;

		//FLIP HORIZONTAL
		//var w = array[0].length;
		//var h = array.length;
		//var newArray = this.makeArray(w, h, 0);
		//for (var i = 0; i < h; i++) {
		//    for (var j = 0; j < w; j++) {
		//        newArray[i][j] = array[i][w-1-j];
		//    }
		//}
		//return newArray;
	};
}(jQuery, window, document));