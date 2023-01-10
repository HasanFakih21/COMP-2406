function landscape() {
  let top = "";
  let bot = "";
  let result = "";

  function flat(size) {
    for (let count = 0; count < size; count++){
      top += " ";
      bot += "_";
	}
  }

  function hill(size) {
    bot += "/";
    top += " ";
    for (let count = 0; count < size; count++){
      top += "_";
      bot += " ";
	}
    bot += "\\";
    top += " ";
  }

  //START BUILD SCRIPT
  flat(3);
  hill(4);
  flat(6);
  hill(1);
  flat(1);
  //END BUILD SCRIPT

  result = top + "\n" + bot;

  return result;

}

console.log("")
console.log(landscape())
