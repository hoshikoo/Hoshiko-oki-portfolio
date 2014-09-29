$(document).ready(function(){



	$('.curtains>li').css('position', 'fixed');
   $('.curtains').curtain({
       scrollSpeed: 300,
       controls: '.menu',
       curtainLinks: '.curtain-links',
       nextSlide: function(){
        console.log("ok");
       }
   });
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    scrollorama.animate('#section-2 h1',{
    	delay: 400, duration:300, property:'left', end:-860
    });

    scrollorama.animate('#section-1 h1',{
    	delay: 30, duration:200, property:'left', end:860
    });

    scrollorama.animate('#section-1 h2',{
    	delay: 30, duration:200, property:'left', end:860
    });

	scrollorama.animate('#rocket',{
    	delay:0, duration:400, property:'top', end:-20
    });
    scrollorama.animate('#rocket',{
    	delay:100, duration:600, property:'width', end:10
    });


    scrollorama.animate('#space-cat',{
    	delay: 100, duration:100, property:'rotate', start:-720
    });
    

     scrollorama.animate('#space-cat',{
    	delay: 50, duration:150, property:'rotate', start:-720
    });
     scrollorama.animate('#space-cat',{
    	delay: 200, duration:600, property:'left', end:-50
    });
     scrollorama.animate('#space-cat',{
    	delay: 200, duration:600, property:'width', end:-10
    });

     scrollorama.animate('#space-cat',{
    	delay: 200, duration:600, property:'top', end:-50
    });

    scrollorama.animate('#satelite',{
    	delay: 300, duration:600, property:'width', start:200
    });

    scrollorama.animate('#starSolid1',{
    	delay: 10, duration:100, property:'width', end:100
    });

    scrollorama.animate('#starSolid2',{
    	delay: 10, duration:100, property:'width', end:20
    });

    scrollorama.animate('#starline2',{
    	delay: 10, duration:400, property:'rotate', start:-720
    });
    scrollorama.animate('#starline2',{
    	delay: 10, duration:400, property:'width', start:100
    });

    scrollorama.animate('#starline1',{
    	delay: 10, duration:600, property:'rotate', start:720
    });
    scrollorama.animate('#starline1',{
    	delay: 100, duration:600, property:'top', end:600
    });

    scrollorama.animate('.mynameis',{
        delay: 900, duration:500, property:'margin-top', end:100
    });

    scrollorama.animate('.mynameis',{
        delay: 900, duration:500, property:'left', end:-1000
    });
    scrollorama.animate('.mynameis',{
        delay: 1200, duration:150, property:'opacity', end:0
    });

    scrollorama.animate('.solar-system',{
        delay: 1000, duration:100, property:'opacity', end:0.5
    });

    scrollorama.animate('.record',{
        delay: 1100, duration:1200, property:'rotate', end:900
    });

    scrollorama.animate('.record',{
        delay: 1100, duration:1200, property:'opacity', end:0.5
    });

    scrollorama.animate('.record',{
        delay: 1200, duration:1200, property:'margin-top', end:0
    });
    scrollorama.animate('.record',{
        delay: 1400, duration:1000, property:'margin-left', end:0
    });
    scrollorama.animate('.record',{
        delay: 1400, duration:1000, property:'width', end:50
    });

    scrollorama.animate('.meandmusic',{
        delay: 1100, duration:900, property:'rotate', end:-700
    });

    scrollorama.animate('.news',{
        delay: 2000, duration:150, property:'left', start:-700
    });

    scrollorama.animate('.news',{
        delay: 2000, duration:150, property:'rotate', end:700
    });

    scrollorama.animate('#lastpage',{
        delay: 4600, duration:100, property:'left', start: -2000
    });

    scrollorama.animate('#lastpage2',{
        delay: 4700, duration:100, property:'left', start: -2000
    });

    scrollorama.animate('#lastpage3',{
        delay: 4400, duration:100, property:'left', end: 2000
    });

    scrollorama.animate('#lastpage4',{
        delay: 4500, duration:100, property:'left', end: 2000
    });

});