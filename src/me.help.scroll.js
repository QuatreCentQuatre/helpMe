$.scrollWhereIWant = function($el, value, time, completeHandler) {
	var curScroll = Me.help.dimension.getScrollOffsets($el);
	var data = {
		onUpdate:function() {
			if ($el == window) {
				$el.scrollTo(curScroll.x, curScroll.y);
			} else {
				$el.scrollLeft(curScroll.x);
				$el.scrollTop(curScroll.y);
			}
		},
		overwrite:true
	};
	data = Me.help.extend(data, value);
	if(typeof completeHandler === "function") {
		data.onComplete      = completeHandler;
		data.onCompleteScope = $el;
	}
	TweenLite.to(curScroll, time/1000, data);
};