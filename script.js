



 

// The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.

//       function handle(event) {
//   // inside this event handler, "this" is the element that it was attached to
//   // and the current value of the element can be retrieved with this.value
//   console.log(this.value);
// }

// document.getElementById("search").addEventListener("input",handle);

let inp = document.getElementsByTagName('input')[0]
//  console.log(inp);

let display = document.getElementById('display')
display.setAttribute("style", 'color:red')
let limtation = 'min 8 character and max 16  <br/> a letter should be capital from (A to Z) <br/> it should contain at least 1 special character <br/> it should contain at least 1 number'



function chk() {
  console.log(this.value);

  //  defining datatypes 
  let s = this.value
  let length = s.length - 1 // charCodeAt (index value) thsi function takes index and s.length gives length which is always more than index value , so -1 nessary



  // total char 
  if (s.length < 8 || s.length > 16) {
    console.log("executed " + 1);
    display.innerHTML = "min 8 character and max 16"
  }
  else {
    console.log("executed " + 2);
    display.innerHTML = ""
  }

  // a capital char 
  let capital_char = /[A-Z]/
  if (!(capital_char.test(s))) {


    console.log("executed " + 3);



    let res = isNaN(s.charAt(0).charCodeAt(0))
    if (res == true) {
      let l = display.innerHTML
      display.innerHTML = l + " <br/>"
    }
    else {
      let l = display.innerHTML
      display.innerHTML = l + " <br/>  a letter should be capital from (A to Z) "
    }
  }
  else {
    console.log("executed " + 4);


    let l = display.innerHTML
    display.innerHTML = l + " <br/>"
  }


  // for space 
  if (s.includes(' ') == true) {
    console.log("executed " + 5);
    let l = display.innerHTML
    display.innerHTML = l + " <br/> it should not contain any space "

  }
  else {
    console.log("executed " + 6);

    let l = display.innerHTML
    display.innerHTML = l + " <br/>"
  }

  // {


  //   // for special character -> with regex

  //   // let specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/;
  let specialChars = /[^a-zA-Z0-9\s]/;

  if (!(specialChars.test(s))) {


    console.log("executed " + 7);



    let res = isNaN(s.charAt(0).charCodeAt(0))
    if (res == true) {
      let l = display.innerHTML
      display.innerHTML = l + " <br/>"
    }
    else {
      let l = display.innerHTML
      display.innerHTML = l + " <br/> it should contain at least 1 special character "
    }
  }
  else {
    console.log("executed " + 8);


    let l = display.innerHTML
    display.innerHTML = l + " <br/>"
  }






  // for numbers with regex 

  let at_least_one_number = /[0-9]/

  if (!(at_least_one_number.test(s))) {


  console.log("executed " +9);



  let res = isNaN(s.charAt(0).charCodeAt(0))
  if (res == true) {
    let l = display.innerHTML
    display.innerHTML = l + " <br/>"
  }
  else {
    let l = display.innerHTML
    display.innerHTML = l + " <br/> it should contain at least 1 number "
  }
  }
  else {
  console.log("executed " + 10);


  let l = display.innerHTML
  display.innerHTML = l + " <br/>"
  }






}


inp.addEventListener('input', chk)

 