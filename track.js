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

var d1;
function d2() {
  d1 = setInterval(d3, 1000);
  var c = 120;

  function d3() {
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
    document.getElementById("seven").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(d1);
      document.getElementById("seven").innerHTML = "0:00"
  }
}
}

var e1;
function e2() {
  e1 = setInterval(e3, 1000);
  var c = 60;

  function e3() {
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
    document.getElementById("eight").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(e1);
      document.getElementById("eight").innerHTML = "0:00"
  }
}
}

var f1;
function f2() {
  f1 = setInterval(f3, 1000);
  var c = 600;

  function f3() {
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
    document.getElementById("nine").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(f1);
      document.getElementById("nine").innerHTML = "0:00"
  }
}
}

var g1;
function g2() {
  g1 = setInterval(g3, 1000);
  var c = 60;

  function g3() {
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
    document.getElementById("ten").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(g1);
      document.getElementById("ten").innerHTML = "0:00"
  }
}
}

var h1;
function h2() {
  h1 = setInterval(h3, 1000);
  var c = 120;

  function h3() {
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
    document.getElementById("eleven").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(h1);
      document.getElementById("eleven").innerHTML = "0:00"
  }
}
}

var i1;
function i2() {
  i1 = setInterval(i3, 1000);
  var c = 60;

  function i3() {
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
    document.getElementById("twelve").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(i1);
      document.getElementById("twelve").innerHTML = "0:00"
  }
}
}

var j1;
function j2() {
  j1 = setInterval(j3, 1000);
  var c = 600;

  function j3() {
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
    document.getElementById("thirteen").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(j1);
      document.getElementById("thirteen").innerHTML = "0:00"
  }
}
}

var k1;
function k2() {
  k1 = setInterval(k3, 1000);
  var c = 60;

  function k3() {
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
    document.getElementById("fourteen").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(k1);
      document.getElementById("fourteen").innerHTML = "0:00"
  }
}
}

var l1;
function l2() {
  l1 = setInterval(l3, 1000);
  var c = 120;

  function l3() {
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
    document.getElementById("fifteen").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(l1);
      document.getElementById("fifteen").innerHTML = "0:00"
  }
}
}

var m1;
function m2() {
  m1 = setInterval(m3, 1000);
  var c = 60;

  function m3() {
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
    document.getElementById("sixteen").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(m1);
      document.getElementById("sixteen").innerHTML = "0:00"
  }
}
}

var n1;
function n2() {
  n1 = setInterval(n3, 1000);
  var c = 600;

  function n3() {
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
    document.getElementById("seventeen").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(n1);
      document.getElementById("seventeen").innerHTML = "0:00"
  }
}
}

var o1;
function o2() {
  o1 = setInterval(o3, 1000);
  var c = 60;

  function o3() {
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
    document.getElementById("eighteen").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(o1);
      document.getElementById("eighteen").innerHTML = "0:00"
  }
}
}

var p1;
function p2() {
  p1 = setInterval(p3, 1000);
  var c = 120;

  function p3() {
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
    document.getElementById("nineteen").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(p1);
      document.getElementById("nineteen").innerHTML = "0:00"
  }
}
}

var q1;
function q2() {
  q1 = setInterval(q3, 1000);
  var c = 60;

  function q3() {
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
    document.getElementById("twenty").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(q1);
      document.getElementById("twenty").innerHTML = "0:00"
  }
}
}

var r1;
function r2() {
  r1 = setInterval(r3, 1000);
  var c = 600;

  function r3() {
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
    document.getElementById("twentyone").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(r1);
      document.getElementById("twentyone").innerHTML = "0:00"
  }
}
}

var s1;
function s2() {
  s1 = setInterval(s3, 1000);
  var c = 60;

  function s3() {
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
    document.getElementById("twentytwo").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(s1);
      document.getElementById("twentytwo").innerHTML = "0:00"
  }
}
}

var pp1;
function pp2() {
  pp1 = setInterval(pp3, 1000);
  var c = 120;

  function pp3() {
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
    document.getElementById("twentythree").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(pp1);
      document.getElementById("twentythree").innerHTML = "0:00"
  }
}
}

