const params = new URLSearchParams(document.location.search).get("type");

if (params === "member") {
  $("#members-mobile-tab").addClass("active");
  $("#members-mobile").addClass("active show");
} else {
  $("#professor-mobile-tab").addClass("active");
  $("#professor-mobile").addClass("active show");
}
