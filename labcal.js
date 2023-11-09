const d = new Date();
let year = d.getFullYear();
document.getElementById("theYear").innerHTML = year;

let bgHigh = "#f39b9b";
let textHigh = "#ad1809";
let bgNormal ="#9ac79d";
let textNormal = "#03670a"; 
// start ldl
function ldl() {
  let chol = parseFloat(document.getElementById("floatingInputGroup1").value);
  let trigs = parseFloat(document.getElementById("floatingInputGroup2").value);
  let hdl = parseFloat(document.getElementById("floatingInputGroup3").value);
  let vldlResult = trigs / 5;
  let ldlResult = chol - vldlResult - hdl;
  let nonhdlOutRes = chol - hdl;
  if(ldlResult >= 160){
    document.getElementById("ldlOutRes").style.backgroundColor = bgHigh;
    document.getElementById("ldlOutRes").style.color = textHigh;
  }else{
    document.getElementById("ldlOutRes").style.backgroundColor = bgNormal;
    document.getElementById("ldlOutRes").style.color = textNormal;

  }
  document.getElementById("ldlOutRes").innerHTML = ldlResult.toFixed(2);
  document.getElementById("vldlOutRes").innerHTML = vldlResult.toFixed(2);
  document.getElementById("nonhdlOutRes").innerHTML = nonhdlOutRes.toFixed(2);
  document.getElementById("vldlOutRes").style.backgroundColor = bgNormal;
  document.getElementById("vldlOutRes").style.color = textNormal;
  document.getElementById("nonhdlOutRes").style.color = textNormal;
  document.getElementById("nonhdlOutRes").style.backgroundColor = bgNormal;
}
var cholKey = document.getElementById("floatingInputGroup1");
cholKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('floatingInputGroup2').focus();
  }
})
var trigsKey = document.getElementById("floatingInputGroup2");
trigsKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('floatingInputGroup3').focus();
  }
})
var hdlKey = document.getElementById("floatingInputGroup3");
hdlKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('ldlCalBtn').click();
  }
})
// End ldl

// Start Homa

function homa() {
  let insulin = document.getElementById("floatingInputGroup4").value;
  let glucose = document.getElementById("floatingInputGroup5").value;
  let glu = glucose * 0.0555;
  let insGlu = insulin * glu;
  let homaIr = insGlu / 22.5;
  document.getElementById("homaOutRes").innerHTML = homaIr.toFixed(2);
  if(homaIr >= 3.0){
    document.getElementById("homaOutRes").style.backgroundColor = bgHigh;
    document.getElementById("homaOutRes").style.color = textHigh;
  }else{
    document.getElementById("homaOutRes").style.backgroundColor = bgNormal;
    document.getElementById("homaOutRes").style.color = textNormal;

  }
}
var insulinKey = document.getElementById("floatingInputGroup4");
insulinKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('floatingInputGroup5').focus();
  }
})
var glucoseKey = document.getElementById("floatingInputGroup5");
glucoseKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('homaCalBtn').click();
  }
})
// End Homa
// Start ACR
function acr() {
  let urineAlb = document.getElementById("floatingInputGroup6").value;
  let urineCreat = document.getElementById("floatingInputGroup7").value;
  let creatmol = urineCreat * 0.0884;
  let creatFinal = creatmol * 0.113;
  let acrRes = urineAlb / creatFinal;
  document.getElementById("acrOutRes").innerHTML = acrRes.toFixed(2);
  if( acrRes >= 31){
    document.getElementById("acrOutRes").style.backgroundColor = bgHigh;
    document.getElementById("acrOutRes").style.color = textHigh;
  } else {
    document.getElementById("acrOutRes").style.backgroundColor = bgNormal;
    document.getElementById("acrOutRes").style.color = textNormal;
  }
}
var urineAlbKey = document.getElementById("floatingInputGroup6");
urineAlbKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('floatingInputGroup7').focus();
  }
})
var urineCreatKey = document.getElementById("floatingInputGroup7");
urineCreatKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('acrCalBtn').click();
  }
})
// End ACR

function urinosmo() {
  let urinSpGr = document.getElementById("floatingInputGroup8").value;
  let urinosm = urinSpGr - 1000;
  let urineosmo = urinosm * 42.5;
  document.getElementById("urineOsmoOutRes").innerHTML = urineosmo.toFixed(2);
  document.getElementById("urineOsmoOutRes").style.backgroundColor = bgNormal;
  document.getElementById("urineOsmoOutRes").style.color = textNormal;
}
var urineosmoKey = document.getElementById("floatingInputGroup8");
urineosmoKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('urineOsmoCalBtn').click();
  }
})

