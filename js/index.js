$(function() {
  var nextEvent = getNextEvent(schedule);
  var title = mashTitleAndDate(nextEvent);
  var description = nextEvent.description;
  $(".next-class > .card-title").text(title);
  $(".next-class > .card-content").html(description);
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

function getBeginningOfToday() {
  var date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

function mashTitleAndDate(event) {
  var date = dateFromString(event.date);
  var formattedDate = formatDate(date);
  return event.title + " (" + formattedDate + ")";
}

function dateFromString(dateString) {
  // Assumed format YYYY-MM-DD
  var parts = dateString.split('-');
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function formatDate(date) {
  var dayOfWeek = dayOfWeekForIndex(date.getDay());
  var month = monthForIndex(date.getMonth());
  var dayOfMonth = date.getDate();
  return dayOfWeek + ", " + month + " " + dayOfMonth;
}

function dayOfWeekForIndex(index) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"][index];
}

function monthForIndex(index) {
  return ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index];
}
