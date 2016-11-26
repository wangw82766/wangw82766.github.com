// JavaScript Document
function abc(a,b,p){
	var oLi=document.getElementById(a);
	var oA=document.getElementById(b);
	var oP=document.getElementById(p);
		oLi.onmouseover=function(){
			oA.style.display='none';
			oP.style.display='block';
			}
			
			oLi.onmouseout=function(){
			oA.style.display='block';
			oP.style.display='none';
			}
			
	}
	function list(u,x){
		var oUl=document.getElementById(u);
		var aLi=oUl.getElementsByTagName('li');
		var oDiv_box=document.getElementById(x);
		var aDiv=oDiv_box.getElementsByTagName('div')
			for(var i=0;i<aLi.length;i++){
				aLi[i].index=i;
				aLi[i].onmouseover=function(){
					for(var i=0;i<aLi.length;i++){
						aLi[i].className='';
						aDiv[i].className='';
						}
					this.className='cont3_liact';
					aDiv[this.index].className='cont3_mshow';
					}
			}
	
	}

	
window.onload=function(){
	abc('li1','a1','p1');
	abc('li2','a2','p2');
	abc('li3','a3','p3');
	abc('li4','a4','p4');
	abc('li5','a5','p5');
	abc('li6','a6','p6');
	abc('li7','a7','p7');
	abc('li8','a8','p8');
	abc('li9','a9','p9');
	list('cont3_list1','box1');
	list('cont3_list2','box2');

	var aCont_Ul=document.getElementById('cont_lb_ul');
	var aContLi=aCont_Ul.getElementsByTagName('li');
	var aConta=document.getElementById('cont_lb_a');
	var aContImg=aConta.getElementsByTagName('img');
			for(var i=0;i<aContLi.length; i++){	
			aContLi[i].index=i;
			aContLi[i].onmouseover=function(){	
			 	for(var j=0;j<aContLi.length;j++){
					aContLi[j].className='';
					aContImg[j].className='';
					}
				this.className='active';
				aContImg[this.index].className='show_img';
			  }
			}
	var oContDiv=document.getElementById('cont_rb_list');
	var aContDiv_li=oContDiv.getElementsByTagName('li');
	var aDiv= oContDiv.getElementsByTagName('div');
	var crr = ['0','-94','-189','-284']
		for(var i=0;i<aContDiv_li.length;i++){
			aContDiv_li[i].index=i;
			aContDiv_li[i].onmouseover=function(){
				for(var j=0;j<aContDiv_li.length;j++){
					aContDiv_li[j].style.backgroundPosition = '';
					aDiv[j].className='cont_rb_list';
					}
				this.style.backgroundPosition=crr[this.index]+'px -320px';
				aDiv[this.index].className='show_cont_rb';
		}
	}


	var oCont2Ul=document.getElementById('cont2_left_ul');
	var aBtn_li=oCont2Ul.getElementsByTagName('li');
	var oCont2Div=document.getElementById('cont2_pic');
	var aCont2Img=oCont2Div.getElementsByTagName('img');
	var arr = ['0','-109','-219','-329','-439','-549']
	for(var i=0; i<aBtn_li.length; i++){
		aBtn_li[i].index=i;
		aBtn_li[i].onmouseover = function(){
			for(var i=0; i<aBtn_li.length; i++){
				aBtn_li[i].style.backgroundPosition = '';
				aCont2Img[i].className='';
		 	}
			this.style.backgroundPosition=arr[this.index]+'px -471px';
				aCont2Img[this.index].className='cont2_img';
		}
	}
	
	
		var oCont2_rUl=document.getElementById('cont2_rightul');
		var aCont2Li=oCont2_rUl.getElementsByTagName('li')
		var aCont2Div=oCont2_rUl.getElementsByTagName('div')
		for(var i=0;i<aCont2Li.length;i++){
			aCont2Li[i].onmouseover=function(){
				for(var i=0;i<aCont2Li.length;i++){
					aCont2Li[i].className='';
					}
				this.className='li_active';
				}
				
			}

		var oUlBox=document.getElementById('cont3_r_bbox');
		var aLi=oUlBox.getElementsByTagName('li');
		var oDiv=document.getElementById('cont3r_list');
		var aUl=oDiv.getElementsByTagName('ul');
			for(var i=0;i<aLi.length;i++){
				aLi[i].aaa=i;
				aLi[i].onmouseover=function(){
					for(var j=0;j<aLi.length;j++){
						aLi[j].className='';
						aUl[j].className='';
						}
					aUl[this.aaa].className='show_box';
					this.className='cont3_r_active';
				}
			}
}