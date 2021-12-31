const params = new URLSearchParams(document.location.search).get("type");

if (params === "member") {
  $("#members-tab").addClass("active");
  $("#members").addClass("active show");
} else {
  $("#professor-tab").addClass("active");
  $("#professor").addClass("active show");
}
