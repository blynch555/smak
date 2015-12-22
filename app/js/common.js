$(document).ready(function() {


$("#portfolio_grid").mixItUp();

	$(".s_portfolio li, .main-mnu li").click(function() {
	$(".s_portfolio li, .main-mnu li").removeClass("active");
		$(this).addClass("active");
	});

	// $(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
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
               $("#expand-title-first").css('display','block', 'transition');
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

$(window).scroll(function(){

	var st = $(this).scrollTop();

	$(".center-head").css({
		"transform": "translate(0%," + st/20 + "%"
	});

	$("").css({
		"transform": "translate(0% ," + st/1.9 + "%"
	});

	$("").css({
		"transform": "translate(0% ," + st + "%"
	});

});


 

    

 