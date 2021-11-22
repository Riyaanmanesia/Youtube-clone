var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var subscribed = document.getElementById("btn");
menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
};

var count = 1;
subscribed.onclick = function () {
    if (count == 0) {
        subscribed.style.backgroundColor = "red";
        subscribed.style.color ="#fff";
        subscribed.innerHTML = "SUBSCRIBE";
        count = 1;        
    }
    else {
        subscribed.style.backgroundColor = "#ccc";
        subscribed.style.color ="#5a5a5a";
        subscribed.innerHTML = "SUBSCRIBED";
        count = 0;
    }
};

    