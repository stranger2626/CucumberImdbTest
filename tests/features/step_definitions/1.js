var inherit = (function () {
 	var F = function () {};
 	return function (C, P) {
 		F.prototype = P.prototype;
 		C.prototype = new F();
 		C.uber = P.prototype;
 		C.prototype.constructor = C;}
 	}());

a = {
	x:5,
	y:3
};

b = {z:1,q:4};

Object.assign(a,b);

console.log(a);