var text = "";

$(document).ready(function() {
 var entryCount = 0;
 
  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    //translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char);
    createElement(char);

    text += char;

    document.getElementById("translation").innerHTML = text;
  });
  //capture function keys

  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP " );
      deleteElement();
    }
  });
});

//CURSOR
function createElement(k) {
  var elem = $('#cursor');
  if (k == "a" || k == "A") { 
    elem.before('<span class="inner">ア</span>');
  }
  if (k == "b" || k == "B") { 
    elem.before('<span class="inner">ㅂ</span>'); 
  }
  if (k == "c") { 
  elem.before('<span class="inner">c</span>'); 
  }
  if (k == "C") { 
  elem.before('<span class="inner">C</span>'); 
  }
  if (k == "d" || k == "D") { 
    elem.before('<span class="inner">ㄷ</span>'); 
  }
  if (k == "e" || k == "E") { 
    elem.before('<span class="inner">エ</span>'); 
  }
  if (k == "f") { 
    elem.before('<span class="inner">f</span>'); 
  }
  if (k == "F") { 
    elem.before('<span class="inner">F</span>'); 
  }
  if (k == "g") { 
    elem.before('<span class="inner">g</span>'); 
  }
  if (k == "G") { 
    elem.before('<span class="inner">G</span>'); 
  }
  if (k == "h" || k == "H") { 
    elem.before('<span class="inner">ㅎ</span>'); 
  }
  if (k == "i" || k == "I") { 
    elem.before('<span class="inner">イ</span>'); 
  }
  if (k == "j" || k == "J") { 
    elem.before('<span class="inner">ㅈ</span>'); 
  }
  if (k == "k") { 
    elem.before('<span class="inner">k</span>'); 
  }
  if (k == "K") { 
    elem.before('<span class="inner">K</span>'); 
  }
  if (k == "l" || k == "L") { 
    elem.before('<span class="inner">ㄹ</span>'); 
  }
  if (k == "m" || k == "M") { 
    elem.before('<span class="inner">ㅁ</span>'); 
  }
  if (k == "n") { 
    elem.before('<span class="inner">n</span>'); 
  }
  if (k == "N") { 
    elem.before('<span class="inner">N</span>'); 
  }  if (k == "o" || k == "O") { 
    elem.before('<span class="inner">オ</span>'); 
  }
  if (k == "p" || k == "P") { 
    elem.before('<span class="inner">ㅍ</span>'); 
  }
  if (k == "q" || k == "Q") { 
    elem.before('<span class="inner">ㅋ</span>'); 
  }
  if (k == "r") { 
    elem.before('<span class="inner">r</span>'); 
  }
  if (k == "R") { 
    elem.before('<span class="inner">R</span>'); 
  }
  if (k == "s" || k == "S") { 
    elem.before('<span class="inner">ㅅ</span>'); 
  }
  if (k == "t" || k == "T") { 
    elem.before('<span class="inner">ㅌ</span>'); 
  }
  if (k == "u" || k == "U") { 
    elem.before('<span class="inner">ウ</span>'); 
  }
  if (k == "v") { 
    elem.before('<span class="inner">v</span>'); 
  }
  if (k == "V") { 
    elem.before('<span class="inner">V</span>'); 
  }
  if (k == "w") { 
    elem.before('<span class="inner">w</span>'); 
  }
  if (k == "W") { 
    elem.before('<span class="inner">W</span>'); 
  }
  if (k == "x") { 
    elem.before('<span class="inner">x</span>'); 
  }
  if (k == "X") { 
    elem.before('<span class="inner">X</span>'); 
  }
  if (k == "y") { 
    elem.before('<span class="inner">y</span>'); 
  }
  if (k == "Y") { 
    elem.before('<span class="inner">Y</span>'); 
  }
  if (k == "z" || k == "Z") { 
    elem.before('<span class="inner">ㅈ</span>'); 
  }
  if (k == " ") { 
    elem.before('<span class="inner">&nbsp;</span>'); 
  }
    if (k == " ") { 
    elem.before('<span class="inner">&nbsp;</span>'); 
  }
  if (k == ",") { 
    elem.before('<span class="inner">,</span>'); 
  }
  if (k == ".") { 
    elem.before('<span class="inner">.</span>'); 
  }
  if (k == "/") { 
    elem.before('<span class="inner">/</span>'); 
  }
  if (k == "?") { 
    elem.before('<span class="inner">?</span>'); 
  }
  if (k == "!") { 
    elem.before('<span class="inner">!</span>'); 
  }
  if (k == "(") { 
    elem.before('<span class="inner">(</span>'); 
  }
  if (k == ")") { 
    elem.before('<span class="inner">)</span>'); 
  }
  if (k == "<") { 
    elem.before('<span class="inner"><</span>'); 
  }
  if (k == ">") { 
    elem.before('<span class="inner">></span>'); 
  }
  if (k == "-") { 
    elem.before('<span class="inner">-</span>'); 
  }
  if (k == "@") { 
    elem.before('<span class="inner">@</span>'); 
  }
  if (k == "1") { 
    elem.before('<span class="inner">1</span>'); 
  }
  if (k == "2") { 
    elem.before('<span class="inner">2</span>'); 
  }
  if (k == "3") { 
    elem.before('<span class="inner">3</span>'); 
  }
  if (k == "4") { 
    elem.before('<span class="inner">4</span>'); 
  }
  if (k == "5") { 
    elem.before('<span class="inner">5</span>'); 
  }
  if (k == "6") { 
    elem.before('<span class="inner">6</span>'); 
  }
  if (k == "7") { 
    elem.before('<span class="inner">7</span>'); 
  }
  if (k == "8") { 
    elem.before('<span class="inner">8</span>'); 
  }
  if (k == "9") { 
    elem.before('<span class="inner">9</span>'); 
  }
  if (k == "0") { 
    elem.before('<span class="inner">0</span>'); 
  }
}

function deleteElement() {
  $(".inner").last().remove();
  text = text.slice(0, -1);
  document.getElementById("translation").innerHTML = text;

}
