function timeUpdate() {
   const timeNow = new Date()
   const myTime = timeNow.toUTCString().split(' ')[4];
   const day = timeNow.toUTCString().split(',')[0];
   
   document.getElementById('currentTimeUTC').innerText = myTime;
   document.getElementById('currentDay').innerText = day;
}
setInterval(timeUpdate, 1000);
timeUpdate();

