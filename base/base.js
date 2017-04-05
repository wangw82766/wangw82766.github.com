
//设置字体 rem px/100
window.addEventListener('DOMContentLoaded', function () {
    var shuping = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var timer = null;
    //设置字体
    function setFontSize() {
        var w = document.documentElement.clientWidth || document.body.clientWidth;
        document.documentElement.style.fontSize = parseInt(100 * w / 720) + 'px';
    };
    setFontSize();
    window.addEventListener(shuping, function () {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);
}, false);
//身份证校验 18位 最后可能是X或x
function IDCardCheck(num) {
	num = num.toUpperCase();
	// 身份证号码为18位，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
	var len, re;
	len = num.length;
	if(len < 18 || len > 18) {
		return false;
	}
	if(len == 18) {
		re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/);
		var arrSplit = num.match(re);
		// 检查生日日期是否正确
		var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);

		var bGoodDay;
		bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
		if(!bGoodDay) {
			return false;
		} else {
			// 检验18位身份证的校验码是否正确。
			var valnum;
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
			var nTemp = 0,
				i;
			for(i = 0; i < 17; i++) {
				nTemp += num.substr(i, 1) * arrInt[i];
			}
			valnum = arrCh[nTemp % 11];
			if(valnum != num.substr(17, 1)) {
				return false;
			}
			return true;
		}
	}
	return false;
}

/**
 * @description 是否是微信
 */
function IsWeChatBrower() {
	var ua = window.navigator.userAgent;
	if(ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}
/**
 * @description 是否是ipad
 */
function IsIPadBrower() {
	var ua = window.navigator.userAgent;
	return ua.match(/(iPad).*OS\s([\d_]+)/);
}
/**
 * @description 是否是iphone
 */
function IsIPhoneBrower() {
	var ua = window.navigator.userAgent;
	return !IsIPadBrower() && ua.match(/(iPhone\sOS)\s([\d_]+)/);
}

/**
 * @description 是否是android
 */
function IsAndroidBrower() {
	var ua = window.navigator.userAgent;
	return ua.match(/(Android)\s+([\d.]+)/);
}
//姓名验证
function nameverification(n){
	var e=/^(([\u4e00-\u9fa5]{1,10})|([a-zA-Z]{1,10}))$/;
	if(e.test(n)){
		return true;
	}else{
		return false;
	}
}

//校验是不是空 或undef
function IsDefine(value) {
	if(value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == 'NULL' || typeof(value) == 'undefined') {
		return false;
	} else {
		value = value + "";
		value = value.replace(/\s/g, "");
		if(value == "") {
			return false;
		}
		return true;
	}
}

//校验手机号
function IsMobile(value) {
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if(!myreg.test(value)) {
		return false;
	}
	return true;
}
//判断金额 5-500
function isInt(num) {
	var s = /^([5-9]{1}|[1-9]{1}\d{1}|[1-4]\d{2}|5[0]{2})$/;
	if(s.test(num)) {
		return true;
	}
	return false;
}
// 判断月
function IsMonth(num) {
	var r = /^([1-9]|[1-5][0-9]|60)$/;
	if(r.test(num)) {
		return true;
	}
	return false;
}
//---------------------------------------------------------------------------------------------------------

//截取浏览器url的字符
function QueryString(val) {
	var uri = window.location.search;
	var re = new RegExp("" + val + "=([^&?]*)", "ig");
	return((uri.match(re)) ? (uri.match(re)[0].substr(val.length + 1)) : null);
}



