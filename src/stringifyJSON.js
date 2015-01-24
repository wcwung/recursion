// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof(obj) === "function") {
  	return null;
  }
  if (typeof(obj) === "undefined") {
  	return null;
  }
  if (obj === null) {
  	return "null";
  }
  if (typeof(obj) === "number") {
  	return obj.toString();
  }
  if (typeof(obj) === "string") {
  	return '"' + obj + '"';
  }
  if (typeof(obj) === "boolean") {
    return obj.toString();
  }
  if (Array.isArray(obj)) {
  	var newArr = [];
    for (var i = 0; i < obj.length; i++) {
      newArr.push(stringifyJSON(obj[i]));
    }
    return '[' + newArr + ']';
  }
  if (typeof(obj) === "object") {
  	var result = [];
  	for (var key in obj) {
  		var val = stringifyJSON(obj[key]);
      var objKey = stringifyJSON(key);
			if (val !== null && val !== undefined) {
  			result.push(objKey + ":" + val);
  		}
  	}
  	return "{" + result.join(",") + "}";
  }
};
