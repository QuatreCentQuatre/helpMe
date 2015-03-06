$(document).ready(function(){
	$(window).scroll(function(){
		console.log("scrollOffets :", Me.help.dimension.getScrollOffsets());
	}).scroll();

	$(window).resize(function(){
		console.log("PageTotalWidth :", Me.help.dimension.getTotalW());
		console.log("PageTotalHeight :", Me.help.dimension.getTotalH());
		console.log("HasVerticalScroll :", Me.help.dimension.hasVScroll());
		console.log("HasHorizontalScroll :", Me.help.dimension.hasHScroll());
		console.log("Scrollbar :", Me.help.dimension.getScrollbarSize());
		console.log("toSlug :", Me.help.string.toSlug("J'aimerais avoir un Méga url de sa"));
		console.log("rotateArray :", Me.help.array.rotateClockwise([[1,2,3,4,5],[1,2,3,4,5]]));
	}).resize();
});