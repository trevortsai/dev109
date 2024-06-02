var count = 0; var candle = 0; var key = 0; var match = 0; var bell = 0; var clock = 0;

myCandle = document.getElementById("candle");

myCandle.addEventListener('click', function(event) {
  foundCandle();
}, false);

myKey = document.getElementById("key");

myKey.addEventListener('click', function(event) {
  foundKey();
}, false);

myMatches = document.getElementById("matches");

myMatches.addEventListener('click', function(event) {
  foundMatches();
}, false);

myBell = document.getElementById("bell");

myBell.addEventListener('click', function(event) {
  foundBell();
}, false);

myClock = document.getElementById("clock");

myClock.addEventListener('click', function(event) {
  foundClock();
}, false);

myCandle = document.getElementById("candle");

myCandle.addEventListener('click', function(event) {
  foundCandle();
}, false);

myKey = document.getElementById("key");

myKey.addEventListener('click', function(event) {
  foundKey();
}, false);

myMatches = document.getElementById("matches");

myMatches.addEventListener('click', function(event) {
  foundMatches();
}, false);

myBell = document.getElementById("bell");

myBell.addEventListener('click', function(event) {
  foundBell();
}, false);

myClock = document.getElementById("clock");

myClock.addEventListener('click', function(event) {
  foundClock();
}, false);

function foundCandle() {
  if (candle == 0) {
    check()
    document.getElementById("listCandle").style.textDecoration = "line-through";
  }
}
function foundKey() {
  if (key == 0) {
    check()
  document.getElementById("listKey").style.textDecoration = "line-through";
  }
}
function foundMatches() {
  if (match == 0) {
    check()
  document.getElementById("listMatches").style.textDecoration = "line-through";
  }
}
function foundBell() {
  if (bell == 0) {
    check()
  document.getElementById("listBell").style.textDecoration = "line-through";
  }
}
function foundClock() {
  if (clock == 0) {
    check()
  document.getElementById("listClock").style.textDecoration = "line-through";
  }
}
function check() {
  count++;
  if (count == 5) {
    var resetButton = document.createElement("button");
    resetButton.id = "reset";
    resetButton.innerHTML = "Reset";
    document.body.appendChild(resetButton);
    document.getElementById("reset").addEventListener('click', function(event) {
  document.getElementById("listClock").style.textDecoration = "none";
  document.getElementById("listBell").style.textDecoration = "none";
  document.getElementById("listMatches").style.textDecoration = "none";
  document.getElementById("listKey").style.textDecoration = "none";
  document.getElementById("listCandle").style.textDecoration = "none";
  count = 0; candle = 0; key = 0; match = 0; bell = 0; clock = 0;
  this.parentNode.removeChild(this);
}, false);
  }
}

