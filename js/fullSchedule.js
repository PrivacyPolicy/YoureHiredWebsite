$(function() {
  addEventsToTable(schedule);
  registerEventHandlers();
});

function addEventsToTable(schedule) {
  for (var i in schedule) {
    var event = schedule[i];
    addEventToTable(event);
  }
}

function addEventToTable(event) {
  var $template = addNewEventTemplate();
  populateTemplate($template, event);
}

function addNewEventTemplate() {
  var $templateElem = $("tr.template").clone();
  $templateElem.appendTo($(".schedule > table > tbody"));
  $templateElem.removeClass("template");
  return $templateElem;
}

function populateTemplate($template, event) {
  var date = dateFromString(event.date);
  if (isInPast(date)) {
    $template.addClass("past");
  }
  $template.find(".cell-month").text(date.getMonth() + 1);
  $template.find(".cell-day-of-week").text(
    shortDayOfWeekForIndex(date.getDay()));
  $template.find(".cell-day").text(date.getDate());
  $template.find(".cell-title").text(event.title);
  $template.find(".cell-description").text(event.description);
}

function isInPast(date) {
  return date <= getBeginningOfToday();
}

function registerEventHandlers() {
  $(".popup-link").click(function(event) {
    var $modal = $("#calendar-modal").modal();
    var $row = $(event.currentTarget);
    setModalTextFromRow($modal, $row);
  });
}

function setModalTextFromRow($modal, $row) {
  var weekday = $row.find(".cell-day-of-week").text();
  var month = $row.find(".cell-month").text();
  var day = $row.find(".cell-day").text();
  var title = $row.find(".cell-title").text();
  var description = $row.find(".cell-description").text();
  $modal.find(".modal-title").text(
    weekday + ", " + month + "/" + day + " " + title);
  $modal.find(".modal-description").text(description);
}
