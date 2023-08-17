var items = document.querySelectorAll("li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top <= ((window.innerHeight - 500) || (document.documentElement.clientHeight - 500)) &&
      rect.left >= 0 &&
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight - 500) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    console.log(document.documentElement.clientHeight - 50);
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

// Particles
