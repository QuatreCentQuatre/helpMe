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

    Me.help.extend = function(source, overwrites, keep_source, deep) {
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

	Me.help.proxy = function(method, scope) {
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

	Me.help.encodeURL = function(url) {
        return encodeURIComponent(url).replace(/'/g,"%27").replace(/"/g,"%22");
    };

	Me.help.decodeURL = function(url) {
        return decodeURIComponent(url.replace(/\+/g,  " "));
    };
}(jQuery, window, document));