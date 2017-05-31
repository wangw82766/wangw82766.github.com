//身份证号码为18位，验证
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

//			验证生日
function IsBiryhday(num) {
	var reg = /^[0-9]{4}-(0[0-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
	if(!reg.test(num)) {
		return false;
	}
	return true;
}
//			验证年龄
function IsAge(num) {
	var reg = /^(1[89]|[2-4][0-9]|5[0-5])$/;
	if(!reg.test(num)) {
		return false;
	}
	return true;
}
//			获取浏览器传来的name的值
function QueryString(val) {
	var uri = window.location.search;
	var re = new RegExp("" + val + "=([^&?]*)", "ig");
	return((uri.match(re)) ? (uri.match(re)[0].substr(val.length + 1)) : null);
}
//			判断手机号是否正确
function IsMobile(value) {
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if(!myreg.test(value)) {
		return false;
	}
	return true;
}
//			查找小字符串是否在数组里
function findInarr(obj, arr) {
	for(var i = 0; i < arr.length; i++) {
		if(obj == arr[i]) {
			return true;
		}
	}
	return false;
}