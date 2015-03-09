/**
 * HelpMe from the MeLibs
 * Library that help you - adding a lots of helpfull methods
 * Dependencies :
 *  - Jquery
 *
 * Private Methods :
 *
 * Public Methods :
 *
 */
(function($, window, document, undefined){
	"use strict";
	/* Create Me reference if does'nt exist */
	if(!window.Me){window.Me = {};}
	/* Initiate it if doesn't exist */
	if(!Me.help){Me.help = {};}
	if(!Me.help.dimension){Me.help.dimension = {};}

    var _scrollbarSize = null;
	Me.help.dimension.getScrollbarSize = function() {
        if(!_scrollbarSize) {
            $('body').append('<div id="h-fsb" style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;">&nbsp;</div></div>');
            var $hfsb = $('#h-fsb');
            var w1 = $hfsb.find('div').innerWidth();
            $hfsb.css('overflow-y', 'scroll');
            var w2 = $hfsb.find('div').html('html is required to init new width.').innerWidth();
            $hfsb.remove();
            _scrollbarSize = w1 - w2;
        }
        return _scrollbarSize;
    };

	Me.help.dimension.getScrollOffsets = function($el) {
        var Yoffset = 0;
        var Xoffset = 0;

        if (!$el) {
            if (typeof pageYOffset!= 'undefined') {
                Yoffset = pageYOffset;
            } else {
                var B = document.body; //IE 'quirks'
                var D = document.documentElement; //IE with doctype
                D = (D.clientHeight)? D: B;
                Yoffset = D.scrollTop;
            }

            if (typeof pageXOffset!= 'undefined') {
                Xoffset = pageXOffset;
            } else {
                var B = document.body; //IE 'quirks'
                var D = document.documentElement; //IE with doctype
                D = (D.clientWidth)? D: B;
                Xoffset = D.scrollLeft;
            }
        } else {
            Yoffset = $el.scrollTop();
            Xoffset = $el.scrollLeft();
        }

        return {x:Xoffset, y:Yoffset};
    };

	Me.help.dimension.hasVScroll = function() {
        var $selector = $('html, body');
        $selector.css({height:'100%'});
        var _hasVScroll = $(document).height() > $(window).height();
        $selector.css({height:''});
        return _hasVScroll;
    };

	Me.help.dimension.hasHScroll = function() {
        var $selector = $('html, body');
        $selector.css({width:'100%'});
        var _hasHScroll = $(document).width() > $(window).width();
        $selector.css({width:''});
        return _hasHScroll;
    };

	Me.help.dimension.getTotalW = function(){
        var total = $(window).width();
        if (this.hasVScroll()) {
            total += this.getScrollbarSize();
        }
        return total;
    };

    Me.help.dimension.getTotalH = function(){
        var total = $(window).height();
        if (this.hasHScroll()) {
            total += this.getScrollbarSize();
        }
        return total;
    };
}(jQuery, window, document));