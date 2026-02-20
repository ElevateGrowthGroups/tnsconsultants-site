(function(){
  // Footer year
  var y = document.querySelectorAll("[data-year]");
  var year = new Date().getFullYear();
  y.forEach(function(el){ el.textContent = year; });

  // Mobile nav toggle
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if(btn && nav){
    btn.addEventListener("click", function(){
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();