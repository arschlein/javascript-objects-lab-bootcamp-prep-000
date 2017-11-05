var recipes = {}
function updateObjectWithKeyAndValue(object, key, value){
//object[key] = value;
//return object;
  var newObject = object.assign({}, object, {key: value})
  return newObject;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  var newObject = object.assign({}, object);
  delete newObject[key];
  return newObject;
}