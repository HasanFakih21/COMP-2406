populateStudents();

// TODO: add the input event listeners to the form fields. These event listeners should call
// the checkTextField method below
document.getElementById("id").addEventListener("input", checkTextField);
document.getElementById("fname").addEventListener("input", checkTextField);
document.getElementById("lname").addEventListener("input", checkTextField);
document.getElementById("agrade").addEventListener("input", checkTextField);
document.getElementById("tgrade").addEventListener("input", checkTextField);
document.getElementById("egrade").addEventListener("input", checkTextField);

// TODO: checks whether the input entered in a text field is valid
function checkTextField(event){
  if(event.target.id == "id"){
    let element = document.getElementById("id");
	  if(isNaN(element.value)) {
      element.classList.add("error");
      element.classList.remove("valid");
    }
    else {
      element.classList.add("valid");
      element.classList.remove("error");
    }
	}
  else if(event.target.id == "fname"){
	  let element = document.getElementById("fname");
	  if(isNaN(element.value)) {
      element.classList.add("valid");
      element.classList.remove("error");
    }
    else {
      element.classList.add("error");
      element.classList.remove("valid");
    }
	}
  else if(event.target.id == "lname"){
	  let element = document.getElementById("lname");
	  if(isNaN(element.value)) {
      element.classList.add("valid");
      element.classList.remove("error");
    }
    else {
      element.classList.add("error");
      element.classList.remove("valid");
    }
	}
  else if(event.target.id == "agrade"){
	  let element = document.getElementById("agrade");
	  if(isNaN(element.value)) {
      element.classList.add("error");
      element.classList.remove("valid");
    }
    else {
      element.classList.add("valid");
      element.classList.remove("error");
    }
	}
  else if(event.target.id == "tgrade"){
	  let element = document.getElementById("tgrade");
	  if(isNaN(element.value)) {
      element.classList.add("error");
      element.classList.remove("valid");
    }
    else {
      element.classList.add("valid");
      element.classList.remove("error");
    }
	}
  else if(event.target.id == "egrade"){
	  let element = document.getElementById("egrade");
	  if(isNaN(element.value)) {
      element.classList.add("error");
      element.classList.remove("valid");
    }
    else {
      element.classList.add("valid");
      element.classList.remove("error");
    }
	}


  let all = document.querySelectorAll("input");
  let flag = true;
  for(let i = 0; i<all.length-1;i++) {
    if(!(all[i].classList.contains("valid") && all[i].value.length>0)) {
      flag = false;
    }
  }

  if(flag == true) {
    document.getElementById("btnSubmit").disabled = false;
  }
  else {
    document.getElementById("btnSubmit").disabled = true;
  }
}
// TODO: processes the clicking of the submit button
function processForm(){
  console.log("i was pressed");
  let table = document.querySelector("table");

  let row = document.createElement("tr");

  let iDCell = document.createElement("td");
  iDCell.textContent = document.getElementById("id").value;
  row.appendChild(iDCell);

  let fNameCell = document.createElement("td");
  fNameCell.textContent = document.getElementById("fname").value;
  row.appendChild(fNameCell);
  
  let lNameCell = document.createElement("td");
  lNameCell.textContent = document.getElementById("lname").value;
  row.appendChild(lNameCell);

  let aGradeCell = document.createElement("td");
  aGradeCell.textContent = document.getElementById("agrade").value;
  row.appendChild(aGradeCell);

  let tGradeCell = document.createElement("td");
  tGradeCell.textContent = document.getElementById("tgrade").value;
  row.appendChild(tGradeCell);

  let eGradeCell = document.createElement("td");
  eGradeCell.textContent = document.getElementById("egrade").value;
  row.appendChild(eGradeCell);

  table.appendChild(row);
}

// populate the table with student data from students.js file. We're reading information
// from an on object and using that to populate the table
function populateStudents(){
  let table = document.querySelector("table");

  // iterate through all the objects in the students array
  for(let student of students){
    // save the information for the current in variables
    let studentID = student.snum;
    let firstName = student.fname;
    let lastName = student.lname;
    let assignmentGrade = student.agrade;
    let tutorialGrade = student.tgrade;
    let examGrade = student.egrade;

    // time to create a new HTML element!
    // 1). we first need to create a new row
    let row = document.createElement("tr");

    // create a cell for the student ID, update its text value, and append it to the row
    let iDCell = document.createElement("td");
    iDCell.textContent = studentID;
    row.appendChild(iDCell);

    // create a cell for the first name, update its text value, and append it to the row
    let fNameCell = document.createElement("td");
    fNameCell.textContent = firstName;
    row.appendChild(fNameCell);

    // create a cell for the last name, update its text value, and append it to the row
    let lNameCell = document.createElement("td");
    lNameCell.textContent = lastName;
    row.appendChild(lNameCell);

    // create a cell for the assignment grade, update its text value, and append it to the row
    let aGradeCell = document.createElement("td");
    aGradeCell.textContent = assignmentGrade.toFixed(2);
    row.appendChild(aGradeCell);


    // create a cell for the tutorial grade, update its text value, and append it to the row
    let tGradeCell = document.createElement("td");
    tGradeCell.textContent = tutorialGrade.toFixed(2);
    row.appendChild(tGradeCell);

    // create a cell for the exam grade, update its text value, and append it to the row
    let eGradeCell = document.createElement("td");
    eGradeCell.textContent = examGrade.toFixed(2);
    row.appendChild(eGradeCell);

    // append the row to the table
    table.appendChild(row);
  }
}
