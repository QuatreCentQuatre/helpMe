/*
 * HelpMe
 * Utils function
 * */
(function($, window, document, undefined){

    var HelpMe = {};

    var array = [];
    var _scrollbarSize = null;

    //--------Methods--------//
    HelpMe.extend = function(source, overwrites, keep_source, deep) {
        var result     = source;
        var args       = arguments;
        var finalArgs  = [];
        var keepSource = false;

        if (!overwrites) {
            return result;
        }

        if (typeof keep_source == "boolean") {
            keepSource = true;
            if(args) {
                delete args[2];
            }
        }

        if (args) {
            delete args[0];
            for(var i in args) {
                if(typeof args[i] == "object") {
                    finalArgs.push(args[i]);
                }
            }
        }
        args = finalArgs;

        for (var i in args) {
            for (var index in args[i]) {
                if (typeof result[index] != "undefined" && keepSource) { continue; }
                result[index] = args[i][index];
            }
        }

        return result;
    };

    HelpMe.proxy = function(method, scope) {
        var proxy;
        var proxyArgs = arguments;
        var finalArgs = [];
        if (proxyArgs) {
            var totalArgs = proxyArgs.length;
            for (var i = 0; i < totalArgs; i++) {
                if (i < 2) { continue; }
                finalArgs.push(proxyArgs[i]);
            }
        }
        proxyArgs = finalArgs;

        proxy = function() {
            var args      = arguments;
            var finalArgs = [];
            if (args) {
                var totalArgs = args.length;
                for (var i = 0; i < totalArgs; i++) {
                    finalArgs.push(args[i]);
                }
            }
            args = finalArgs.concat(proxyArgs);
            return method.apply(scope, args);
        };

        return proxy;
    };


    if(!window.Me) {
        window.Me = {};
    }

    if (!window._) {
        window._ = Me;
    }

    Me.help = HelpMe;
    if (!window._) {
        window._ = Me.help;
    }

    HelpMe.encodeURL = function(url) {
        return encodeURIComponent(url).replace(/'/g,"%27").replace(/"/g,"%22");
    };

    HelpMe.decodeURL = function(url) {
        return decodeURIComponent(url.replace(/\+/g,  " "));
    };

    HelpMe.getScrollbarSize = function() {
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

    HelpMe.getScrollOffsets = function($el) {
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

    HelpMe.hasVScroll = function() {
        var $selector = $('html, body');
        $selector.css({height:'100%'});
        var _hasVScroll = $(document).height() > $(window).height();
        $selector.css({height:''});
        return _hasVScroll;
    };

    HelpMe.hasHScroll = function() {
        var $selector = $('html, body');
        $selector.css({width:'100%'});
        var _hasHScroll = $(document).width() > $(window).width();
        $selector.css({width:''});
        return _hasHScroll;
    };

    HelpMe.getTotalW = function(){
        var total = $(window).width();
        if (this.hasVScroll()) {
            total += this.getScrollbarSize();
        }
        return total;
    };

    HelpMe.getTotalH = function(){
        var total = $(window).height();
        if (this.hasHScroll()) {
            total += this.getScrollbarSize();
        }
        return total;
    };

}(jQuery, window, document));