// 代码整理：懒人之家 lanrenzhijia.com
$(document).ready(function(){
		document.ondragstart=function(){return false;}//ie禁止拖拽
		document.onselectstart=function(){return false;}//ie禁止选定

		canvas_size={x:$("#canvas").width(),y:$("#canvas").height()};
		canvas_offset={x:$("#canvas")[0].offsetLeft,y:$("#canvas")[0].offsetTop};
		origin={x:0,y:0}
		end={x:0,y:0}
		type=0;
        drawable=false;
        color_changeable=false;
        
		canvas=document.getElementById("canvas");
		canvas2=document.getElementById("canvas2");

		context=canvas.getContext('2d');
		context.strokeStyle="#00aeef";
		fill_canvas("#ffffff");
		context.lineWidth = 1;
		context2=canvas2.getContext('2d');
		context2.strokeStyle="#00aeef";
		context2.lineWidth = 1;
		canvas_rgb={r:1,g:1,b:1};

		canvas2.addEventListener('touchstart',function(event){
			drawable=true;
			origin.x=event.clientX-canvas_offset.x;
        	origin.y=event.clientY-canvas_offset.y;
		},false);
		canvas2.addEventListener('touchend',function(event){
			canvas_backup=context.getImageData(0, 0, canvas.width, canvas.height);
		},false);
		document.addEventListener('touchend',function(event){
			if((type==1||type==3||type==4)&&drawable==true){
				drawable=false;
				context2.clearRect(0,0,canvas_size.x,canvas_size.y);
				end.x=event.clientX-canvas_offset.x;
	        	end.y=event.clientY-canvas_offset.y;
				draw(context);
			}else
				drawable=false;
			color_changeable=false;
		},false);
       	document.addEventListener("touchmove",function(event){
            if(drawable==false)return;
            if(type==0){
            	end.x=event.clientX-canvas_offset.x;
            	end.y=event.clientY-canvas_offset.y;
	    		draw(context);
	    		origin.x=end.x;
	    		origin.y=end.y;
            }else if(type==1||type==3||type==4||type==5){
            	end.x=event.clientX-canvas_offset.x;
            	end.y=event.clientY-canvas_offset.y;
            	if(type==5){
            		fill_canvas('#ffffff',end.x-10,end.y-10,20,20);
	    			return;
            	}
            	else
            		context2.clearRect(0,0,canvas_size.x,canvas_size.y);
	    		draw(context2);
            }
            else if(type==2){
            	end.x=event.clientX-canvas_offset.x;
            	end.y=event.clientY-canvas_offset.y;
	    		draw(context);
            }
        },false);

		var img = new Image();
		img.src="img/color.bmp";
		$(img).bind("load",function(){
			canvas_color=document.getElementById("canvas_color");
			context3=canvas_color.getContext('2d');
			context3.drawImage(this, 0, 0,this.width,this.height);
			canvas_color_data = context3.getImageData(0, 0, canvas_color.width, canvas_color.height);
			canvas_color.addEventListener("touchstart",function(event){
				var idx = ((event.clientX-canvas_color.offsetLeft-1) + (event.clientY-canvas_color.offsetTop-1) * canvas_color_data.width) * 4;
                var r = canvas_color_data.data[idx + 0];
                var g = canvas_color_data.data[idx + 1];
                var b = canvas_color_data.data[idx + 2];
                $("#color_span").css("background-color","rgb("+r+","+g+","+b+")");
                change_attr(-1,-1,"rgb("+r+","+g+","+b+")");
                color_changeable=true;
			},false);
			canvas_color.addEventListener("touchmove",function(event){
				if(color_changeable==false)
					return;
				var x=event.clientX-canvas_color.offsetLeft-1;
				if(x>=canvas_color_data.width||x<0)
					return;
				var y=event.clientY-canvas_color.offsetTop-1;
				if(y>=canvas_color_data.height||y<0)
					return;
				var idx = (x + y * canvas_color_data.width) * 4;
                var r = canvas_color_data.data[idx + 0];
                var g = canvas_color_data.data[idx + 1];
                var b = canvas_color_data.data[idx + 2];
                $("#color_span").css("background-color","rgb("+r+","+g+","+b+")");
                change_attr(-1,-1,"rgb("+r+","+g+","+b+")");
			},false);
		});

		$("#close_window").bind("click",function(){
			$("#forbiden_back").fadeOut(300);
			$("#pic_url").val('');
		});
		
		$("#open_pic").bind("click",function(){
			$("#forbiden_back").fadeOut(300);
			open_img($("#pic_url").val());
			$("#pic_url").val('');
		});

		open_img("img/5.jpg");
		var sizebar=$("#size_bar");
		size_bar.addEventListener("touchstart",function(event){
			var thumb=$("#size_thumb");
			var main_w=$(this).width();
			var mainLeft=$(this).offset().left;
			thumb.css("left",event.clientX-mainLeft-thumb.width()/2+"px");
			$("#size_span").html(Math.ceil($(thumb).position().left/main_w*5)+1);
			change_attr(-1,$("#size_span").html(),-1);
			document.addEventListener("touchmove",size_bar_move);
			document.addEventListener("touchend",function unbind(event){
				document.removeEventListener("touchmove",size_bar_move);
				document.removeEventListener("touchend",unbind);
			});
		},false);
	
		var rchannelbar=document.getElementById("r_channel_bar");
		
		rchannelbar.addEventListener("touchstart",function(event){
			var thumb=$("#r_channel_thumb");
			var main_w=$(this).width();
			var mainLeft=$(this).offset().left;
			thumb.css("left",event.clientX-mainLeft-thumb.width()/2+"px");
			document.addEventListener("touchmove",{c:"r"},channel_bar_move);
			document.addEventListener("touchend",function unbind(event){
				canvas_rgb.r=0.5+$(thumb).position().left/main_w;
				change_channel();
				document.removeEventListener("touchmove",channel_bar_move);
				document.removeEventListener("touchend",unbind);
			});
		},false);
		var g_channel_bar=document.getElementById("g_channel_bar");
		g_channel_bar.addEventListener("touchstart",function(event){
			var thumb=$("#g_channel_thumb");
			var main_w=$(this).width();
			var mainLeft=$(this).offset().left;
			thumb.css("left",event.clientX-mainLeft-thumb.width()/2+"px");
			document.addEventListener("touchmove",{c:"g"},channel_bar_move);
			document.addEventListener("mouseup",function unbind(event){
				canvas_rgb.g=0.5+$(thumb).position().left/main_w;
				change_channel();
				document.removeEventListener("touchmove",channel_bar_move);
				document.removeEventListener("touchend",unbind);
			});
		},false);
		b_channel_bar= document.getElementById("b_channel_bar") ;
		b_channel_bar.addEventListener("touchstart",function(event){
			var thumb=$("#b_channel_thumb");
			var main_w=$(this).width();
			var mainLeft=$(this).offset().left;
			thumb.css("left",event.clientX-mainLeft-thumb.width()/2+"px");
			document.addEventListener("touchmove",{c:"b"},channel_bar_move);
			document.addEventListener("touchend",function unbind(event){
				canvas_rgb.b=0.5+$(thumb).position().left/main_w;
				change_channel();
				document.removeEventListener("touchmove",channel_bar_move);
				document.removeEventListener("touchend",unbind);
			});
		},false);

	});

	function size_bar_move(e){
		var thumb=$("#size_thumb");
		var main_w=$("#size_bar").width();
		var mainLeft=$("#size_bar").offset().left;
		if(e.clientX-mainLeft<0)
			thumb.css("left",-thumb.width()/2+"px");
		else if(e.clientX-mainLeft>main_w)
			thumb.css("left",main_w-thumb.width()/2+"px");
		else
			thumb.css("left",e.clientX-mainLeft-thumb.width()/2+"px");
		$("#size_span").html(Math.ceil($(thumb).position().left/main_w*5)+1);
		change_attr(-1,$("#size_span").html(),-1);
	}

	function channel_bar_move(e){
		var c=e.data.c;
		var thumb=$("#"+c+"_channel_thumb");
		var main_w=$("#"+c+"_channel_bar").width();
		var mainLeft=$("#"+c+"_channel_bar").offset().left;
		if(e.clientX-mainLeft<0)
			thumb.css("left",-thumb.width()/2+"px");
		else if(e.clientX-mainLeft>main_w)
			thumb.css("left",main_w-thumb.width()/2+"px");
		else
			thumb.css("left",e.clientX-mainLeft-thumb.width()/2+"px");
	}
	
	function draw(context){
		if(type==0||type==1||type==2){
			context.beginPath();
	        context.moveTo(origin.x,origin.y);
	        context.lineTo(end.x,end.y);
	        context.stroke();
        }else if(type==3){
	   		var k = ((end.x-origin.x)/0.75)/2,
		      	w = (end.x-origin.x)/2,
		     	h = (end.y-origin.y)/2,
		     	x=(end.x+origin.x)/2,
		     	y=(end.y+origin.y)/2;
			context.beginPath();
			context.moveTo(x, y-h);
			context.bezierCurveTo(x+k, y-h, x+k, y+h, x, y+h);
			context.bezierCurveTo(x-k, y+h, x-k, y-h, x, y-h);
			context.closePath();
			context.stroke();
        }else if(type==4){
        	context.beginPath();
	        context.rect(origin.x,origin.y,end.x-origin.x,end.y-origin.y);
	        context.stroke();
        }
	}

	function change_attr(tp,sz,clr){
		if(tp!=-1)
			type=tp;
		if(clr!=-1){
			context.strokeStyle=clr;
			context2.strokeStyle=clr;
		}
		if(sz!=-1){
			context.lineWidth = sz;
			context2.lineWidth = sz;
		}
	}

	function clear_canvas(){
		context.clearRect(0,0,canvas_size.x,canvas_size.y);
	}

	function fill_canvas(col,orix,oriy,w,h){
		context.fillStyle=col;
		context.fillRect(orix,oriy,w,h);
	}

	function gaussian(){
		var pi=3.141592654,//get gaussian_array
		e=2.718281828459,
		g=2,
		gaussian_array=new Array(),
		temp=0;
		for(var x=0;x<2*g+1;x++){
			gaussian_array[x]=new Array();
			for(var y=0;y<2*g+1;y++){
				gaussian_array[x][y]=Math.pow(e,-((x-g)*(x-g)+(y-g)*(y-g))/(2*g*g))/(2*pi*g*g);
				temp+=gaussian_array[x][y];
			}
		}
		for(var x=0;x<2*g+1;x++){
			for(var y=0;y<2*g+1;y++){
				gaussian_array[x][y]/=temp;
			}
		}
		
		var can_data = context.getImageData(0, 0, canvas.width, canvas.height);
		var can_data2 = context.getImageData(0, 0, canvas.width, canvas.height);
	
		for(var i=g;i<canvas.width-g-1;i++){
			for(var j=g;j<canvas.height-g-1;j++){
				 var idx = (i + j * can_data2.width) * 4;
				 can_data2.data[idx + 0] = get_gaussian_average(can_data,g,gaussian_array,0,i,j);
				 can_data2.data[idx + 1] = get_gaussian_average(can_data,g,gaussian_array,1,i,j);
				 can_data2.data[idx + 2] = get_gaussian_average(can_data,g,gaussian_array,2,i,j);
			}
		}
		context.putImageData(can_data2, 0, 0);
		canvas_backup=context.getImageData(0, 0, canvas.width, canvas.height);
	}

	function change_channel(){
		can_data = context.getImageData(0, 0, canvas.width, canvas.height);
		for(var i=0;i<canvas.width;i++){
			for(var j=0;j<canvas.height;j++){
				 var idx = (i + j * can_data.width) * 4;
				 can_data.data[idx + 0]=canvas_backup.data[idx + 0]*canvas_rgb.r;
				 can_data.data[idx + 1]=canvas_backup.data[idx + 1]*canvas_rgb.g;
				 can_data.data[idx + 2]=canvas_backup.data[idx + 2]*canvas_rgb.b;
			}
		}
		context.putImageData(can_data, 0, 0);
	}

	function get_gaussian_average(can_data,g,gaussian_array,channel,x,y){
		var t=0;
		for(var i=0;i<2*g+1;i++){
			for(var j=0;j<2*g+1;j++){
				var idx = (x+i-g + (y+j-g) * can_data.width) * 4;
				t+=can_data.data[idx + channel]*gaussian_array[i][j];
			}
		}
		return t;
	}

	function open_img(url){
		var img = new Image();
		img.src=url;
		$(img).bind("load",function(){
			fill_canvas('#ffffff',0,0,canvas_size.x,canvas_size.y);
			context.drawImage(this, -100, -100,this.width,this.height);
			canvas_backup=context.getImageData(0, 0, canvas.width, canvas.height);
		});
	}
	
	// 代码整理：懒人之家 lanrenzhijia.com