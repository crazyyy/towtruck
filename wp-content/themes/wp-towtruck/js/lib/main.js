"use strict";jQuery(function(e){var a,n,t,s;e("body").hasClass("sticky-header")&&(a=e("#sp-header"),e("#sp-header").length&&(a.outerHeight(),n=a.offset().top,(t=function(){var t=e(window).scrollTop();n<t?a.addClass("header-sticky"):a.hasClass("header-sticky")&&a.removeClass("header-sticky")})(),e(window).scroll(function(){t()})),e("body").hasClass("layout-boxed")&&(s=a.parent().outerWidth(),a.css({"max-width":s,left:"auto"}))),e(window).scroll(function(){100<e(this).scrollTop()?e(".sp-scroll-up").fadeIn():e(".sp-scroll-up").fadeOut(400)}),e(".sp-scroll-up").click(function(){return e("html, body").animate({scrollTop:0},600),!1}),e(window).on("load",function(){e(".sp-preloader").fadeOut(500,function(){e(this).remove()})}),e(".sp-megamenu-wrapper").parent().parent().css("position","static").parent().css("position","relative"),e(".sp-menu-full").each(function(){e(this).parent().addClass("menu-justify")}),e("#offcanvas-toggler").on("click",function(t){t.preventDefault(),e(".offcanvas-init").addClass("offcanvas-active")}),e(".close-offcanvas, .offcanvas-overlay").on("click",function(t){t.preventDefault(),e(".offcanvas-init").removeClass("offcanvas-active")}),e(document).on("click",".offcanvas-inner .menu-toggler",function(t){t.preventDefault(),e(this).closest(".menu-parent").toggleClass("menu-parent-open").find(">.menu-child").slideToggle(400)}),e('[data-toggle="tooltip"]').tooltip(),e(".article-ratings .rating-star").on("click",function(t){t.preventDefault();var n=e(this).closest(".article-ratings"),t={option:"com_ajax",template:template,action:"rating",rating:e(this).data("number"),article_id:n.data("id"),format:"json"};e.ajax({type:"POST",data:t,beforeSend:function(){n.find(".fa-spinner").show()},success:function(t){var a=e.parseJSON(t);n.find(".ratings-count").text(a.message),n.find(".fa-spinner").hide(),a.status&&n.find(".rating-symbol").html(a.ratings),setTimeout(function(){n.find(".ratings-count").text("(".concat(a.rating_count,")"))},3e3)}})})});
//# sourceMappingURL=../maps/lib/main.js.map
