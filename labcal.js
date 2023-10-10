const d = new Date();
let year = d.getFullYear();
document.getElementById("theYear").innerHTML = year;



function ldl() {
  let chol = document.getElementById("chol").value;
  let trigs = document.getElementById("trigs").value;
  let hdl = document.getElementById("hdlValue").value;
  let vldlResult = trigs / 5;
  let ldlResult = chol - vldlResult - hdl;
  let nonhdlOutRes = chol - hdl;
  document.getElementById("ldlOutRes").innerHTML = ldlResult;
  document.getElementById("vldlOutRes").innerHTML = vldlResult;
  document.getElementById("nonhdlOutRes").innerHTML = nonhdlOutRes;
}

function homa() {
  let insulin = document.getElementById("insulin").value;
  let glucose = document.getElementById("glucose").value;
  let glu = glucose * 0.0555;
  let insGlu = insulin * glu;
  let homaIr = insGlu / 22.5;
  document.getElementById("homaOutRes").innerHTML = homaIr.toFixed(2);
}

function acr() {
  let urineAlb = document.getElementById("Albumin").value;
  let urineCreat = document.getElementById("creat").value;
  let creatmol = urineCreat * 0.0884;
  let creatFinal = creatmol * 0.113;
  let acrRes = urineAlb / creatFinal;
  document.getElementById("acrOutRes").innerHTML = acrRes.toFixed(2);
}
function urinosmo() {
  let urinSpGr = document.getElementById("uriSpeGr").value;
  let urinosm = urinSpGr - 1000;
  let urineosmo = urinosm * 42.5;
  document.getElementById("urineOsmoOutRes").innerHTML = urineosmo.toFixed(2);
}




let testListTitle = document.querySelectorAll(".list-group a");
let testListArr = Array.from(testListTitle);
let testName = document.querySelectorAll(".main .show");
let testNameArr = Array.from(testName);
testListArr.forEach((ele)=>{
  ele.addEventListener("click", function(e){
    testListArr.forEach((ele)=>{
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    testNameArr.forEach((el)=>{
      el.style.display = 'none';
    });
    document.querySelector(e.currentTarget.dataset.test).style.display = 'block';
  });
})

// console.log(e.currentTarget.dataset.test);\



// function showLdl(){
//   let showLdlEL = document.getElementById("allLdl");
//   if(showLdlEL.style.visibility === "hidden"){
//     return showLdlEL.style.visibility = "visible";
//   }
// }
