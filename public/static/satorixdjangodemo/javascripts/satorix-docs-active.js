$(document).on("turbolinks:load", function() {
  function e(e) {
    var t = e.getAttribute("aria-hidden");
    e.classList.toggle("active"),
      "true" === t
        ? e.setAttribute("aria-hidden", "false")
        : e.setAttribute("aria-hidden", "true");
  }
  var t = window.location.hash;
  t &&
    ((selected = $('a[href$="' + t + '"]').parent(".doc-nav-item")),
    $(".doc-nav-item")
      .not(selected)
      .removeClass("active"),
    $(selected).addClass("active"));
  var n = document.querySelector("button.doc-nav-button"),
    i = document.querySelector("nav#documentation-navigation"),
    a = document.querySelector("div.doc-overlay");
  window.innerWidth < 960 && i.setAttribute("aria-hidden", "true"),
    n &&
      (n.addEventListener("click", function() {
        e(i), e(a);
      }),
      a.addEventListener("click", function() {
        e(i), e(a);
      }));
});
