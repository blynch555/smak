$(document).ready(function() {

	// Фикcированная шапка при скролле
			$(".top_line").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					$(".top_line").addClass("default").fadeIn('fast');
				} else {
					$(".top_line").removeClass("default").fadeIn('fast');
				};
			});
			
	//валидатор для формы
	$("input, textarea").jqBootstrapValidation();

	//карусель
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
	//вторая карусель
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
 
   //сортировка картинок
	$("#portfolio_grid").mixItUp();

	//добавление активности ссылкам
	$(".s_portfolio li, .main-mnu li").click(function() {
	$(".s_portfolio li, .main-mnu li").removeClass("active");
		$(this).addClass("active");
	});

 //роздаем id для попапа
	$(".portfolio_item").each(function(i) {
			$(this).find("a").attr("href", "#work_" + i);
			$(this).find(".podrt_descr").attr("id", "work_" + i);
		});

	//Попап для картинок
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
	//навигацыя по сайту
 	$(".scroll-to, .scroll-down, .arrow-up, .main-mnu ul a").mPageScroll2id({
  scrollSpeed: 900,
  offset: 60
	});
	//менюшка
	$(".toggle-mnu").click(function() {
			$(this).toggleClass("on");
			$(".main-mnu").slideToggle();
			return false;
		});

	// 2-я менюшка
	$(".toggle-menu").click(function() {
			$(this).toggleClass("in");
			$(".second_menu").slideToggle();
			return false;
		});

 //скрытие, открытие блока с видео
  $("A#trigger").click(function() { 
    	$("DIV#box").slideToggle(); 
     	return false; 
    });
  //скрытие, открытие блока с описанием сотрудников
  $("A#trigger-2").click(function() { 
     	$("#expand").slideToggle(); 
     return false; 
     });
      
   // Смена описания сотрудников
    $("#active-expand-first").click(function() {
               $("#expand-title-first").show(1000);
               $("#expand-title-second, #expand-title-third, #expand-title-foth").hide(1000);
                return false;                     
            });   
    $("#active-expand-second").click(function() {
               $("#expand-title-second").show(1000);
                $("#expand-title-first, #expand-title-third, #expand-title-foth").hide(1000); 
                return false;                     
            });  
    $("#active-expand-third").click(function() {
               $("#expand-title-third").show(1000);
                $("#expand-title-second, #expand-title-first, #expand-title-foth").hide(1000); 
                return false;                     
            });  
    $("#active-expand-foth").click(function() {
               $("#expand-title-foth").show(1000);
                $("#expand-title-second, #expand-title-third, #expand-title-first").hide(1000); 
                return false;                     
            });  

   //анимацыя чисел
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

	//запрещает перетягевать картинки при нажатии на них
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


 

    

 