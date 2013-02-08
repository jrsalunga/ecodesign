$(window).load(function(){
    
    // ieCheck
    var ie = false;
    var aniButtonDuration = 350;
	 var defMh = 0, h = 0;
	 defMh = parseInt($('body').css('minHeight'));
     var MSIE = parseInt(($.browser.msie) && ($.browser.version <= 8));
	 console.log(MSIE);
    
    if($.browser.msie && $.browser.version<9)
    {
        aniButtonDuration = 0;
        ie = true;
    }
    
    
   $('.gall_spinner').hide();
    $('#bgStretch')
        .bgStretch({
            align:'rightTop',
            autoplay: false,
            navigs:$('.pagin').navigs({prevBtn:$('#prev_arr'), nextBtn:$('#next_arr')})
        }).sImg({
            sleep: 1000,
            spinner:$('.gall_spinner')
        }) 
        
    $('.arr_next, .arr_prev')
	.sprites({
		method:'simple',
		duration:400,
		easing:'easeOutQuint',
		hover:true
	})
        
	

    
    $(".pagin").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            scroll:1,
            visible: 6,
            easing: 'easeOutExpo',
            speed: 400,
                mouseWheel:true,
                circular: false
    })      
    
    var curr_item = $(".pagin li").length/3;
    /*var currPic = 0;
    $('.pagin >ul >li').eq(0).find(".zoomSp1").fadeTo(500, 1)*/

     if(!MSIE){ $('.pagin >ul >li').find(".zoomSp1").fadeTo(500, 0)}else{ $('.pagin >ul >li').find(".zoomSp1").css({"display":"none"})  }
        
        $('.pagin >ul >li').eq(0).find(".zoomSp1").fadeTo(500, 1)
        
         $('.pagin >ul >li').hover(
         function(){
              if($(this).index() !== currPic-1){
                         $(this).find(".zoomSp1").stop().fadeTo(500, 1)
             }     
         },
         function(){
                    if($(this).index() !== currPic-1){
                              $(this).find(".zoomSp1").stop().fadeTo(500, 0)
                    }
              }
         )  





    /*curr_item=0;
    $(".pagin li").find('span').stop().animate({opacity:0},0, function(){
        $(".pagin li").eq(curr_item).find('span').stop().animate({opacity:1},0); 
    }); 
    
    $('.pagin a').hover(
        function(){
            console.log("over")
            if (!$(this).parent().hasClass('active'))
               $(this).siblings('span').stop().animate({'width':'100%','height':'100%',opacity:1},500,'easeOutExpo');            
        },
        function(){
            if (!$(this).parent().hasClass('active'))
               $(this).siblings('span').stop().animate({'width':'100%','height':'100%',opacity:0},700,'easeOutExpo');  
        }
    );*/
    
    $('.next,.prev').hover(
        function(){
            if (!MSIE){
                $(this).children('span').css({opacity:'0',display:'block'}).stop().animate({opacity:'1'});  
            } else {
                $(this).children('span').stop().show();
            }  
        },
        function(){
            if (!MSIE){
                $(this).children('span').stop().animate({opacity:'0'},function(){$(this).css({display:'none'});});  
            }else {
                 $(this).children('span').stop().hide();
            }
        }
    );


    


    


    //page4 slider
    if ($(".slider2").length) {
        $('.slider2').cycle({
            fx: 'scrollHorz',
            speed: 600,
            timeout: 0,
            next: '.next1',
            prev: '.prev1',                
            easing: 'easeInOutExpo',
            cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
        })
    };
    var ind = 0;
    var len = $('.nav_item').length;
    $('.nav_item').bind('click',function(){
        //ind = $(this).index()-1;
        console.log("$(this).index() = " + $(this).index())

        ind = $(this).index()-2;
        $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
        $(this).addClass('active');
        $('.slider2').cycle(ind);
    });
    $('.prev1').bind('click',function(e){
            ind--;
            if (ind<0){
                ind=(len-1);
            }
            
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
        
    });
     $('.next1').bind('click',function(e){
            ind++;
            if (ind>(len-1)){
                ind=0;
            }
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
    });
     $('.start1').bind('click',function(e){
            ind=0;
            $('.slider2').cycle(ind);
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
    });
     $('.end1').bind('click',function(e){
            ind=(len-1);
            $('.slider2').cycle(ind);
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
    });
    //end page4 slider





    /////////////////////////////////////////////////////////////////////////// 
    //                           content switch                              //
    ///////////////////////////////////////////////////////////////////////////
    
    var content=$('#content'),
        nav=$('.menu'),
        thums=$('.paginwraper'),
        splash = $('#splash');
    
    $('ul#menu').superfish({
      delay:       700,
      animation:   {height:'show'},
      speed:       300,
      autoArrows:  false,
      dropShadows: false
    });

  
    
    nav.navs({
		useHash:true,
        defHash:'#!/',
		hoverIn:function(li){
		   	  $('>a ',li).css({color:'#fff','backgroundPosition':'right 11px'});
		   	  $('>span ',li).css({display:'block'}).stop().animate({opacity:1}, aniButtonDuration, 'easeOutCubic');
		},
		hoverOut:function(li){
		  if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
              $('>a ',li).css({color:'#636363','backgroundPosition':'right 50px'});
		   	  $('>span ',li).stop().animate({opacity:0}, aniButtonDuration, 'easeOutCubic', function(){
		   	      $(this).css({display:'none'});
		   	  });
          }
		}				
    })
    
	 
	 $(window).resize(function (){
		 if (h < defMh) {h = defMh}
		 $('body').stop().animate({'minHeight':h})
		});
		
		
     content.tabs({
		preFu:function(_)
        {
            _.li.css({'visibility':'hidden', top:'620px'});
            _.li.each(function(){
                if($(this).height() < 750){
                    $(this).height(750);
                } else {
                    $(this).height($(this).height()+0)
                }
            })
		}
		,actFu:function(_)
        {

            if(_.pren == undefined){
                aniDelay = 250;
            } else {
                if(_.n == -1 && _.pren == -1){
                    aniDelay = 250;
                } else {
                    aniDelay = 450;
                }
            }
            
            if(_.n == -1){
                content.stop().delay(aniDelay).animate({height:'420px'}, 650,'easeOutCubic');
                thums.stop().delay(aniDelay).animate({left:'110px'}, 650,'easeOutCubic');
                h = 420;
				$(window).trigger('resize');
            } else {
                /*content.stop().delay(0).animate({height:_.curr.height()+30}, 250,'easeOutCubic');*/
                content.stop().delay(0).css({height:_.curr.height()+0});
                thums.stop().delay().animate({left:'-1620px'}, 650,'easeOutCubic');
            }
            
        	if(_.curr){
        	   h = parseInt( _.curr.outerHeight(true)+70);
				$(window).trigger('resize');
				_.curr
					.stop()
					.delay(aniDelay).css({'visibility':'visible', top:-content.height()-500}).animate({top:'0px'}, 650,'easeOutCubic');
            }

            
			if(_.prev){
			    _.prev 
    				.stop()
    				.animate({top:content.height()+500}, 350,'easeInSine', function(){
    				     $(this).css({'visibility':'hidden'});
    			     });
            }
           
        }
		
	})
       
    nav.navs(function(n, _)
    {
		content.tabs(n);
	})
    
 
})