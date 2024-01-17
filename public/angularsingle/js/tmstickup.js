
$(document).ready(function(){

    // Create a clone of the menu, right next to original.
    $('.navbar-static-top').addClass('original').clone().insertAfter('.navbar-static-top').addClass('cloned').addClass('sam').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();

    scrollIntervalID = setInterval(stickIt, 10);


            function stickIt() {

                var orgElementPos = $('.original').offset();
    orgElementTop = orgElementPos.top;

                if ($(window).scrollTop() >= (orgElementTop)) {
        // scrolled past the original position; now only show the cloned, sticky element.

        // Cloned element should always have same left position and width as original element.     
        orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();

    $('.original').css('visibility', 'hidden');

                } else {
        // not scrolled past the menu; only show the original menu.
        $('.cloned').hide();
    $('.original').css('visibility', 'visible');

    $('.original').removeClass('sam');
}
}

//scroll to top
   
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".navbar-static-top").addClass("shadow");
    } else {
        $(".navbar-static-top").removeClass("shadow");
    }
});

});

//(function($,undefined){
//	var 
//		def={
//			stuckClass:'isStuck'			
//		}
//		,doc=$(document),anim = false;

//	$.fn.TMStickUp=function(opt){
//		opt=$.extend(true,{},def,opt)

//		$(this).each(function(){
//			var $this=$(this)
//				,posY//=$this.offset().top+$this.outerHeight()
//				,isStuck=false
//				,clone=$this.clone().appendTo($this.parent()).addClass(opt.stuckClass)
//				,height//=$this.outerHeight()
//				,stuckedHeight=clone.outerHeight()
//				,opened//=$.cookie&&$.cookie('panel1')==='opened'
//				,tmr

//			$(window).resize(function(){
//				clearTimeout(tmr)				
//				clone.css({top:isStuck?0:-stuckedHeight,visibility:isStuck?'visible':'hidden'})
//				tmr=setTimeout(function(){
//					posY=$this.offset().top//+$this.outerHeight()				
//					height=$this.outerHeight()
//					stuckedHeight=clone.outerHeight()
//					opened=$.cookie&&$.cookie('panel1')==='opened'

//					clone.css({top:isStuck?0:-stuckedHeight})
//				},40)
//			}).resize()

//			clone.css({
//				position:'fixed'				
//				,width:'100%'
//			})

//			$this
//				.on('rePosition',function(e,d){
//					if(isStuck)
//						clone.animate({marginTop:d},{easing:'linear'})
//					if(d===0)
//						opened=false
//					else
//						opened=true
//				})
			
//			doc
//				.on('scroll',function(){
//					var scrollTop=doc.scrollTop()

//					if(scrollTop>=posY&&!isStuck){						
//						clone
//							.stop()
//							.css({visibility:'visible'})
//							.animate({
//								top:0
//								,marginTop:opened?50:0
//							},{

//							})
							
//						isStuck=true
//					}
					
//					if(scrollTop<posY+height&&isStuck){
//						if ($('.search-form_toggle').length > 0) {
//							var o_stuck = $('.search-form_toggle'),
//							f_stuck = $('.search-form');

//							if (!anim && o_stuck.hasClass('active')) {
//								anim = true;
//								o_stuck.removeClass('active');
//								f_stuck.removeClass('on').slideUp();
//								anim = false;
//							}
//						}

//						$('.sf-menu ul').css('display', 'none');

//						clone
//							.stop()
//							.animate({
//								top:-stuckedHeight
//								,marginTop:0
//							},{
//								duration:200
//								,complete:function(){
//									clone.css({visibility:'hidden'})
//								}
//							});
						
//						isStuck=false;

//					}			
//				})				
//				.trigger('scroll')
//		})
//	}
//})(jQuery)
