function dateFromString(dateString) {
  // Assumed format YYYY-MM-DD
  var parts = dateString.split('-');
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function formatDate(date) {
  var dayOfWeek = dayOfWeekForIndex(date.getDay());
  var month = shortMonthForIndex(date.getMonth());
  var dayOfMonth = date.getDate();
  return dayOfWeek + ", " + month + " " + dayOfMonth;
}

function shortDayOfWeekForIndex(index) {
  return dayOfWeekForIndex(index).substring(0, 3);
}

function dayOfWeekForIndex(index) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"][index];
}

function shortMonthForIndex(index) {
  return monthForIndex(index).substring(0, 3);
}

function monthForIndex(index) {
  return ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November",
    "December"][index];
}

function getBeginningOfToday() {
  var date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}
