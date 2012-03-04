// JScript source code

var codexStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var codexInt = [];
for (var i = 0; i < 256; i++) {
    var idx = codexStr.indexOf(String.fromCharCode(i));
    codexInt[i] = idx;
}
var Base64 =
			{
			    // assuming that the input string encodes a number of bytes divisible by 3
			    decode: function (input) {
			        var output = new Array(input.length * 3 / 4);
			        var inLength = input.length;
			        var outIndex = 0;
			        for (var i = 0; i < inLength; i += 4) {
			            var enc1 = codexInt[input.charCodeAt(i)];
			            var enc2 = codexInt[input.charCodeAt(i + 1)];
			            var enc3 = codexInt[input.charCodeAt(i + 2)];
			            var enc4 = codexInt[input.charCodeAt(i + 3)];

			            var chr1 = (enc1 << 2) | (enc2 >> 4);
			            var chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			            var chr3 = ((enc3 & 3) << 6) | enc4;


			            output[outIndex] = chr1;
			            output[outIndex + 1] = chr2;
			            output[outIndex + 2] = chr3;
			            outIndex += 3;
			        }

			        return output;
			    }
			}