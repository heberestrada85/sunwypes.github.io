$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteDropdown = function() {

		$('nav .dropdown').hover(function(){
			var $this = $(this);
			$this.addClass('show');
			$this.find('> a').attr('aria-expanded', true);
			$this.find('.dropdown-menu').addClass('show');
		}, function(){
			var $this = $(this);
				$this.removeClass('show');
				$this.find('> a').attr('aria-expanded', false);
				$this.find('.dropdown-menu').removeClass('show');
		});


		$('#dropdown04').on('show.bs.dropdown', function () {
		  console.log('show');
		});

	  $('.navbar .dropdown > a').click(function(){
	    location.href = this.href;
	  });
	}; 
	siteDropdown();

	function updateCurvedText($curvedText, radius) {
		console.log('information')
		$curvedText.css("min-width", "initial");
		$curvedText.css("min-height", "initial");
		var w = $curvedText.width(),
			h = $curvedText.height();
		$curvedText.css("min-width", w + "px");
		$curvedText.css("min-height", h + "px");
		var text = $curvedText.text();
		var html = "";

		Array.from(text).forEach(function (letter) {
			html += `<span>${letter}</span>`;
		});
		$curvedText.html(html);

		var $letters = $curvedText.find("span");
		$letters.css({
			position: "absolute",
			height:`${radius}px`,
			// backgroundColor:"orange",
			transformOrigin:"bottom center"
		});

		var circleLength = 2 * Math.PI * radius;
		var angleRad = w/(2*radius);
		var angle = 2 * angleRad * 180/Math.PI/text.length;

		$letters.each(function(idx,el){
			$(el).css({
				transform:`translate(${w/2}px,0px) rotate(${idx * angle - text.length*angle/2}deg)`
			})
		});
	}

	var $curvedText = $(".curved-text");
	updateCurvedText($curvedText,500);
});