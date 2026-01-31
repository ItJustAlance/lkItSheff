import $ from "jquery";

$(function() {
  console.log($);
	var win_w = $(document).width();
	
	$(".js-menu-open").on("click", function (){
		$("body").toggleClass("lock")
		$(this).toggleClass("--menu-open");
		$(".mobile-menu__layout").toggleClass("--show")
	});
	
	$(".js-mobile-menu__item-title").on("click", function (){
		$(this).parent().toggleClass("--active");
	});
	
	
  $(".js-btn-modal").on("click", function (){
    const modal = $(this).data("modal");
    $("body").addClass("lock just-modal--default")
    $("#" + modal).addClass("open ");
    setTimeout(() => ($("#" + modal).addClass("in")), 300);
    return false
  });
	$(".just-modal__overlay, .js-just-modal__close").on("click", function (){
		$("body").removeClass("lock just-modal--default")
		$(".just-modal").removeClass("open in");
	});
	
	$(".js-open-mobile-notice").on("click", function (){
		if(win_w < 1024){
			$(".js-open-mobile-notice-wrapper").addClass("active")
			$("#mobile-notice").addClass("--show");
		}
	});
	
	
});
