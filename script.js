
let inp = document.getElementsByTagName('input')[0]


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

 

// explanation of some related topics


// In JavaScript, the this keyword refers to an object.

// The charAt() method returns the character at a specified index (total_s_char) in a string.

// The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
// utf-16 code unit probably similar as ascii unit table 

// the isNaN() method is useful to check whether is variable is of any other type rather than the number data type.

// The JavaScript includes() method was introduced with ES6, and it is the most common and modern way of checking if a string contains a specific character or a series of characters.

//  What is regex in JavaScript?
// In JavaScript, a Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern. For example, /^a...s$/ The above code defines a RegEx pattern. The pattern is: any five letter string starting with a and ending with s  
// eg 1
// let specialChars =/^a...s$/;

// console.log(specialChars.test("afdss"));

// eg 2
//   let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;

// console.log(specialChars.test("String with speci@l ch@ract&r$"));
// console.log(specialChars.test("String with spaces"));
// console.log(specialChars.test("StringWithoutSpaces"));

// in this regex /[^a-zA-Z0-9\s]/
// ^           means not 
// \s          all white spaces
// a-zA-Z0-9   all ranges given