var qq1;
function qq2() {
  qq1 = setInterval(qq3, 1000);
  var c = 60;

  function qq3() {
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
    document.getElementById("twentyfour").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(qq1);
      document.getElementById("twentyfour").innerHTML = "0:00"
  }
}
}

var rr1;
function rr2() {
  rr1 = setInterval(rr3, 1000);
  var c = 600;

  function rr3() {
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
    document.getElementById("twentyfive").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(rr1);
      document.getElementById("twentyfive").innerHTML = "0:00"
  }
}
}

var ss1;
function ss2() {
  ss1 = setInterval(ss3, 1000);
  var c = 60;

  function ss3() {
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
    document.getElementById("twentysix").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(ss1);
      document.getElementById("twentysix").innerHTML = "0:00"
  }
}
}

var ppp1;
function ppp2() {
  ppp1 = setInterval(ppp3, 1000);
  var c = 120;

  function ppp3() {
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
    document.getElementById("twentyseven").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(ppp1);
      document.getElementById("twentyseven").innerHTML = "0:00"
  }
}
}

var qqq1;
function qqq2() {
  qqq1 = setInterval(qqq3, 1000);
  var c = 60;

  function qqq3() {
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
    document.getElementById("twentyeight").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(qqq1);
      document.getElementById("twentyeight").innerHTML = "0:00"
  }
}
}

var rrr1;
function rrr2() {
  rrr1 = setInterval(rrr3, 1000);
  var c = 600;

  function rrr3() {
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
    document.getElementById("twentynine").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(rrr1);
      document.getElementById("twentynine").innerHTML = "0:00"
  }
}
}

var sss1;
function sss2() {
  sss1 = setInterval(sss3, 1000);
  var c = 60;

  function sss3() {
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
    document.getElementById("thirty").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(sss1);
      document.getElementById("thirty").innerHTML = "0:00"
  }
}
}

var pppp1;
function pppp2() {
  pppp1 = setInterval(pppp3, 1000);
  var c = 120;

  function pppp3() {
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
    document.getElementById("thirtyone").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(pppp1);
      document.getElementById("thirtyone").innerHTML = "0:00"
  }
}
}

var qqqq1;
function qqqq2() {
  qqqq1 = setInterval(qqqq3, 1000);
  var c = 60;

  function qqqq3() {
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
    document.getElementById("thirtytwo").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(qqqq1);
      document.getElementById("thirtytwo").innerHTML = "0:00"
  }
}
}

var rrrr1;
function rrrr2() {
  rrrr1 = setInterval(rrrr3, 1000);
  var c = 600;

  function rrrr3() {
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
    document.getElementById("thirtythree").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(rrrr1);
      document.getElementById("thirtythree").innerHTML = "0:00"
  }
}
}

var ssss1;
function ssss2() {
  ssss1 = setInterval(ssss3, 1000);
  var c = 60;

  function ssss3() {
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
    document.getElementById("thirtyfour").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(ssss1);
      document.getElementById("thirtyfour").innerHTML = "0:00"
  }
}
}

var ppppp1;
function ppppp2() {
  ppppp1 = setInterval(ppppp3, 1000);
  var c = 120;

  function ppppp3() {
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
    document.getElementById("thirtyfive").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(ppppp1);
      document.getElementById("thirtyfive").innerHTML = "0:00"
  }
}
}

var qqqqq1;
function qqqqq2() {
  qqqqq1 = setInterval(qqqqq3, 1000);
  var c = 60;

  function qqqqq3() {
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
    document.getElementById("thirtysix").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(qqqqq1);
      document.getElementById("thirtysix").innerHTML = "0:00"
  }
}
}

var rrrrr1;
function rrrrr2() {
  rrrrr1 = setInterval(rrrrr3, 1000);
  var c = 600;

  function rrrrr3() {
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
    document.getElementById("thirtyseven").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(rrrrr1);
      document.getElementById("thirtyseven").innerHTML = "0:00"
  }
}
}

var sssss1;
function sssss2() {
  sssss1 = setInterval(sssss3, 1000);
  var c = 60;

  function sssss3() {
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
    document.getElementById("thirtyeight").innerHTML = min + ":" + n;
    --c;
    if (c == 0) {
      clearInterval(sssss1);
      document.getElementById("thirtyeight").innerHTML = "0:00"
  }
}
}