function nbrs() {
  let wbc = document.getElementById("floatingInputGroup9").value;
  let wbsNo = parseInt(wbc);
  let nbrss = document.getElementById("floatingInputGroup10").value;
  let nbrssNo = parseInt(nbrss);
  let WbcsMlty = wbsNo * 100;
  let nbrsPlus = nbrssNo + 100;
  let corrwbs = WbcsMlty / nbrsPlus;
  document.getElementById("nbrsOutRes").innerHTML = corrwbs.toFixed(2);
  document.getElementById("nbrsOutRes").style.backgroundColor = bgNormal;
  document.getElementById("nbrsOutRes").style.color = textNormal;
}
var wbcKey = document.getElementById("floatingInputGroup9");
wbcKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('floatingInputGroup10').focus();
  }
})
var nbrssKey = document.getElementById("floatingInputGroup10");
nbrssKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('nbrBtnCal').click();
  }
})
// start inr
function inr() {
  let ptTime = document.getElementById("floatingInputGroup11").value;
  let isi = document.getElementById("floatingInputGroup12").value;
  let conTime = document.getElementById("floatingInputGroup13").value;
  let intptTime = parseFloat(ptTime);
  let intIsi = parseFloat(isi);
  let intConTime = parseFloat(conTime);
  let intptTimeOverconTime = intptTime / intConTime;
  let percnt = (intConTime / intptTime) * 100;
  let inrResult = intptTimeOverconTime ** intIsi;
  document.getElementById("inrOutRes").innerHTML = inrResult.toFixed(2);
  document.getElementById("pcOutRes").innerHTML = percnt.toFixed();
  if (inrResult >= 1.31) {
    document.getElementById("inrOutRes").style.backgroundColor = bgHigh;
    document.getElementById("inrOutRes").style.color = textHigh;
  } else {
    document.getElementById("inrOutRes").style.backgroundColor = bgNormal;
    document.getElementById("inrOutRes").style.color = textNormal;
  }
}
var pt = document.getElementById("floatingInputGroup11");
pt.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('inrCalBtn').click();
  }
})
// end inr

// start Ca
function ca() {
  let alb = parseFloat(document.getElementById("floatingInputGroup14").value);
  let cal = parseFloat(document.getElementById("floatingInputGroup15").value);
  let albu = parseFloat(4.5 - alb);
  let ionCa = (cal + albu) / 8;
  if (ionCa <= 1.05 || ionCa >= 1.3) {
    document.getElementById("caOutRes").style.color = textHigh;
    document.getElementById("caOutRes").style.backgroundColor = bgHigh;
    // document.getElementById("caOutRes").innerHTML = ionCa.toFixed(2);
  } else {
    document.getElementById("caOutRes").style.color = textNormal;
    document.getElementById("caOutRes").style.backgroundColor = bgNormal;
  }
  document.getElementById("caOutRes").innerHTML = ionCa.toFixed(2);
}
var albKey = document.getElementById("floatingInputGroup14");
albKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('floatingInputGroup15').focus();
  }
})
var calKey = document.getElementById("floatingInputGroup15");
calKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('caCalBtn').click();
  }
})
// End Ca
function fena() {
  let naUrine = parseFloat(document.getElementById("floatingInputGroup16").value);
  let naSerum = parseFloat(document.getElementById("floatingInputGroup17").value);
  let creatUrine = parseFloat(document.getElementById("floatingInputGroup18").value);
  let creatSerum = parseFloat(document.getElementById("floatingInputGroup19").value);
  let na = naUrine / naSerum;
  let creat = creatUrine / creatSerum;
  let fena = (na / creat) * 100;
  document.getElementById("fenaOutRes").innerHTML = fena.toFixed(1);
  document.getElementById("fenaOutRes").style.backgroundColor = bgNormal;
  document.getElementById("fenaOutRes").style.color = textNormal;
}
var naUrineKey = document.getElementById("floatingInputGroup16");
naUrineKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('floatingInputGroup17').focus();
  }
})
var naSerumKey = document.getElementById("floatingInputGroup17");
naSerumKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('floatingInputGroup18').focus();
  }
})
var creatUrineKey = document.getElementById("floatingInputGroup18");
creatUrineKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('floatingInputGroup19').focus();
  }
})
var creatSerumKey = document.getElementById("floatingInputGroup19");
creatSerumKey.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('fenaCalBtn').click();
  }
})



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
      el.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.test).style.display =
      "block";
  });
});

// let testListTitle = document.querySelectorAll(".list-group a");
// let testListArr = Array.from(testListTitle);
// let testName = document.querySelectorAll(".main .show");
// let testNameArr = Array.from(testName);
// testListArr.forEach((ele) => {
//   ele.addEventListener("click", function (e) {
//     testListArr.forEach((ele) => {
//       ele.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     testNameArr.forEach((el) => {
//       el.style.display = 'none';
//     });
//     document.querySelector(e.currentTarget.dataset.test).style.display = 'block';
//     // document.querySelector(e.currentTarget.dataset.test). = 'block';
//   });
// });
