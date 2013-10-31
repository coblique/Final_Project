
	//slides the element with class "menu_body" when paragraph with class "menu_head" is clicked
// $("#firstpane p.menu_head").click(function()
// {
//     $(this).css({backgroundImage:"url(down.png)"}).next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
//     $(this).siblings().css({backgroundImage:"url(left.png)"});
// });




// $('#contactus').hide();

// $('this').click(function(){
// 	$('this').show();
// });

// var SKIN = {
// 	init: function(){
// 		$('#face_selector').change(function(){
// 			var newPage = $('option_value').click(function(){
				
// 			})
// 		})
// 	}
// }


	// $('header').click(function() {
	//   $('header ').fadeOut( "slow", function() {
	//     // Animation complete.
	//   });
	// });


//$('nav ul li').click(function() { $(this).find('li').slideToggle(); });

var CONTACT = {
	init: function(){
		$('#contactus').hide();
		$('#contactclick').click(function(){
			$('#contactus').show(2000);


		});

	},
	inIt: function () {
		$('#arrow').click(function(){
			$('#contactus').hide(1000);
			$('footer').css('z-index: 100');
		});
	}
};

var SLIDER = {
	init: function(){
		$('.flexslider').flexslider();
	}
};

// var PRODUCT = {
// 	init: function(){
//  			$( '#mi-slider' ).catslider();
// 		 });
// 	}
// };
var BACK = {
	init: function(){
    	$('#go').click(function(){
        parent.history.back();
        return false;
    });

	}
}



$(document).ready(function(){

	CONTACT.init();
	CONTACT.inIt();
	BACK.init();
	SLIDER.init();
	// PRODUCT.init();



});
