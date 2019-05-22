function toggleSidebar(){
document.getElementById("sidebar").classList.toggle('active')
}

var myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 600;

  function myClock() {
    var min = Math.floor(c / 60);
    var sec = c % 60;
    n = zero(sec);
    function zero(n) {
if (n < 10) {
  return n = "0" + n;
}
else {
  return n = n;
}
}
    document.getElementById("one").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(myTimer);
      document.getElementById("one").innerHTML = "0:00"
  }
}
}

var yes;
function maybe() {
  yes = setInterval(no, 1000);
  var c = 60;

  function no() {
    var min = Math.floor(c / 60);
    var sec = c % 60;
    n = zero(sec);
    function zero(n) {
if (n < 10) {
  return n = "0" + n;
}
else {
  return n = n;
}
}
    document.getElementById("two").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(yes);
      document.getElementById("two").innerHTML = "0:00"
  }
}
}

var funky;
function silly() {
  funky = setInterval(kk, 1000);
  var c = 120;

  function kk() {
    var min = Math.floor(c / 60);
    var sec = c % 60;
    n = zero(sec);
    function zero(n) {
if (n < 10) {
  return n = "0" + n;
}
else {
  return n = n;
}
}
    document.getElementById("three").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(funky);
      document.getElementById("three").innerHTML = "0:00"
  }
}
}

var a1;
function a2() {
  a1 = setInterval(a3, 1000);
  var c = 60;

  function a3() {
    var min = Math.floor(c / 60);
    var sec = c % 60;
    n = zero(sec);
    function zero(n) {
if (n < 10) {
  return n = "0" + n;
}
else {
  return n = n;
}
}
    document.getElementById("four").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(a1);
      document.getElementById("four").innerHTML = "0:00"
  }
}
}

var b1;
function b2() {
  b1 = setInterval(b3, 1000);
  var c = 600;

  function b3() {
    var min = Math.floor(c / 60);
    var sec = c % 60;
    n = zero(sec);
    function zero(n) {
if (n < 10) {
  return n = "0" + n;
}
else {
  return n = n;
}
}
    document.getElementById("five").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(b1);
      document.getElementById("five").innerHTML = "0:00"
  }
}
}

var c1;
function c2() {
  c1 = setInterval(c3, 1000);
  var c = 60;

  function c3() {
    var min = Math.floor(c / 60);
    var sec = c % 60;
    n = zero(sec);
    function zero(n) {
if (n < 10) {
  return n = "0" + n;
}
else {
  return n = n;
}
}
    document.getElementById("six").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(c1);
      document.getElementById("six").innerHTML = "0:00"
  }
}
}