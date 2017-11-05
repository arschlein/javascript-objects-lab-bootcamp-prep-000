var recipes = {}
function updateObjectWithKeyAndValue(object, key, value){
object[key] = value;
return object;
  var newObject = Object.assign({}, object, {key: value})
  return newObject;
}
