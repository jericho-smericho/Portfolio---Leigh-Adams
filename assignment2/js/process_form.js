//Leigh Adams
//1.stop the form from processing

function stopThatForm() {
  //all input names...sobbing
  var manOrMup = document.getElementsByName("manOrMup");
  var fName = document.getElementById("fName");
  var lName = document.getElementById("lName");
  var pNumber = document.getElementById("pNumber");
  var eMail = document.getElementById("eMail");
  var wSite = document.getElementById("wSite");
  var form1 = document.getElementById("form1");
  var rowOne = document.getElementById("row1");
  var rowTwo = document.getElementById("row2");
  var rowThree = document.getElementById("row3");
  var rowFour = document.getElementById("row4");
  var rowFive = document.getElementById("row5");
  var extraOne = document.getElementById("extra1");
  var extraTwo = document.getElementById("extra2");
  var extraThree = document.getElementById("extra3");
  var extraFour = document.getElementById("extra4");
  var extraFive = document.getElementById("extra5");

  document.manOrMup.addEventListener("submit", gotEm, false);

  function gotEm(event) {
    event.preventDefault();
    //console.log("By God...It WORKED!!!"); don't forget to get rid of this

    //2.get info from form

    return false;
  }
  fName.addEventListener("focus", lilHintOne, true);
  lName.addEventListener("focus", lilHintTwo, true);
  pNumber.addEventListener("focus", lilHintThree, true);
  eMail.addEventListener("focus", lilHintFour, true);
  wSite.addEventListener("focus", lilHintFive, true);
  fName.addEventListener("blur", validateData, true);
  lName.addEventListener("blur", validateData, true);
  pNumber.addEventListener("blur", validateData, true);
  eMail.addEventListener("blur", validateData, true);
  wSite.addEventListener("blur", validateData, true);
  /*form1.addEventListener("blur", validateData, true);*/
}

window.addEventListener("load", stopThatForm, false);

//3.validation, baby!
function lilHintOne() {
  //var rowOne = document.getElementById("row1");
  var hintOne = document.getElementById("extra1");
  /*hintOne.setAttribute("id", "extra1");*/
  var wordOne = document.createElement("p");
  var finalOne = document.createTextNode("Capital 1st letter, no numbers");
  //rowOne.appendChild(hintOne);
  hintOne.appendChild(wordOne);
  wordOne.appendChild(finalOne);
}
function lilHintTwo() {
  //var rowTwo = document.getElementById("row2");
  var hintTwo = document.getElementById("extra2");
  //hintTwo.setAttribute("id", "extra2");
  var wordTwo = document.createElement("p");
  var finalTwo = document.createTextNode("Capital 1st letter, no numbers");
  //rowTwo.appendChild(hintTwo);
  hintTwo.appendChild(wordTwo);
  wordTwo.appendChild(finalTwo);
}
function lilHintThree() {
  //var rowThree = document.getElementById("row3");
  var hintThree = document.getElementById("extra3");
  //hintThree.setAttribute("id", "extra3");
  var wordThree = document.createElement("p");
  var finalThree = document.createTextNode("(XXX)XXX-XXXX");
  //rowThree.appendChild(hintThree);
  hintThree.appendChild(wordThree);
  wordThree.appendChild(finalThree);
}
function lilHintFour() {
  //var rowFour = document.getElementById("row4");
  var hintFour = document.getElementById("extra4");
  //hintFour.setAttribute("id", "extra4");
  var wordFour = document.createElement("p");
  var finalFour = document.createTextNode("no capital letters, .edu or .com");
  //rowFour.appendChild(hintFour);
  hintFour.appendChild(wordFour);
  wordFour.appendChild(finalFour);
}
function lilHintFive() {
  //var rowFive = document.getElementById("row5");
  var hintFive = document.getElementById("extra5");
  //hintFive.setAttribute("id", "extra5");
  var wordFive = document.createElement("p");
  var finalFive = document.createTextNode(
    "Must include https:// , .com or .edu, a / , and ~"
  );
  // rowFive.appendChild(hintFive);
  hintFive.appendChild(wordFive);
  wordFive.appendChild(finalFive);
}

