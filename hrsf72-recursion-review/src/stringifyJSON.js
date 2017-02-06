// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if ( typeof obj === "string" ) {
    return '"' + obj + '"';
  }
  
  if ( obj && obj.constructor === Array ){
    var returnArr = [];
    for(var i = 0; i < obj.length; i++){
      if( typeof obj[i] === 'function' ){
        continue;
      }
      returnArr.push( stringifyJSON(obj[i]) );
    }
    return '[' + returnArr.join(',') + ']';
  }

  if ( obj && typeof obj === "object" ) {
    var returnArr = [];
    for (var x in obj) {
      if ( obj[x] === undefined || typeof obj[x] === 'function' ) {
        continue;
      }
      returnArr.push(stringifyJSON(x) + ':' + stringifyJSON(obj[x]));
    }
    return '{' + returnArr.join(',') + '}';
  }



  return '' + obj;


};
