"use strict";!function(e){var l=e(window),u=l.height();l.resize(function(){u=l.height()}),e.fn.parallax=function(o,r,t){var s,i,c=e(this);function n(){var a=l.scrollTop();c.each(function(){var t=e(this),n=t.offset().top;n+s(t)<a||a+u<n||!c.data("sppbparallax")||c.css("backgroundPosition",o+" "+Math.round((i-a)*r)+"px")})}c.data("sppbparallax",!0),c.css("backgroundAttachment","fixed"),c.each(function(){i=c.offset().top}),s=t?function(t){return t.outerHeight(!0)}:function(t){return t.height()},(arguments.length<1||null===o)&&(o="50%"),(arguments.length<2||null===r)&&(r=.15),(arguments.length<3||null===t)&&(t=!0),l.bind("scroll",n).resize(n),n()},e.fn.parallaxDestroy=function(t,n){var a=e(this);a.data("sppbparallax")&&(t?a.css("backgroundPosition",t):a.css("backgroundPosition","0% 0%"),n?a.css("backgroundAttachment",n):a.css("backgroundAttachment","inherit"),a.data("sppbparallax",!1))}}(jQuery);
//# sourceMappingURL=../maps/lib/jquery.parallax.js.map