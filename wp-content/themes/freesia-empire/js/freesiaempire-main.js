jQuery(function(){var o,e,t;jQuery(function(){var o=jQuery("#search-toggle"),e=jQuery("#search-box");jQuery("#search-toggle").on("click",function(){"search-toggle"==jQuery(this).attr("id")&&(e.is(":visible")?o.removeClass("header-search-x").addClass("header-search"):o.removeClass("header-search").addClass("header-search-x"),e.slideToggle(200,function(){}))})}),(t=jQuery(".main-navigation"))&&(o=t.find(".menu-toggle"))&&((e=t.find(".menu"))&&e.children().length?jQuery(".menu-toggle").on("click",function(){jQuery(this).toggleClass("on"),t.toggleClass("toggled-on")}):o.hide()),jQuery(function(){setInterval(function(){jQuery(".min_slider ul").animate({marginLeft:-220},1e3,function(){jQuery(this).css({marginLeft:0}).find("li:last").after(jQuery(this).find("li:first"))})},3e3)});var r=jQuery(".widget_portfolio .four-column-full-width, .widget_portfolio .four-column-full-width .portfolio-content h3, .widget_portfolio .four-column-full-width .portfolio-content p").children("a");r.on("focus",function(){jQuery(this).parents(".widget_portfolio .four-column-full-width").addClass("focus")}),r.on("focusout",function(){jQuery(this).parents(".widget_portfolio .four-column-full-width").removeClass("focus")}),jQuery(document).ready(function(){jQuery(".go-to-top").hide(),jQuery(window).scroll(function(){900<jQuery(window).scrollTop()?jQuery(".go-to-top").fadeIn():jQuery(".go-to-top").fadeOut()}),jQuery(".go-to-top").click(function(){return jQuery("html,header,body").animate({scrollTop:0},700),!1})})});