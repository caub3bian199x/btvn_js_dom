

//Bai 6
// var colorBlue = document.querySelector('div#backgroundColor button.js-btn-blue');
// var colorRed = document.querySelector('div#backgroundColor button.js-btn-red');
// // console.log(colorBlue, colorRed);
// function selectColor(color, rgb){
//     color.addEventListener('click', () => {
//        document.bgColor = rgb;
//     });
// }
// selectColor(colorBlue, 'blue');
// selectColor(colorRed, 'red');


//Bai10

// var dots = document.querySelector('div#showMore span.threeDots');
// var moreText = document.querySelector('div#showMore span.more');
// var btnText = document.querySelector('div#showMore button.js-btn-more')
// // console.log(dots, moreText, btnText)
// btnText.addEventListener('click', () => {
//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Show more";
//         moreText.style.display = "none";
//       } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Show less";
//         moreText.style.display = "inline";
//       }
// })


// bai13
var hours=0, minutes=0, seconds=0;
var timer;

function setTime(){
  seconds++;
  if(seconds==60){
    minutes++;
    seconds=0;
  }
  if(minutes == 60){
    hours++;
    minutes=0;
  } 
  disPlayTime();
  // console.log(seconds, minutes, hours)
}
// setInterval(setTime,1000);
var time_el = document.querySelector('div#stopWatch div.timer');
// console.log(time_el);
function disPlayTime(){
  var formatHours =hours, formatMinutes= minutes, formatSeconds= seconds;
  if(hours< 10){
    formatHours = '0' + hours;
  }
  if(minutes < 10){
    formatMinutes = '0' + minutes;
  }
  if(seconds<10){
    formatSeconds = '0'+seconds;
  }

  time_el.innerHTML = formatHours + ':' + formatMinutes + ':' + formatSeconds;
  // time_el.innerHTML = hours + ':' + minutes + ':' + seconds;
}


var btnStart = document.querySelector('div#buttons button.js-btn-start');
var btnPause = document.querySelector('div#buttons button.js-btn-pause');
var btnReset = document.querySelector('div#buttons button.js-btn-reset');
// console.log(btnStart, btnPause, btnReset);

btnStart.addEventListener('click', function(){
  timer= setInterval(setTime,1000);
  // console.log(hours, minutes, seconds);
  btnReset.disabled = false;
})
btnPause.addEventListener('click', function(){
  timer = clearInterval(timer);
})
btnReset.addEventListener('click', function(){
  time = clearInterval(timer);
  hours=0;
  minutes=0;
  seconds=0;
  time_el.innerHTML = '00:00:00';
  btnReset.disabled = true;
})


