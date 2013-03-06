jQuery(function($) {
	
		if($('#top_project').length > 0){
			var top = $('#top_project').offset().top - parseFloat($('#top_project').css('marginTop').replace(/auto/, 0));
		  
		  $(window).scroll(function (event) {
		    // what the y position of the scroll is
		    var y = $(this).scrollTop();
		  
		    // whether that's below the form
		    if (y >= top) {
		      // if so, ad the fixed class
		      $('#top_project').addClass('fixed');
		    } else {
		      // otherwise remove it
		      $('#top_project').removeClass('fixed');
		    }
		  });
		}


	
    $("audio,video").mediaelementplayer();               
    


	if($('.slider').length == 0){
		$('#content').css('top', 0);
		$('#content').css('margin-bottom', 0);
	}else{
		$('.slider:first').animate({marginTop: 0 }, 500);
	}
	$("nav ul.menu > li > a").hover(function(){
		var $el = $(this);
		if($el.parent().find('ul').length > 0){
			$('ul.sub-menu').not('.menu').css({"display": 'none', 'visibility': 'hidden'}).slideUp('fast', "easeOutExpo");
			$('#portfolio-filter').css({'visibility': 'hidden'});
			if($('.slider').length > 0){
				$('.slider:first').animate({marginTop: 53 }, 500);
			}else{
				$('#content').not('.content_portfolio').animate({marginTop: 100 }, 500);
				$('#content').not('.content_portfolio').animate({marginBottom: 0 }, 500);
			}
			
				$el.parent().find('ul').slideDown('fast', "easeOutExpo").css({"display": 'block', 'visibility': 'visible'});

		}

	}, function(){

	});
	$('ul.sub-menu').not('.menu').bind("mouseleave",function(){
			$('ul.sub-menu').not('.menu').css({"display": 'none', 'visibility': 'hidden'}).slideUp('fast', "easeOutExpo");
			if($('.slider').length > 0){
				$('.slider:first').animate({marginTop: 0 }, 500);
			}else{
				$('#content').not('.content_portfolio').animate({marginTop: 50 }, 500);
				$('#content').not('.content_portfolio').animate({marginBottom: 0 }, 500);
			}
	});
	

	$('#portfolio-preview-items').hover(function(){
		$('ul.sub-menu').not('.menu').css({"display": 'none', 'visibility': 'hidden'}).slideUp('fast', "easeOutExpo");
		$('#portfolio-filter').css({'visibility': 'visible'}).slideDown('fast', "easeOutExpo");
	}, function(){

	});

	$(".lightbox-gallery").fancybox();
	$('.lightbox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
	
	$('.touchcarousel').each(function(){
		
		var height = $('.touchcarousel-item:first', $(this)).height();
		$(this).css('height', height);
		
	});
	$('.touchcarousel').each(function(){
		var width = $('.touchcarousel-item:first', $(this)).width();

		
		if(width != 940)
				var margin_left = $('.touchcarousel-item:nth-child(2)', $(this)).outerWidth(true) - $('.touchcarousel-item:nth-child(2)', $(this)).innerWidth();
			else
				var margin_left = 0;

			
			$('.touchcarousel-item', $(this)).css('width', width);
			$('.touchcarousel-item', $(this)).css('margin-left', margin_left);
			$('.touchcarousel-item:first', $(this)).css('margin-left', 0);

	});
	$(".likes").click( function() {

      var post_id = $(this).attr("data-post_id");
      var nonce = $(this).attr("data-nonce");
      var link = $(this).attr("data-link");
      
      $likes = jQuery(this);
      $.ajax({
         type : "post",
         dataType : "json",
         url : link,
         data : {action: "likes_portfolio", post_id : post_id, nonce: nonce},
         success: function(response) {
            if(response.type == "success") {
               $likes.html(response.hits)
            }
            else {

               alert("Your vote could not be added")
            }
         }
      });  

   });
	$(".touchcarousel").each(function(){

        var $self = $(this);
        var width = $('.touchcarousel-item:first', $self).width();
       
       	$self.imagesLoaded(function(){
       			$self.carouFredSel( 
				{
					
					auto: false,
					height: 'variable',
					
					swipe: {
						onMouse: true,
						onTouch: true,
						onAfter: function(data){
									var margin = $('.touchcarousel-item', $self).css('marginLeft');
									$('.touchcarousel-item', $self).css('margin-left', margin);
									$('.touchcarousel-item:first', $self).css('margin-left', 0);
								}
					},
					next        : {
						onAfter: function(data){
									var margin = $('.touchcarousel-item', $self).css('marginLeft');
									$('.touchcarousel-item', $self).css('margin-left', margin);
									$('.touchcarousel-item:first', $self).css('margin-left', 0);
								},
						button  : $self.parent().parent().find('.arrow-holder.right'),
                		key   : "left"
					},
					prev        : {
						onAfter: function(data){
									var margin = $('.touchcarousel-item', $self).css('marginLeft');
									$('.touchcarousel-item', $self).css('margin-left', margin);
									$('.touchcarousel-item:first', $self).css('margin-left', 0);
								},
						button  : $self.parent().parent().find('.arrow-holder.left'),
                		key   : "right"
					},
					scroll 		: {
						items   : 1,
						duration : 500
					},
					items: {
						width   : "variable"
					}
					

					
				});
       	});
          
		});
       


   
	
	
	
	$(".accordion-group").live('click', function(){
        var $self = $(this);
        $body = $self.find('.accordion-body');
        if($self.find('.accordion-heading').hasClass('in_head')){
          $self.parent().find('.accordion-heading').removeClass('in_head');
        }else{  
          $self.parent().find('.accordion-heading').removeClass('in_head');
          $self.find('.accordion-heading').addClass('in_head');
        }
          
    });

	
	
	
	if($().mobileMenu) {
		$('#navigation nav').each(function(){
			$(this).mobileMenu();
			$('.select-menu').customSelect();
		});
		
	}



	$('.flexslider').flexslider({
			animationSpeed: 400,
			animation: "fade",
			controlNav: false,
			pauseOnAction: true,
			pauseOnHover: false
		});
	$("#attention button.close_button").click(function(){
		$("#attention").height(4);
		$(this).parent().parent().parent().find('.open_button').css('top', 3);
	});
	$("#attention span.open_button").mouseenter(function(){
		$("#attention").height(60);
		$(this).css('top', 59);
	});
	$(".menu .sub-menu a").live('click', function(){
		var button = $(this);
		
		var title = button.attr('title').split("-");
		if(title[0] == 'skin'){

			document.cookie = 'themeple_skin='+title[1] ; 
			setTimeout(function(){
								    window.location.hash = "#wpwrap";
						 			window.location.reload(true);
								
             }, 1000);

		}else if(title[0] == 'blog'){
			document.cookie = 'themeple_blog='+title[1] ; 
			setTimeout(function(){
								    window.location.hash = "#wpwrap";
						 			window.location.reload(true);
								
             }, 1000);
		}else if(title[0] == 'layout'){
			document.cookie = 'themeple_layout='+title[1] ; 
			setTimeout(function(){
								    window.location.hash = "#wpwrap";
						 			window.location.reload(true);
								
             }, 1000);
		}
	});

	var $container = $('.filterable');
    
    
    if( $('.visual_image img', $container).size() ) {
          $('.visual_image img', $container).one("load", function(){
			    $container.isotope({
			      filter: '*',
			      
			      resizeble: true,
			      animationOptions: {
			         duration: 750,
			         easing: 'linear',
			         queue: false,
			       }
			    });
			});

          setTimeout(function(){
		        $container.isotope({
		          filter: '*',
		          resizeble: true,
		          animationOptions: {
		             duration: 750,
		             easing: 'linear',
		             queue: false,
		           }
		        });
		    }, 100);
   
}


 $('nav#portfolio-filter ul li a').click(function(){
    var selector = $(this).attr('data-filter');
    $(this).parent().parent().parent().find('.active').removeClass('active');
    $(this).parent().parent().addClass('active');
    $container.isotope({ 
    filter: selector,
    
	resizeble: true,
    animationOptions: {
       duration: 750,
       easing: 'linear',
       queue: false,
     
     }
    });
    return false;
  });

		jQuery("#layerslider_14").layerSlider({
			width               : '940px',
			height              : '415px',
			responsive          : true,
			responsiveUnder     : 0,
			sublayerContainer   : 0,
			autoStart           : true,
			pauseOnHover        : true,
			firstLayer          : 1,
			animateFirstLayer   : true,
			randomSlideshow     : false,
			twoWaySlideshow     : true,
			keybNav             : true,
			touchNav            : true,
			imgPreload          : true,
			navPrevNext         : true,
			navStartStop        : false,
			navButtons          : false,
			hoverPrevNext       : true,
			hoverBottomNav      : false,
			thumbnailNavigation : 'hover',
			tnWidth             : 100,
			tnHeight            : 60,
			tnContainerWidth    : '60%',
			tnActiveOpacity     : 35,
			tnInactiveOpacity   : 100,

			skin                : 'fullwidth',
			skinsPath           : '/assets/',
			globalBGColor       : 'transparent',
			yourLogo            : false,
			yourLogoStyle       : 'left: 10px; top: 10px;',
			yourLogoLink        : false,
			yourLogoTarget      : '_self',

			loops               : 0,
			forceLoopNum        : true,
			autoPlayVideos      : true,


			autoPauseSlideshow  : 'auto',
			youtubePreview      : 'maxresdefault.jpg',

			cbInit              : function(element) { },
			cbStart             : function(data) { },
			cbStop              : function(data) { },
			cbPause             : function(data) { },
			cbAnimStart         : function(data) { },
			cbAnimStop          : function(data) { },
			cbPrev              : function(data) { },
			cbNext              : function(data) { }            });


	
	
});
