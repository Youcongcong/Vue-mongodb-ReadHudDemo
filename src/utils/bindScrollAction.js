/*
	判断一个div的scroll是否到底部， 并执行相应的函数
*/

var addEvent = (function() {
	if(window.addEventListener) {
		return function(elm, type, handle) {
			elm.addEventListener(type, handle, false);
		}
	}

	if(window.attachEvent) {
		return function(elm, type, handle) {
			elm.attachEvent('on' + type, handle);
		}
	}
})();

var bindScrollAction = function(elm, handle) {
	var args = Array.prototype.splice.call(arguments, 2);
	addEvent(elm, 'scroll', function() {
		var scrollHeight = elm.scrollHeight;
		var scrollTop    = elm.scrollTop;
		var height 		 = elm.offsetHeight;
		if((scrollTop + height) == scrollHeight) {
			if(typeof handle === 'function') handle.apply(this, args);
		}
	})
};

export default bindScrollAction;