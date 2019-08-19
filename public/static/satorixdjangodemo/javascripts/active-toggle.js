$(document).ready(function() {
  var path = location.pathname;
  if (path == "/") {
      pageName = "home";
  } else if (path.startsWith("/polls")) {
    pageName = "polls";
  }

  document.querySelector("li[data-link-name='" + pageName + "']").classList.toggle("active");
});