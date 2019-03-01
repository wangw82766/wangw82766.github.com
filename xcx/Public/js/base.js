$(function(){
	if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
		(function ($, window) {
		    window.addEventListener('DOMContentLoaded', function () {
		        var shuping = 'onorientationchange' in window ? 'orientationchange' : 'resize';
		        var timer = null;
		        //设置字体
		        function setFontSize() {
		            var w = document.documentElement.clientWidth || document.body.clientWidth;
		            document.documentElement.style.fontSize = parseInt(100 * w / 750) + 'px';
		            $('body').css('opacity',1);
		        };
		        setFontSize();
		        window.addEventListener(shuping, function () {
		            clearTimeout(timer);
		            timer = setTimeout(setFontSize, 300);
		        }, false);
		    }, false);
		})($, window);
	}
	
	/*load*/
	
	/*if(screenWidth>=1680&&screenWidth<1780){
		cutStrings(210,260,120,120,210,210,500);
	}else if(screenWidth>=1200&&screenWidth<1680){
		cutStrings(210,200,60,80,100,100,300);
	}else if(screenWidth>=1780){
		cutStrings(300,260,120,140,210,210,500);
	}else if(screenWidth>=1024&&screenWidth<1199){
		cutStrings(160,100,120,140,0,0,0);
	}else if(screenWidth<1023){
		cutStrings(160,100,120,140,0,0,0);
	}*/
	/*navBtn*/
	$("#listCloseBtn").click(function(){
		$(".list").stop(false,true).animate({
			"top":"-800px",
			"opacity":"0"
		},500);
	});
	navBtnBool=true;
	$(".navBtn").click(function(){
		$(this).toggleClass("wapBtnAn");
		var screenWidth=$(window).width();
		if(screenWidth>=1024){
			if(navBtnBool){
				$(".list").stop(false,true).animate({
					"top":"0px",
					"opacity":"1"
				},500);
			}else{
				$(".list").stop(false,true).animate({
					"top":"-800px",
					"opacity":"0"
				},500);
			}
			
		}else{
			
			if(navBtnBool){
				
				$(".nav").css("height",$(document.body).height()).show();
				$(".nav").animate({
					"right":"0px"	
				},500);
				navBtnBool=false;
			}else{
				$(".nav").hide();
				$(".nav").animate({
					"right":"-125px"	
				},500);
				
				navBtnBool=true;
			}
		}
		
	});
	
	
	$("#footChildCode").mouseover(function(){
		$(this).find(".childCode").stop(false,true).fadeIn(200);
	}).mouseleave(function(){
		$(this).find(".childCode").stop(false,true).fadeOut(200);
	});
	
	
	$("#listName").focus(function(){	
		if($(this).val()=="您的姓名"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("您的姓名");
		}
	});
	$("#listCompany").focus(function(){	
		if($(this).val()=="公司名称"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("公司名称");
		}
	});
	$("#listEmail").focus(function(){	
		if($(this).val()=="您的电话"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("您的电话");
		}
	});
	$("#listTitle").focus(function(){	
		if($(this).val()=="项目主题"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("项目主题");
		}
	});
	$("#listInfo").focus(function(){	
		if($(this).val()=="告诉我们您的项目基本信息"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("告诉我们您的项目基本信息");
		}
	});

	/*fixed*/
	var floatBool=false;
	$(window).scroll(function(){
		if($(this).scrollTop()>=200){
			if(!floatBool){
				$(".fixed").stop(false,true).fadeIn(500);
				floatBool=true;
			}
		}else{
			if(floatBool){
				$(".fixed").stop(false,true).fadeOut(500);
				floatBool=false;
			}
		}
	});
	$(".fixedTop").mouseover(function(){
		$(this).css("background","#666");
		var imageSrc=$(this).find(".fixedTopPointer").attr("src");
		if(imageSrc.indexOf("On.png")>0){}else{
			imageSrc=imageSrc.replace(".png","On.png");
		}
		$(this).find(".fixedTopPointer").attr("src",imageSrc);
	}).mouseleave(function(){
		$(this).css("background","#cbcbcb");
		var imageSrc=$(this).find(".fixedTopPointer").attr("src");
		if(imageSrc.indexOf("On.png")>0){
			imageSrc=imageSrc.replace("On.png",".png");
		}else{}
		$(this).find(".fixedTopPointer").attr("src",imageSrc);
	}).click(function(){
		$('body').animate({scrollTop:"0px"},500);
	});
	$(".fixedCode").mouseover(function(){
		$(".fixedCodeInfo").stop(false,true).fadeIn(500);
	}).mouseleave(function(){
		$(".fixedCodeInfo").stop(false,true).fadeOut(500);
	});
	

});


/*animateClassAdd*/
function anClasAdd(e,keyframes,stime,dtime,an,status){
	$(e).css({
		"animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
		"-moz-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
		"-webkit-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
		"-o-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
	});
}
/*cutString*/

function moveMain(ele){
	var top=parseInt($(ele).offset().top);
	var headerTop=parseInt($(".header").css("height"));
	top=top-headerTop;
	$('body').animate({scrollTop:top},500);
}
function contactSubmit(url,username,company,email,project,info){
	if($.trim(username)=="您的姓名"||$.trim(username)==""){alert("请填写您的姓名，便于我们的联系");return;}
	if($.trim(company)=="公司名称"||$.trim(company)==""){alert("请填写公司名称，便于我们的联系");return;}
	if($.trim(email)=="您的电话"||$.trim(email)==""){alert("请填写您的电话，便于我们的联系");return;}
	if($.trim(project)=="项目主题"||$.trim(project)==""){alert("请填写项目主题，便于我们的联系");return;}
	if($.trim(info)=="告诉我们您的项目基本信息"||$.trim(info)==""){alert("请填写您的项目基本信息，便于我们的联系");return;}

	$.post(
		url,
		{
			'username':username,
			'company':company,
			'email':email,
			'project':project,
			'info':info
		},
		function(data){
			if(data==1){
                alert("提交成功！我们会尽快联系您们。");
                $("#listName").val("您的姓名");
                $("#listCompany").val("公司名称");
                $("#listEmail").val("您的电话");
                $("#listTitle").val("项目主题");
                $("#listInfo").val("告诉我们您的项目基本信息");

                $("#listName1").val("您的姓名");
                $("#listCompany1").val("公司名称");
                $("#listEmail1").val("您的电话");
                $("#listTitle1").val("项目主题");
                $("#listInfo1").val("告诉我们您的项目基本信息");

			}else{
				alert("提交失败！");
			}
		}
		
	);
}

$(".telA .btn").click(function(){
    $('body').prepend($('.tel_pop'));
	$(".telpopbg").show();
	$(".tel_pop").show();
//	$(window).scrollTop(2256);
});
$(".telB .btn").click(function(){
    $('body').prepend($('.tel_pop'));
	$(".telpopbg").show();
	$(".tel_pop").show();
//	$(window).scrollTop(1750);
});
$(".telC .btn").click(function(){
    $('body').prepend($('.tel_pop'));
	$(".telpopbg").show();
	$(".tel_pop").show();
//	$(window).scrollTop(2230);
});
$(".telD .btn").click(function(){
    $('body').prepend($('.tel_pop'));
	$(".telpopbg").show();
	$(".tel_pop").show();
//	$(window).scrollTop(2130);
});
$(".tel .col").click(function(){
    $('body').prepend($('.tel_pop'));
	$(".telpopbg").hide();
	$(".tel_pop").hide();
});
