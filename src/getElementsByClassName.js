// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var result = [];

  var getSpecifiedElement = function(element) {
  	var elementClass = element.classList;
  	var children = element.childNodes;
  	
  	if (elementClass) {
  		if (elementClass.contains(className)) {
  			result.push(element);
  		}
  	}

  	for (var i = 0; i < children.length; i++) {
  		getSpecifiedElement(children[i]);
  	}
  }

  getSpecifiedElement(document);
  return result;
};
