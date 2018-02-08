module.exports = function (obj, temp) {
  Object.keys(obj).map(function(item, index) {
    obj[item].template = temp;
  });
  return obj
}
