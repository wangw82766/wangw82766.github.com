function DOMReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){
			fn&&fn();	
		},false);	
	}else{
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState=='complete'){
				fn&&fn();
			}
		});
	}
}

//滚轮事件封装

function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,true);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}
function addWheel(obj,fn){
	function fnWheel(ev){
		var bDown=false;
		bDown=ev.wheelDelta?ev.wheelDelta<0:ev.detail>0;
		fn&&fn(bDown,ev);
		ev.preventDefault&&ev.preventDefault();
		return false;
	}
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		addEvent(obj,'DOMMouseScroll',function(ev){
			var oEvent=ev||event;
			fnWheel(oEvent);
		});
	}else{
		addEvent(obj,'mousewheel',function(ev){
			var oEvent=ev||event;
			fnWheel(oEvent);
		});
	}
}

//getByClass
function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var re = new RegExp('\\b'+sClass+'\\b');
		var aResult = [];
		var aEle = oParent.getElementsByTagName('*');
		for(var i=0;i<aEle.length;i++){
			if(aEle[i].className.search(re)!=-1){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}
}

//startMove
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
function startMove(obj,json,options){
	//判断默认值
	options = options||{};
	options.time = options.time||700;
	options.type = options.type||'ease-out';
	var start = {};
	var dis = {};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		if(isNaN(start[name])){
			switch(name){
				case 'left':
					start[name]=obj.offsetLeft;
				break;
				case 'top':
					start[name]=obj.offsetTop;
				break;
				case 'width':
					start[name]=obj.offsetWidth;
				break;
				case 'height':
					start[name]=obj.offsetHeight;
				break;
				case 'opacity':
					start[name]=1;
				break;
				case 'borderWidth':
					start[name]=0;
				break;
			}
		}
		dis[name]=json[name]-start[name];
	}
	var count= Math.floor(options.time/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
					var cur = start[name]+dis[name]*n/count;
				break;
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*Math.pow(a,3);
				break;
				case 'ease-out':
					var a = 1-n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
				break;
			}
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if(count==n){
			clearInterval(obj.timer);
			options.end&&options.end();
		}
	},30);
}

//穿墙
function hoverDir(obj,oEvent){
	var w = obj.offsetWidth/2+obj.offsetLeft;
	var h = obj.offsetHeight/2+obj.offsetTop;
	var x = w-oEvent.clientX;
	var y = h-oEvent.clientY;
	return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
}
function through(oBox){
	var oSpan = oBox.getElementsByTagName('span')[0];
	var w=oSpan.offsetWidth;
	var h=oSpan.offsetHeight;
	oBox.onmouseover=function(ev){
		var oEvent = ev||event;
		var oFrom = oEvent.fromElement||oEvent.relatedTarget;
		if(oBox.contains(oFrom))return;
		var dir = hoverDir(oBox,oEvent);
		switch(dir){
			case 0:
				oSpan.style.left=w+'px';
				oSpan.style.top=0;
				break;
			case 1:
				oSpan.style.left=0;
				oSpan.style.top=h+'px';
				break;
			case 2:
				oSpan.style.left=-w+'px';
				oSpan.style.top=0;
				break;
			case 3:
				oSpan.style.left=0;
				oSpan.style.top=-h+'px';
				break;
		}
		startMove(oSpan,{left:0,top:0});
	};
	oBox.onmouseout=function(ev){
		var oEvent = ev||event;
		var oTo = oEvent.toElement||oEvent.relatedTarget;
		if(oBox.contains(oTo))return;
		var dir = hoverDir(oBox,oEvent);
		switch(dir){
			case 0:
				startMove(oSpan,{top:0,left:w});
				break;
			case 1:
				startMove(oSpan,{top:h,left:0});
				break;
			case 2:
				startMove(oSpan,{top:0,left:-w});
				break;
			case 3:
				startMove(oSpan,{top:-h,left:0});
				break;
		}
	};
}
	
//事件绑定
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		attachEvent('on'+sEv,fn)
	}
}
