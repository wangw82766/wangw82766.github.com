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
		//alert(top)
		if(this.index==3){
			H5Move();
		}
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