function cardHide() {

    var is = document.getElementById('cred').value;
    if (is.length < 16 || is.length > 16 ) {
        alert('Please enter correct No')
    
    }
    else{
       let first12 = is.slice(0, 15);
  //define what char to use to replace numbers
         let char = '*'
        let repeatedChar = char.repeat(is.length - 4);
  // replace numbers with repeated char
        first12 = first12.replace(first12, repeatedChar);
  //concat hidden char with last 4 digits of input
       let hiddenNumbers = first12 + is.slice(is.length - 4);

      document.getElementById('done').innerText = hiddenNumbers;
    }

}
//potato counting
const countp = () => {
  const pstring = document.getElementById("pstring");
  //   alert(value);
  if (pstring.value == "") {
    alert("Please enter a string");
  } else {
    const str = pstring.value;
    const rvalue = (str.match(/potato/g) || []).length;
    // console.log(str);
    // console.log(rvalue);
    document.getElementById("presult").innerText = `
    no of potatoes = ${rvalue}
  `;
    pstring.value = "";
    return rvalue;
  }
};
const chardo = () => {
    const dstr = document.getElementById("dblr");
    if (dstr.value == "") {
      alert("Enter string please");
    } else {
      const result = doubl(dstr.value);
      // console.log(result);
      document.getElementById("dresult").innerText = ` ${result}`;
      dstr.value = "";
    }
  };
  
  const doubl() {
    let rvalue = "";
    for (let i = 0; i < v.length; i++) {
      rvalue += v[i] + v[i];
    }
    return rvalue;
  };
//  Salary calculator

  
    //   a
    const csalary = () => {
      const sal = document.getElementById("s");
    
      //   alert(value);
      if (sal.value == "") {
        alert("Please enter salary amount");
      } else {
        console.log(sal.value);
        const b = sal.value;
        let HRA;
        let DA;
        if (b <= 10000) {
          HRA = 20;
          DA = 80;
        } else if (b <= 20000) {
          HRA = 25;
          DA = 90;
        } else if (b > 20000) {
          HRA = 30;
          DA = 95;
        }
        console.log(b);
        const grosssalary =
          Number(b) + Number((b * HRA) / 100) + Number((b * DA) / 100);
    
        // alert(result);
        document.getElementById("sresult").innerText = `${grosssalary} `;
        sal.value = "";
      }
    };
    
const bill = () => {
  const unit = document.getElementById("unit").value;

  if (unit == "" || unit < 0) {
    alert("unit shoubld be greater than zero");
  } else {
    let cost;
    if (unit > 0 && unit <= 50) {
      cost = 0.5;
    } else if (unit > 50 && unit <= 150) {
      cost = 0.75;
    } else if (unit > 150 && unit <= 250) {
      cost = 1.2;
    } else {
      cost = 1.5;
    }
    const bill = unit * cost;
    const sr = (bill * 20) / 100;
    const netbill = bill + sr;

    document.getElementById(
      "uresult"
    ).innerText = `Total unit =  ${unit} , cost per unit= ${cost} Rs
    bill =${bill} ,surcharge = ${sr} Rs and net bill = ${netbill} Rs
    `;
  }
};