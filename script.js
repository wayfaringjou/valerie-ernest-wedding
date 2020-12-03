const DateTime = luxon.DateTime;
const theWeddingDate = DateTime.fromISO("2020-12-18T14:00:00.000-05:00")
const hourExpressions = [
  "twelve",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve"
]
const dayTime = {
  AM: "o'clock in the morning",
  PM: "o'clock in the afternoon"
}
const weddingDayString = theWeddingDate.toLocaleString({weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'});
const weddingHourString = hourExpressions[theWeddingDate.hour > 12 
  ? theWeddingDate.hour - 12 
  : theWeddingDate.hour];
const weddingTimeCycleString = theWeddingDate.hour > 12
  ? dayTime['PM']
  : dayTime['AM'];
const weddingTimeFullString = `${weddingHourString} ${weddingTimeCycleString}`;

document.getElementById('js-date').innerText = `On ${weddingDayString}`
document.getElementById('js-time').innerText = weddingTimeFullString; 

const milliseconds = 1000
setInterval(
  function callback() {
    const now = DateTime.local();
    const interval = luxon.Interval.fromDateTimes(now, theWeddingDate);
    const counter = interval.toDuration(['days', 'hours', 'minutes', 'seconds']).toObject()
    document.getElementById('js-countdown').innerText = `
    ${counter.days}d ${counter.hours}h ${counter.minutes}m ${Math.floor(counter.seconds)}s`;
  },
  milliseconds
)