/**
 * 封装h5 plus
 * @author 郭磊
 * */
var AppH5Plus = {
	"Device": {
		"GetProperties": function() {
			if(window.plus) {
				return {
					"imei": plus.device.imei,
					"imsi": plus.device.imsi,
					"model": plus.device.model,
					"vendor": plus.device.vendor,
					"uuid": plus.device.uuid,
					"volume": plus.device.getVolume(),
				};
			}
			return false;
		},
		"GetImei": function() {
			if(window.plus) {
				return plus.device.imei;
			}
			return false;
		},
		"GetImsi": function() {
			if(window.plus) {
				return plus.device.imsi;
			}
			return false;
		},
		"GetModel": function() {
			if(window.plus) {
				return plus.device.model;
			}
			return false;
		},
		"GetImsi": function() {
			if(window.plus) {
				return plus.device.imsi;
			}
			return false;
		},
		"GetVendor": function() {
			if(window.plus) {
				return plus.device.vendor;
			}
			return false;
		},
		"GetUuId": function() {
			if(window.plus) {
				return plus.device.uuid;
			}
			return false;
		},
		"Dial": function(number, confirm) {
			if(window.plus) {
				return plus.device.dial(number, confirm);
			}
			return false;
		},
		"Beep": function(time) {
			if(window.plus) {
				return plus.device.beep(time);
			}
			return false;
		},
		"SetWakelock": function(confirm) {
			if(window.plus) {
				return plus.device.setWakelock(confirm);
			}
			return false;
		},
		"IstWakelock": function(confirm) {
			if(window.plus) {
				return plus.device.isWakelock();
			}
			return false;
		},
		"Vibrate": function(time) {
			if(window.plus) {
				return plus.device.vibrate(time);
			}
			return false;
		},
		"SetVolume": function(value) {
			if(window.plus) {
				return plus.device.setVolume(value);
			}
			return false;
		},
		"GetVolume": function() {
			if(window.plus) {
				return plus.device.getVolume();
			}
			return false;
		},
		"Screen": {
			"GetProperties": function() {
				if(window.plus) {
					return {
						"resolutionHeight": plus.screen.resolutionHeight,
						"resolutionWidth": plus.screen.resolutionWidth,
						"scale": plus.screen.scale,
						"dpiX": plus.screen.dpiX,
						"dpiY": plus.screen.dpiY,
						"brightness": plus.screen.getBrightness(),
					};
				}
				return false;
			},
			"GetResolutionHeight": function() {
				if(window.plus) {
					return plus.screen.resolutionHeigh;
				}
				return false;
			},
			"GetResolutionWidth": function() {
				if(window.plus) {
					return plus.screen.resolutionWidth;
				}
				return false;
			},
			"GetScale": function() {
				if(window.plus) {
					return plus.screen.scale;
				}
				return false;
			},
			"GetDpiX": function() {
				if(window.plus) {
					return plus.screen.dpiX;
				}
				return false;
			},
			"GetDpiY": function() {
				if(window.plus) {
					return plus.screen.dpiY;
				}
				return false;
			},
			"SetBrightness": function(value) {
				if(window.plus) {
					return plus.screen.setBrightness(value);
				}
				return false;
			},
			"GetBrightness": function(value) {
				if(window.plus) {
					return plus.screen.getBrightness();
				}
				return false;
			},
			"LockOrientation": function(value) {
				if(window.plus) {
					return plus.screen.lockOrientation(value);
				}
				return false;
			},
			"UnLockOrientation": function(value) {
				if(window.plus) {
					return plus.screen.unlockOrientation();
				}
				return false;
			},

		},
		"GetDisplay": function() {
			if(window.plus) {
				return {
					"resolutionHeight": plus.display.resolutionHeight,
					"resolutionWidth": plus.display.resolutionWidth,
				};
			}
			return false;
		},
		"NetWork": {
			"GetCurrentType": function() {
				if(window.plus) {
					var currentNetworkType = plus.networkinfo.getCurrentType();
					if(currentNetworkType == plus.networkinfo.CONNECTION_UNKNOW)
						return "unknown";
					if(currentNetworkType == plus.networkinfo.CONNECTION_NONE)
						return "none";
					if(currentNetworkType == plus.networkinfo.CONNECTION_ETHERNET)
						return "ethernet";
					if(currentNetworkType == plus.networkinfo.CONNECTION_WIFI)
						return "wifi";
					if(currentNetworkType == plus.networkinfo.CONNECTION_CELL2G)
						return "2g";
					if(currentNetworkType == plus.networkinfo.CONNECTION_CELL3G)
						return "3g";
					if(currentNetworkType == plus.networkinfo.CONNECTION_CELL4G)
						return "4g";
					return currentNetworkType;
				}
				return false;
			},
		},
		"OS": {
			"GetProperties": function() {
				if(window.plus) {
					return {
						"name": plus.os.name,
						"language": plus.os.language,
						"version": plus.os.version,
						"vendor": plus.os.vendor,
					};
				}
				return false;
			},
			"GetName": function() {
				if(window.plus) {
					return plus.os.name;
				}
				return false;
			},
			"GetLanaguage": function() {
				if(window.plus) {
					return plus.os.language;
				}
				return false;
			},
			"GetVersion": function() {
				if(window.plus) {
					return plus.os.version;
				}
				return false;
			},
			"GetVendor": function() {
				if(window.plus) {
					return plus.os.vendor;
				}
				return false;
			}
		},
	},
	"Storage": {
		"GetLength": function() {
			if(window.plus) {
				return plus.storage.getLength();
			}
			return false;
		},
		"GetItem": function(key) {
			if(window.plus) {
				return plus.storage.getItem(key);
			}
			return false;
		},
		"SetItem": function(key, value) {
			if(window.plus) {
				return plus.storage.setItem(key, value);
			}
			return false;
		},
		"RemoveItem": function(key) {
			if(window.plus) {
				return plus.storage.removeItem(key);
			}
			return false;
		},
		"Clear": function() {
			if(window.plus) {
				return plus.storage.clear();
			}
			return false;
		},
	},
	"WebView": {
		"CloseAllById": function(id) {
			var pageObjects = plus.webview.all();
			for(var i = 0; i < pageObjects.length; i++) {
				if(pageObjects[i].id == id) {
					pageObjects[i].hide();
//					if(AppH5Plus.Device.OS.GetName().toLowerCase()=="android"){
//						pageObjects[i].close();
//					}else{
//						pageObjects[i].hide();
//					}
					
					
				}

			}
		},
		"CloseAllByUrl": function(url) {
			var pageObjects = plus.webview.all();
			for(var i = 0; i < pageObjects.length; i++) {
				if(pageObjects[i].getURL() == url) {
					pageObjects[i].close();
				}

			}
		},
		"HideAllById": function(id) {
			var pageObjects = plus.webview.all();
			for(var i = 0; i < pageObjects.length; i++) {
				if(pageObjects[i].id == id) {
					pageObjects[i].hide();
				}

			}
		},
		"HideAllByUrl": function(url) {
			var pageObjects = plus.webview.all();
			for(var i = 0; i < pageObjects.length; i++) {
				if(pageObjects[i].getURL() == url) {
					pageObjects[i].hide();
				}

			}
		}
	},
	"Push":{
		"GetClientInfo":function(){
			return plus.push.getClientInfo();
		}
	},
	"Runtime":{
		"OpenUrl":function(url){
			plus.runtime.openURL(url);
		}
	},
	"Payment":{
		"Channels":null,
		"AliPayChannel":null,
		"WeichatPayChannel":null,
		"GetChannels":function(){
			plus.payment.getChannels(function(e){
				AppTools.Log.OutPut("支付通道获取成功",e);
				AppH5Plus.Payment.Channels=e;
				for(var i=0;i<AppH5Plus.Payment.Channels.length;i++){
					var channel=AppH5Plus.Payment.Channels[i];
					if(channel.id=="alipay"&&channel.serviceReady){
						AppH5Plus.Payment.AliPayChannel=channel;
					}
					if(channel.id=="wxpay"&&channel.serviceReady){
						AppH5Plus.Payment.WeichatPayChannel=channel;
					}
				}
			},function(e){
				//获取支付通道失败
				AppTools.Log.OutPut("支付通道获取失败",e);
			});
		},
		"DoPay":function(channel,statement,successFun,errorFun){
			//执行支付操作
			plus.payment.request(channel,statement,successFun,errorFun);
		}
	}
};