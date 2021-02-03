
$(document).ready( function() {


    $("#pagetop").click(function(){
        
        var speed = 600; 
        var position = 0;
 
        $('body,html').animate({scrollTop:position}, speed, 'easeInOutQuint');
        return false;
 
    });

    $(".bMenu").click(function(){
        $('.menu-trigger').toggleClass('active');
        $(".rbox").toggleClass('active');
        $(".menuwrap").toggleClass('active');

    });

    $("h1").click(function(){
        window.location.href = 'index.html'; 
    });

    $(".qa dt").click(function(){


        $(this).toggleClass('active');
        $(this).next('dd').toggleClass('open');

    });
    
        
    //Current on current page

    $('header ul a').each(function(){
        
        var $href = $(this).attr('href');

        var targetStr = ".html" ;
        var regExp = new RegExp( targetStr, "g" ) ;
        var $href = $href.replace( regExp , "" ) ;

        console.log($href);
        console.log(location.href);


        if(location.href.match($href)) {
            $(this).addClass('current');
        } else {
            $(this).removeClass('current');
        }

    });

    $(".footlogo,.headlogo").click(function(){

        window.location.href = "/index.html";

    });

    $(".mailform").click(function(){

        window.location.href = "/contact.html";

    });

  
    //EnterKeyFix
    $("form input[type!=image][type!=button][type!=submit][type!=reset],form select").keypress(function(e){
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
        return false;
        }else{
        return true;
        }
    });
  
    // if($('#load-target').length){
        
    //     $('#load-target').imagesLoaded(function(){ // id=”container”内の全画像のローディングが完了呼　　
    //         LoadWait();
    //     });

    //     console.log('faild');
    // }
    // else{
    //     LoadWait();
    //     console.log('normal');
    // }

    telkiller();
    isPhone();
    scroller();

    $('li.headsec').attr({
        ontouchstart:'',
    });
    
});



$(window).scroll(function(){
 

    if ($(this).scrollTop() > 90) {

        var ua = navigator.userAgent;
       
        if (ua.indexOf('iPhone') > 0 /* || ua.indexOf('Android') > 0 */ && ua.indexOf('Mobile') > 0) {
        
            
        } else if (ua.indexOf('iPad') > 0 /* || ua.indexOf('Android') > 0 */ ) {

            $('header').addClass('scroll');

            

        } else {
            
            if($(window).width() > 767){//元は767

                $('header').addClass('scroll');
              
            }

        }


        $('#pagetop').addClass('active');

    }
   
    else {
        $('header').removeClass('scroll');
        $('#pagetop').removeClass('active');
    }

});

// $(window).on('load', function(){
    
//     setTimeout(function(){
//         $('.loader').addClass('active');
//     },400);
// });


function LoadWait() {
   
    setTimeout(function(){
        $('.loader').addClass('active');
    },400);
}


function telkiller(){
    

    var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);
if (!isMobile) {
$('a[href^="tel:"]').on('click', function(e) {
e.preventDefault();
});
}

 }

 $(function()
{
	if(!isPhone())
	{
		return;
	}
    $('span[data-action=call]').each(function() {
        var $ele = $(this);		
        var telorg = $(this).text();
        if(telorg==""){
          var telorg = $(this).children('img').attr('alt');
        }
        var telfix = telorg.replace(/[^0-9]/g, '');		
        $ele.wrap('<a href="tel:' + telfix + '"></a>');
    });
});

function isPhone()
{
	// Edgeを弾く
	if(navigator.userAgent.indexOf('Edge') >= 0)
	{
		return false;
	}
	// Android且つMobileだった場合、電話機とみなす
	if(navigator.userAgent.indexOf('Android') >= 0 && navigator.userAgent.indexOf('Mobile') >= 0)
	{
		return true;
	}
	// 最後はiPhoneかどうかを判定し、結果を返す
	return(navigator.userAgent.indexOf('iPhone') >= 0);
}


function scroller(){

    $('a[href^="#"]').click(function() {


        $('.menu-trigger').removeClass('active');
        $(".rbox").removeClass('active');
        $(".menuwrap").removeClass('active');

        // スクロールの速度
        var speed = 1000; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = (target.offset().top);
        position = position - 130;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'easeInOutQuint');


        return false;
    });
}
