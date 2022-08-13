// IIFE help to keep data not overwritten in the program(encapsulation of data)

(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})();

  // console.log(isPrivate);       // impossible

(() => console.log(`This will ALSO never run again`))()