


function outer() {

  let t = 2;

   return function inner() {
    console.log(t);
  }

  inner();

}

outer();