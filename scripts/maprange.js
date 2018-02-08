module.exports = function (i,iL,iH,oL,oH, limit = true) {
  var newVal;
  if (limit) {
    i<iL?newVal=oL:i>iH?newVal=oH:newVal=(oL + (oH - oL) * (i - iL) / (iH - iL));
  } else {
    newVal=(oL + (oH - oL) * (i - iL) / (iH - iL));
  }
  return newVal;
}
