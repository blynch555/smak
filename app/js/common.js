$(document).ready(function() {

	$("input, textarea").jqBootstrapValidation();

	$(".scroll-to, .scroll-down, .arrow-up, .main-mnu a").mPageScroll2id({
  scrollSpeed: 900
});

	$("#owl-2").owlCarousel({
		  items : 1, //10 items above 1000px browser width
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet : [600,1], //2 items between 600 and 0
      itemsMobile : false,
			slideSpeed : 600,
    	paginationSpeed : 600,
    	rewindSpeed : 600,
			autoPlay : true,
    	stopOnHover : false,
		  pagination : true,
   		paginationNumbers: false
	});

    $("#owl").owlCarousel({
        items : 5,
        itemsCustom : false,
		    itemsDesktopSmall : [980,4],
		    itemsTablet: [768,3],
		    itemsTabletSmall: false,
		    itemsMobile : [479,1],
		    singleItem : false,
		    itemsScaleUp : false,
        navigation : true,
    		navigationText : ["",""],
    		rewindNav : true,
    		scrollPerPage : false,
		    pagination : false,
		    paginationNumbers: false
		    });
 

$("#portfolio_grid").mixItUp();

	$(".s_portfolio li, .main-mnu li").click(function() {
	$(".s_portfolio li, .main-mnu li").removeClass("active");
		$(this).addClass("active");
	});

$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'inline',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});

$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

$(".toggle-menu").click(function() {
		$(this).toggleClass("in");
		$(".second_menu").slideToggle();
		return false;
	});

  $("A#trigger").click(function() { 
     // Отображаем скрытый блок 
    	$("DIV#box").slideToggle(); // fadeIn - плавное появление
     	return false; // не производить переход по ссылке
    });
  
  $("A#trigger-2").click(function() { 
     // Отображаем скрытый блок 
     	$("#expand").slideToggle(); // fadeIn - плавное появление
      $(this).toggleClass("krest_hidden")
     return false; // не производить переход по ссылке
     });
      
 	
    

    $("#active-expand-first").click(function() {
               $("#expand-title-first").css('display','block');
               $("#expand-title-second, #expand-title-third, #expand-title-foth").css('display','none');
                return false;                     
            });   
    $("#active-expand-second").click(function() {
               $("#expand-title-second").css('display','block');
                $("#expand-title-first, #expand-title-third, #expand-title-foth").css('display','none'); 
                return false;                     
            });  
    $("#active-expand-third").click(function() {
               $("#expand-title-third").css('display','block');
                $("#expand-title-second, #expand-title-first, #expand-title-foth").css('display','none'); 
                return false;                     
            });  
    $("#active-expand-foth").click(function() {
               $("#expand-title-foth").css('display','block');
                $("#expand-title-second, #expand-title-third, #expand-title-first").css('display','none'); 
                return false;                     
            });  
   
 	$(".container_numbers").waypoint(function() {
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 2000,
			easing: 'swing',
			step: function() {
				$(".container_numbers span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".container_numbers span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				// "font-size": "1em",
				numberStep: comma_separator_number_step},
				2000);
		});
		this.destroy();

	}, {
		offset: '20%'
	});
	$(".skills").waypoint(function() {
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 2000,
			easing: 'swing',
			step: function() {
				$(".skills-items span h3 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".skills span h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				// "font-size": "1em",
				numberStep: comma_separator_number_step},
				2000);
		});
		this.destroy();

	}, {
		offset: '20%'
	});


           

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

// $(window).scroll(function(){

// 	var st = $(this).scrollTop();

// 	$(".center-head").css({
// 		"transform": "translate(0%," + st/20 + "%"
// 	});

// 	$("").css({
// 		"transform": "translate(0% ," + st/1.9 + "%"
// 	});

// 	$("").css({
// 		"transform": "translate(0% ," + st + "%"
// 	});

// });


 

    

 