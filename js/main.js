window.onload=function(){
	var oBox=document.getElementById('box');
	var oUl=oBox.getElementsByTagName('ul')[0];
	var aLi=oUl.children;
	for(var i=0;i<aLi.length-1;i++){
		(function(i){
			setTimeout(function(){
			aLi[i].style.width='20%'	
			aLi[i].style.left=0;
			aLi[i].style.top=0;
			aLi[i].style.opacity=1
			aLi[i].style.fontSize='1rem'
			aLi[i].style.transition='2s'
			
			
		},100)
		})(i)
		setTimeout(function(){
			aLi[5].style.left=0;
		},2000)
	}
}

// JavaScript Document
DOMReady(function(){
	
	var oBox=document.getElementById('box');
	
	
	//导航运动	
	var oUl=oBox.getElementsByTagName('ul')[0];
	var aLi=oUl.children;
	var oNavBox=aLi[aLi.length-1];
	var timer=null;
	var aPos=[];
	//导航运动
	for(var i=0;i<aLi.length-1;i++){
		aLi[i].onmouseover=function (){
			for(var i=0;i<aLi.length-1;i++){
					aLi[i].className='';
			}
			oNavBox.style.display='block';
			clearInterval(timer);
			move(oNavBox, this.offsetLeft);
		};
	}
	for(var i=0;i<aLi.length-1;i++){
		aLi[i].onmouseout=function(){
			tab();	
		};
	}
	
	function tab(){
		if(aPos.length){
			move(oNavBox,aPos[aPos.length-1]*aLi[0].offsetWidth);
		}else{
			move(oNavBox,0);
			
		}	
	}
	
	for(var i=0;i<aLi.length-1;i++){
		
		aLi[i].index=i;
		aLi[i].onclick=function (ev){
			var oEvent = ev||event;
			oEvent.cancelBubble=true;
			
			move(oNavBox, this.offsetLeft);
			
			//内容高度
			//oCon.style.top=-aDiv[0].offsetHeight*this.index+'px';
			startMove(oCon,{top:-aDiv[0].offsetHeight*(this.index)});
			aPos.push(this.index);
			top=-aDiv[0].offsetHeight*(this.index);
			
		};
	}
	//move
	var speed=0;
	var left=oNavBox.offsetLeft;
	function move(obj,iTarget){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			speed+=(iTarget-left)/5;
			speed*=0.7;
			left+=speed;
			oNavBox.style.left=Math.round(left)+'px';
			if(iTarget==Math.round(left)&&Math.abs(speed)<1){
				clearInterval(obj.timer);
			}
		},30);
	}
	//首页
	var oCon=document.getElementById('content');
	var aDiv=oCon.children;
	var clientW=document.documentElement.clientWidth||document.body.clientWidth;
	var clientH2=document.documentElement.clientHeight||document.body.clientHeight;
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].style.width=clientW+'px';
		aDiv[i].style.height=clientH2+'px';
		aDiv[i].style.overflow='hidden';
	}
	document.documentElement.style.fontSize=clientW*0.02+'px';
	//窗口改变大小
	window.onresize=function(){
		var clientW=document.documentElement.clientWidth||document.body.clientWidth;
		var clientH=document.documentElement.clientHeight||document.body.clientHeight;
		document.documentElement.style.fontSize=clientW*0.02+'px';
		
		translateZ=clientW*0.2;
		tab();
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].style.width=clientW+'px';
			aDiv[i].style.height=clientH+'px';
		}
		if(top<0){
			//oCon.style.top=-aPos[aPos.length-1]*clientH+'px';
			startMove(oCon,{top:-aPos[aPos.length-1]*clientH});
			top=-aPos[aPos.length-1]*clientH;
		}else{
			//oCon.style.top=0+'px';
			startMove(oCon,{top:0});
		}
		
		
		
	};
	//给元素滚轮事件
	var top=oCon.offsetTop;
	var j=0;
	addWheel(oCon,function(bDown){
		if(bDown){
			var clientW=document.documentElement.clientWidth||document.body.clientWidth;
			var clientH=document.documentElement.clientHeight||document.body.clientHeight;
			if(top==-(aDiv.length-1)*clientH)return;
			//oCon.style.top=-clientH+top+'px';
			startMove(oCon,{top:-clientH+top});
			top=-clientH+top;
			j=Math.floor(Math.abs(top/clientH));
			//导航滚轮
			for(var i=0;i<aLi.length-1;i++){
				aLi[i].className='';
			}
			aLi[j].className='active';
			oNavBox.style.display='none';
			aPos.push(j);
			
			
		}else{
			var clientW=document.documentElement.clientWidth||document.body.clientWidth;
			var clientH=document.documentElement.clientHeight||document.body.clientHeight;
			if(top==0)return;
			startMove(oCon,{top:clientH+top});
			top=clientH+top;
			j=Math.floor(Math.abs(top/clientH));
			aPos.push(j);
			//导航滚轮
			for(var i=0;i<aLi.length-1;i++){
				aLi[i].className='';
			}
			aLi[j].className='active';
			oNavBox.style.display='none';
			
			
		}
	});
	//js_worker选项卡--JS作品
	var oJsWorkerBox=document.getElementById('js_worker_box');
	var aDiv1=getByClass(oJsWorkerBox,'js_box')
	var oOl=document.getElementById('ol1');
	var aLi2=oOl.children;
	//选项卡
	for(var i=0;i<aLi2.length;i++){
		(function(index){
			aLi2[i].onclick=function(){
				for(var i=0;i<aLi2.length;i++){
					aLi2[i].className='none';
					aDiv1[i].style.display='none';
				}	
				this.className='on';
				aDiv1[index].style.display='block';
			};
		})(i);	
	}
	//穿墙
	var oCile=document.getElementById('js_worker_cile');
	var aDiv2 =oCile.children;
	var oCile2=document.getElementById('js_worker_cile2');
	var oCile3=document.getElementById('js_worker_cile3');
	var oCile4=document.getElementById('js_worker_cile4');
	var aDiv3 =oCile2.children;
	var aDiv4 =oCile3.children;
	
	for(var i=0;i<aDiv2.length;i++){
		through(aDiv2[i]);
		through(aDiv3[i]);
		through(aDiv4[i]);
		
	}
	//aDiv2每一个效果
	for(var i=0;i<aDiv2.length;i++){
		(function(index){
			aDiv2[i].onclick=function(){
				window.open('twjs/js'+(index+1)+'.html','_black')	
			};
			aDiv3[i].onclick=function(){
				window.open('twjs/js_page2-'+(index+1)+'.html','_black')	
			};
			aDiv4[i].onclick=function(){
				window.open('twjs/js_page3-'+(index+1)+'.html','_black')	
			};
					
		})(i);
	}
	//H5  点击跳转
	var oH5conction1=document.getElementById('H5conction1')
	var aH5Li=oH5conction1.children;
	for(var i=0;i<aH5Li.length;i++){
		(function(index){
			aH5Li[i].onclick=function(){
				window.open('H5/'+index+'.html','_black')	
			};
			
					
		})(i);
	}
	//H5选项卡
	var oH5=document.getElementById('H5');
	var oH5box=document.getElementById('H5_box');
	var oOl=document.getElementById('ol3');
	var aBtn=oOl.children;
	
	var oH5l=oH5box.offsetWidth/2;
	aBtn[1].onclick=function(){
		oH5box.style.left='-100%'
		this.chassName='.H5 ol .ictive'
	}
	aBtn[0].onclick=function(){
		oH5box.style.left='0'
		this.chassName='.H5 ol .ictive'
	}
	
	
	
	//css作品-js
	var oCssUl=document.getElementById('ul1');
	var aCssLi=oCssUl.children;
	var now=2;
	var ready=true;
	function a(n)
	{
		if(n>0)
		{
			return n%aCssLi.length;
		}
		else
		{
			return (n%aCssLi.length+aCssLi.length)%aCssLi.length;
		}
	}
	var oL=document.getElementById('css_main_l');
	var oR=document.getElementById('css_main_r');
	function csstab()
	{
		for(var i=0;i<aCssLi.length;i++)
		{
			aCssLi[i].className='';
		}
		aCssLi[a(now-2)].className='l2';
		aCssLi[a(now-1)].className='l';
		aCssLi[a(now)].className='cur';
		aCssLi[a(now+1)].className='r';
		aCssLi[a(now+2)].className='r2';
		function fnEnd()
		{
			ready=true;
			aCssLi[a(now)].removeEventListener('transitionend', fnEnd, false);
		}
		aCssLi[a(now)].addEventListener('transitionend', fnEnd, false);
	}
	oR.onclick=function ()
	{
		if(ready==false)return;
		ready=false;
		now++;
		csstab(aCssLi);
	};
	oL.onclick=function ()
	{
		if(ready==false)return;
		ready=false;
		now--;
		csstab(aCssLi);
	};
	var oCur=document.getElementById('cur');
	var oR=document.getElementById('r');
	var oR2=document.getElementById('r2');
	var oL=document.getElementById('l');
	var oL2=document.getElementById('l2');
	var oR3=document.getElementById('r3');
	oCur.onclick=function(){
		window.open('css/爱奇艺/index.html','_black');	
	};
	oR.onclick=function(){
		window.open('css/美丽说/index.html','_black');	
	};
	oL.onclick=function(){
		window.open('css/灵魂回响首页/index.html','_black');	
	};
	oL2.onclick=function(){
		window.open('css/美丽说/index.html','_black');		
	};
	oR2.onclick=function(){
		window.open('css/灵魂回响首页/index.html','_black');	
	};
	oR3.onclick=function(){
		window.open('css/爱奇艺/index.html','_black');	
	};
