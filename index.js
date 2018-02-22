function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var nested = document.getElementById('nested')
  return nested.getElementsByClassName('target')[0]
}
