
let inputdob = document.querySelector(".dob-input")
let FuturDOBDisable= new Date().toISOString().split("T")[0];
inputdob.setAttribute("max",FuturDOBDisable);
let culculatebtn = document.querySelector(".culculate-btn");
let ageresult = document.querySelector(".age-result");



culculatebtn.addEventListener("click", () => {
  if (inputdob.value === "") {
    alert("Please Enter Your Date Of Birth");
  } else {
    console.log("input dob", inputdob.value);
    const dob = new Date(inputdob.value);
  
    console.log("dob", dob);
    const y1 = dob.getFullYear();
    console.log("dob_year", y1);
    const m1=dob.getMonth()+1;
    console.log("dob month=",m1)
    
    const d1= dob.getDate();
    console.log("dob date=",d1)
   



    //  current date
    const date = new Date();
    console.log(date);
    const y2= date.getFullYear();
 console.log("now_year=",y2);
const m2=date.getMonth()+1;
console.log("now month=",m2);

 const d2=date.getDate();
 console.log("now date=",d2)

 let d3, m3, y3;
  y3=y2-y1;
  if(m2 >= m1){
   m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if(d2 >= d1){
    d3 = d2 - d1;
  }else {
    m3--;
 d3= getDayInMonth(y1, m1) + d2 - d1;
  }
if(m3 < 0){
  m3 = 11;
  y3--;
}
function getDayInMonth( year , month){
  return new Date( year ,month ,0).getDate();
}
  
console.log(y3,m3,d3)


    ageresult.innerHTML = `Your are ${y3} Year ${m3} Month ${d3} Days Old`;
 
  }

});