/*-----about section -----*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event,tabname) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  if (event) {
    event.currentTarget.classList.add("active-link");
  }

  document.getElementById(tabname).classList.add("active-tab");
}
/*

var sidemenu=document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px";
}
*/
