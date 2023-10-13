const d = new Date();
let year = d.getFullYear();
document.getElementById("theYear").innerHTML = year;



function ldl() {
  let chol = document.getElementById("floatingInputGroup1").value;
  let trigs = document.getElementById("floatingInputGroup2").value;
  let hdl = document.getElementById("floatingInputGroup3").value;
  let vldlResult = trigs / 5;
  let ldlResult = chol - vldlResult - hdl;
  let nonhdlOutRes = chol - hdl;
  document.getElementById("ldlOutRes").innerHTML = ldlResult;
  document.getElementById("vldlOutRes").innerHTML = vldlResult;
  document.getElementById("nonhdlOutRes").innerHTML = nonhdlOutRes;
}

function homa() {
  let insulin = document.getElementById("floatingInputGroup4").value;
  let glucose = document.getElementById("floatingInputGroup5").value;
  let glu = glucose * 0.0555;
  let insGlu = insulin * glu;
  let homaIr = insGlu / 22.5;
  document.getElementById("homaOutRes").innerHTML = homaIr.toFixed(2);
}

function acr() {
  let urineAlb = document.getElementById("floatingInputGroup6").value;
  let urineCreat = document.getElementById("floatingInputGroup7").value;
  let creatmol = urineCreat * 0.0884;
  let creatFinal = creatmol * 0.113;
  let acrRes = urineAlb / creatFinal;
  document.getElementById("acrOutRes").innerHTML = acrRes.toFixed(2);
}
function urinosmo() {
  let urinSpGr = document.getElementById("floatingInputGroup8").value;
  let urinosm = urinSpGr - 1000;
  let urineosmo = urinosm * 42.5;
  document.getElementById("urineOsmoOutRes").innerHTML = urineosmo.toFixed(2);
}

function nbrs() {
  let wbc = document.getElementById("floatingInputGroup9").value;
  let wbsNo = parseInt(wbc);
  let nbrss = document.getElementById("floatingInputGroup10").value;
  let nbrssNo = parseInt(nbrss);
  let WbcsMlty = wbsNo * 100;
  let nbrsPlus = nbrssNo + 100;
  let corrwbs = WbcsMlty / nbrsPlus;
  document.getElementById("nbrsOutRes").innerHTML = corrwbs.toFixed(2);
}



let testListTitle = document.querySelectorAll(".list-group a");
let testListArr = Array.from(testListTitle);
let testName = document.querySelectorAll(".main .show");
let testNameArr = Array.from(testName);
testListArr.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    testListArr.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    testNameArr.forEach((el) => {
      el.style.display = 'none';
    });
    document.querySelector(e.currentTarget.dataset.test).style.display = 'block';
  });
});

