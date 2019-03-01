
if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){	
	/* 根据屏幕尺寸改变根元素大小 */
(function ($, window) {
    window.addEventListener('DOMContentLoaded', function () {
        var shuping = 'onorientationchange' in window ? 'orientationchange' : 'resize';
        var timer = null;

        //设置字体
        function setFontSize() {
            var w = document.documentElement.clientWidth || document.body.clientWidth;
            document.documentElement.style.fontSize = parseInt(100 * w / 750) + 'px';
        }
        setFontSize();
        window.addEventListener(shuping, function () {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }, false);
    }, false);
})($, window);

//手机端侧滑效果
var asd="0";
$(document).on("pageinit", function(){
    $('#page1').off("swipeleft");
    $('#page1').on("swipeleft",function(){
        if(asd=="1"){
           $('.ui-btn-left').removeClass('open');
            $('.ui-panel-dismiss').css('display','none');
            asd="0";
           $('.ui-btn-left').removeClass('open');
	        $('.ui-panel-dismiss').css('display','none');
	        $("#defaultpanel").panel("close");
	        $('.ui-panel-dismiss').css('display','none');
	        $('#defaultpanel').addClass('ui-panel-closed');
	        $('#defaultpanel').removeClass('ui-panel-open');
	        asd="0";
	        $('html,body').css('overflow-y','auto')
        }
    });
    return false;
});
$('.ui-btn-left').off('click');
$('.ui-btn-left').on('click', function () {
    if (asd=="1") {
           $('.ui-btn-left').removeClass('open');
           $('.ui-panel-dismiss').css('display','none');
           asd="0";
           $('.ui-btn-left').removeClass('open');
	        $('.ui-panel-dismiss').css('display','none');
	        $("#defaultpanel").panel("close");
	        $('.ui-panel-dismiss').css('display','none');
	        $('#defaultpanel').addClass('ui-panel-closed');
	        $('#defaultpanel').removeClass('ui-panel-open');
	        asd="0";
	        $('html,body').css('overflow-y','auto')
    } else {
        $('.ui-btn-left').addClass('open');
        $('.ui-panel-dismiss').css('display','block');
        asd="1";
        $('html,body').css('overflow-y','hidden')
    }
});
$('body').undelegate('.ui-panel-dismiss','click');
$('body').delegate('.ui-panel-dismiss','click',function(){
    if (asd=="1") {
           $('.ui-btn-left').removeClass('open');
           $('.ui-panel-dismiss').css('display','none');
           asd="0";
           $('.ui-btn-left').removeClass('open');
	        $('.ui-panel-dismiss').css('display','none');
	        $("#defaultpanel").panel("close");
	        $('.ui-panel-dismiss').css('display','none');
	        $('#defaultpanel').addClass('ui-panel-closed');
	        $('#defaultpanel').removeClass('ui-panel-open');
	        asd="0";
        $('html,body').css('overflow-y','auto')
    }
});
$('body').undelegate('#defaultpanel','click');
$('body').delegate('#defaultpanel','click',function(){
    if (asd=="1") {
        $('.ui-btn-left').removeClass('open');
        $('.ui-panel-dismiss').css('display','none');
        $("#defaultpanel").panel("close");
        $('.ui-panel-dismiss').css('display','none');
        $('#defaultpanel').addClass('ui-panel-closed');
        $('#defaultpanel').removeClass('ui-panel-open');
        asd="0";
        $('html,body').css('overflow-y','auto')
    }
});
	setTimeout(function(){
	    
	    var myScrollA;
	    $(function(){
	        setTimeout(function(){
	            myScrollA = new IScroll('#wrapperA', {
	                scrollbars: true,
	                mouseWheel: true,
	                interactiveScrollbars: true,
	                shrinkScrollbars: 'scale',
	                fadeScrollbars: true,
	                click:true,
	                scrollX: true,
	                bindToWrapper: true,
	                scrollY: true
	            });
	        },10);
	    });
	    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    },1000)
//	$('#defaultpanel .panel-content').css('height',$(window).height());
}