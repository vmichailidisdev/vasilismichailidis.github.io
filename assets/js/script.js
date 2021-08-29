;(function () {
  window.addEventListener('load', function () {
    let loader = document.getElementsByClassName('loader')[0]
    loader.classList.add('loader--hide')
    let mainContent = document.getElementsByClassName('main-content')[0]
    mainContent.classList.add('main-content--animation')
  })
})()
