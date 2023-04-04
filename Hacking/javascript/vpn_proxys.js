var Vpn_proxy = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < Vpn_proxy.length; i++) {

  Vpn_proxy[i].addEventListener("click", function() {
    this.classList.toggle("active");
   
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}