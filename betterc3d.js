console.log("Loaded");
var main = document.getElementsByClassName("btn--big")[0]

if (main) {
    main.click()
}

var btnsToClick = []
var currentIndex = 0

function getElements() {
  var btnHtml = document.getElementsByClassName("btn-main")
  if (btnHtml) {
    var btn = Array.from(btnHtml);
    btn.forEach(function(element, index) {
        if (element.text.includes(".stl")){
            btnsToClick.push(btnHtml[index]);
        }
    });
  }
}

function iterateBtns() {
  if(currentIndex <= btnsToClick.length) {
    setTimeout(function(){
      btnsToClick[currentIndex].click()
      currentIndex++;
      iterateBtns();
    }, 1000)
  }
}

getElements();
iterateBtns()