// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var returnArray = [];
  function inspectNode (node) {
    for(var i = 0; i < node.childNodes.length; i++){
      if ( node.childNodes[i].classList !== undefined && node.childNodes[i].classList.contains(className) ){
        returnArray.push(node.childNodes[i]);
      }
      inspectNode(node.childNodes[i]);
    }
  }
  inspectNode(document.body.parentElement);
  return returnArray;
};
