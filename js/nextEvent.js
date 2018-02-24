$(function() {
  var nextEvent = getNextEvent(schedule);
  if (validEvent(nextEvent)) {
    setEventValues(nextEvent);
  } else {
    setNoEventValues();
  }
});

function getNextEvent(schedule) {
  var next = {};
  var curDate = getBeginningOfToday();
  var smallestPositiveDiff = Number.MAX_SAFE_INTEGER;
  for (var i in schedule) {
    var event = schedule[i];
    var eventDate = dateFromString(event.date);
    var diff = eventDate - curDate;
    if (diff >= 0 && diff < smallestPositiveDiff) {
      smallestPositiveDiff = diff;
      next = event;
    }
  }
  return next;
}

function validEvent(event) {
  return event !== null && !$.isEmptyObject(event);
}

function setEventValues(event) {
  var title = mashTitleAndDate(event);
  var description = event.description;
  _setEventTitleAndDescription(title, description);
}

function setNoEventValues() {
  _setEventTitleAndDescription(
    "No upcoming events", "Check back soon for more!");
}

function _setEventTitleAndDescription(title, description) {
  $(".next-class > .card-title").text(title);
  $(".next-class > .card-content").html(description);
}

function mashTitleAndDate(event) {
  var date = dateFromString(event.date);
  var formattedDate = formatDate(date);
  return event.title + " (" + formattedDate + ")";
}