function validateData() {
  //you forgot to use the .match() method dipshit
  var fnCheck = /(^[A-Z]+)(["')?([a-z]\S+)/gm;
  if ((extraOne = document.getElementById("row1").lastElementChild)) {
    document.getElementById("extra1").remove();
  }
  if (document.manOrMup.elements["fName"].value.match(fnCheck)) {
    //var rowOne = document.getElementById("row1");
    var correctOne = document.getElementById("space1");
    var pOne = document.createElement("p");
    pOne.setAttribute("id", "extra1");
    var ctOne = document.createTextNode("correct :)");
    //rowOne.appendChild(correctOne);
    correctOne.appendChild(pOne);
    pOne.appendChild(ctOne);
    //return true;
  } else {
    //document.getElementById("extra1").remove();
    //var rowOne = document.getElementById("row1");
    var errorOne = document.getElementById("space1");
    var sectOne = document.createElement("p");
    sectOne.setAttribute("id", "extra1");
    var etOne = document.createTextNode("incorrect ;-;");
    //rowOne.appendChild(errorOne);
    errorOne.appendChild(sectOne);
    sectOne.appendChild(etOne);
    //return false;
  }

  var lnCheck = /[A-Z][a-zA-Z]*(-[A-Z][a-zA-Z]*)?$/gm;
  if ((extraTwo = document.getElementById("row2").lastElementChild)) {
    document.getElementById("extra2").remove();
  }
  if (document.manOrMup.elements["lName"].value.match(lnCheck)) {
    //document.getElementById("extra2").remove();
    //var rowTwo = document.getElementById("row2");
    var correctTwo = document.getElementById("extra2");
    var pTwo = document.createElement("p");
    pTwo.setAttribute("id", "extra2");
    var ctTwo = document.createTextNode("correct :)");
    //rowTwo.appendChild(correctTwo);
    correctTwo.appendChild(pTwo);
    pTwo.appendChild(ctTwo);
    //return true;
  } else {
    //document.getElementById("extra2").remove();
    //var rowTwo = document.getElementById("row2");
    var errorTwo = document.getElementById("extra2");
    var sectTwo = document.createElement("p");
    sectTwo.setAttribute("id", "extra2");
    var etTwo = document.createTextNode("incorrect ;-;");
    //rowTwo.appendChild(errorTwo);
    errorTwo.appendChild(sectTwo);
    sectTwo.appendChild(etTwo);
  }

  var pnCheck = /^([(]\d{3}[)])(\d{3})["-](\d{4})/gm;
  if ((extraThree = document.getElementById("row3").lastElementChild)) {
    document.getElementById("extra3").remove();
  }
  if (document.manOrMup.elements["pNumber"].value.match()) {
    //document.getElementById("extra3").remove();
    //var rowThree = document.getElementById("row3");
    var correctThree = document.getElementById("extra3");
    var pThree = document.createElement("p");
    pThree.setAttribute("id", "extra3");
    var ctThree = document.createTextNode("correct :)");
    //rowThree.appendChild(correctThree);
    correctThree.appendChild(pThree);
    pThree.appendChild(ctThree);
    //return true;
  } else {
    //document.getElementById("extra3").remove();
    //var rowThree = document.getElementById("row3");
    var errorThree = document.getElementById("extra3");
    var sectThree = document.createElement("p");
    sectThree.setAttribute("id", "extra3");
    var etThree = document.createTextNode("incorrect ;-;");
    //rowThree.appendChild(errorThree);
    errorThree.appendChild(sectThree);
    sectThree.appendChild(etThree);
  }

  var eCheck =
    /(^[a-z]+(\d+)?)(["@])([a-z]+)([".])(([a-z])+([".])+)?((com$)?(edu$)?)/gm;
  if ((extraFour = document.getElementById("row4").lastElementChild)) {
    document.getElementById("extra4").remove();
  }
  if (document.manOrMup.elements["eMail"].value.match(eCheck)) {
    //document.getElementById("extra4").remove();
    //var rowFour = document.getElementById("row4");
    var correctFour = document.getElementById("extra4");
    var pFour = document.createElement("p");
    pFour.setAttribute("id", "extra4");
    var ctFour = document.createTextNode("correct :)");
    //rowFour.appendChild(correctFour);
    correctFour.appendChild(pFour);
    pFour.appendChild(ctFour);
    //return true;
  } else {
    //document.getElementById("extra4").remove();
    //var rowFour = document.getElementById("row4");
    var errorFour = document.getElementById("extra4");
    var sectFour = document.createElement("p");
    sectFour.setAttribute("id", "extra4");
    var etFour = document.createTextNode("incorrect ;-;");
    //rowFour.appendChild(errorFour);
    errorFour.appendChild(sectFour);
    sectFour.appendChild(etFour);
  }

  var wsCheck =
    /(^https:\/\/)([a-z]+)([".]?)([a-z]+)?(\.?)([a-z]+)((\.edu\/)?(\.com\/)?)(\~[a-z]+(\d+)?)/gm;
  if ((extraFive = document.getElementById("row5").lastElementChild)) {
    document.getElementById("extra5").remove();
  }
  if (document.manOrMup.elements["wSite"].value.match(wsCheck)) {
    //document.getElementById("extra5").remove();
    //var rowFive = document.getElementById("row5");
    var correctFive = document.getElementById("extra5");
    var pFive = document.createElement("p");
    var ctFive = document.createTextNode("correct :)");
    //rowFive.appendChild(correctFive);
    correctFive.appendChild(pFive);
    pFive.appendChild(ctFive);
  } else {
    //document.getElementById("extra5").remove();
    //var rowFive = document.getElementById("row5");
    var errorFive = document.getElementsByName("extra5");
    var sectFive = document.createElement("p");
    sectFive.setAttribute("id", "extra5");
    var etFive = document.createTextNode("incorrect ;-;");
    //rowFive.appendChild(errorFive);
    errorFive.appendChild(sectFive);
    sectFive.appendChild(etFive);
  }
}

//4.print data + badge (based on answers if you're smart enough)
