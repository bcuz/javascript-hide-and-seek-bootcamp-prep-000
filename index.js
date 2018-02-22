function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var nested = document.getElementById('nested')
  return nested.getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

}
