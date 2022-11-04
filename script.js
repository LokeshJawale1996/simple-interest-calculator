function compute() {
  

  let p = document.getElementById("principal").value;
  let r = document.getElementById("rate").value;
  let t = document.getElementById("years").value;
  let si = document.getElementById("result");
  //si = prt/100

  si = (p * r * t) / 100;
//   console.log(si);

  document.getElementById("deposit").innerHTML = `If you deposit : <mark> ${p} </mark>`;
  document.getElementById("interest").innerHTML = `At an interest rate of : <mark>${r}</mark>`;
  document.getElementById("amount").innerHTML = `You will receive an amount of : <mark>${si}</mark>`;
  document.getElementById("year").innerHTML = `In the year : <mark>${t}</mark>`;
}


function updateTextInput(val) {

    let mm =document.querySelector('.textInput')
    mm.innerText=val
    console.log(val)
    // document.getElementById("deposit").innerHTML = `If you deposit : ${p}`;
  }