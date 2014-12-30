var memory = -1;

var setmem = function () {
  var mem = document.getElementById("txtNum");
  if (mem.checkValidity()) {
    memory = Math.floor(mem.value);
    initRam();
  } else {
    mem.invalid();
  }
}

var initRam = function () {}

var testing = function () {
    var algos = document.getElementsByName("alg");
    var algo = "nothing selected! :("
    for (var i = 0; i < algos.length; i++) {
        if (algos[i].checked) {
            algo = algos[i].id;
            break;
        }
    }
    document.getElementById("convas").innerHTML = "<h1>"+algo+"</h1>";
}
