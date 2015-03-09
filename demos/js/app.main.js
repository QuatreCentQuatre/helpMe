$(document).ready(function(){
	console.log("toSlug :", Me.help.string.toSlug("J'aimerais avoir un Beau petit slug de ce géant titre"));
	var baseArray = [[1, 2, 3], [3, 2, 1], [2,3,1]];
	console.log("Base Array :", baseArray);
	console.log("rotateClockwise :", Me.help.array.rotateClockwise(baseArray));
	console.log("rotateCounterClockwise :", Me.help.array.rotateCounterClockwise(baseArray));

	$(window).scroll(function(){
		console.log("scrollOffets :", Me.help.dimension.getScrollOffsets());
	}).scroll();

	$(window).resize(function() {
		console.log("PageTotalWidth :", Me.help.dimension.getTotalW());
		console.log("PageTotalHeight :", Me.help.dimension.getTotalH());
		console.log("HasVerticalScroll :", Me.help.dimension.hasVScroll());
		console.log("HasHorizontalScroll :", Me.help.dimension.hasHScroll());
		console.log("Scrollbar :", Me.help.dimension.getScrollbarSize());
	}).resize();
});