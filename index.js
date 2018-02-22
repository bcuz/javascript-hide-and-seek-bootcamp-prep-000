function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var nested = document.getElementById('nested')
  return nested.getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
}

}

function deepestChild() {
  var ele = document.getElementById('grand-node')

  while (ele.querySelector('div')) {
    var deeper = ele.querySelector('div')
  }

  return deeper
}
