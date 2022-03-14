window.onscroll = function () {
    stickyHeader();
  };
  
  let header = document.getElementById("header");
  
  let sticky = header.offsetTop;
  
  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  let counterDisplayElem = document.querySelector('.counter-display');
  let counterMinusElem = document.querySelector('.counter-minus');
  let counterPlusElem = document.querySelector('.counter-plus');
  
  let count = 0;
  
  updateDisplay();
  
  let count(){
    // do whatever you like here

    setTimeout(yourFunction, 5000);
}

yourFunction();
  
  function updateDisplay(){
      counterDisplayElem.innerHTML = count;
  };