//	//H5作品-js
//	var oH5=document.getElementById('h5');
//	var oH5Main=document.getElementById('H5_main');
//	var oH5Div=document.getElementById('div1');
//	var oH5Ul=document.getElementById('H5_ul');
//	var aH5Li=oH5Ul.getElementsByTagName('li');
//	
//	var speedX=0;
//	var speedY=0;
//	var lastX=0;
//	var lastY=0;
//	var H5timer=null;
//	var translateZ=0;
//	var bOk=false;
//	var x=0;
//	var y=0;
//	function H5Move(clientW){
//		if(bOk)return;
//		bOk=true;
//		translateZ=clientW*0.2;
//		clearInterval(H5timer);
//		var H5i=aH5Li.length-1;
//		H5timer=setInterval(function(){
//			aH5Li[H5i].style.WebkitTransform='rotateY('+H5i*(360/aH5Li.length)+'deg) translateZ('+translateZ+'px)';
//			H5i--;
//			if(H5i==-1){
//				clearInterval(H5timer);	
//				document.onmousedown=function(ev){
//					var disX=ev.clientX-x;
//					var disY=ev.clientY-y;
//					clearInterval(H5timer);
//					document.onmousemove=function(ev){
//						x=ev.clientX-disX;
//						y=ev.clientY-disY;
//						oH5Div.style.WebkitTransform='perspective(800px) rotateX('+-y/5+'deg)';
//						oH5Ul.style.WebkitTransform='rotateY('+x/5+'deg)';
//						speedX=x-lastX;
//						speedY=y-lastY;
//						lastX=x;
//						lastY=y;
//						};
//						document.onmouseup=function(){
//							document.onmousemove=null;
//							document.onmouseup=null;
//							clearInterval(H5timer);
//							H5timer=setInterval(function(){
//								x+=speedX;
//								y+=speedY;
//								speedX*=0.95;
//								speedY*=0.95;
//								oH5Div.style.WebkitTransform='perspective(800px) rotateX('+-y/5+'deg)';
//								oH5Ul.style.WebkitTransform='rotateY('+x/5+'deg)';	
//							},30);	
//						};
//						return false;
//					}
//				}
//			},300)
//	}
//	//clock
//	
//	var oDiv=document.getElementById('clock');
//	var oHour=document.querySelector('#clock .hour');
//	var oMin=document.querySelector('#clock .min');
//	var oSec=document.querySelector('#clock .sec');
//	
//	//生成刻度
//	for(var i=0;i<60;i++)
//	{
//		var oS=document.createElement('span');
//		
//		if(i%5)	//小的
//		{
//			oS.className='scaler';
//		}
//		else
//		{
//			oS.className='big_scaler';
//			if(i==0)
//			{
//				oS.innerHTML='<em>12<\/em>';
//			}
//			else
//			{
//				oS.innerHTML='<em>'+i/5+'<\/em>';
//			}
//			oS.children[0].style.WebkitTransform='rotate('+-6*i+'deg)';
//		}
//		
//		oS.style.WebkitTransform='rotate('+6*i+'deg)';
//		
//		oDiv.appendChild(oS);
//	}
//	
//	//走起来
//	function tick()
//	{
//		var oDate=new Date();
//		
//		oHour.style.WebkitTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
//		oMin.style.WebkitTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
//		oSec.style.WebkitTransform='rotate('+(oDate.getSeconds()+oDate.getMilliseconds()/1000)*6+'deg)';
//	}
//	
//	tick();
//	setInterval(tick, 30);

});