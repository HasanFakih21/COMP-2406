let dairy = [];
let pantry = [];
let meatandseafood = [];
let produce = [];
let bakery = [];
let frozen = [];

var filters = {
  "dairy" : dairy,
  "pantry" : pantry,
  "meat and seafood" : meatandseafood,
  "produce" : produce,
  "bakery" : bakery,
  "frozen" : frozen,
};

var cart = [];

window.onload = function() {
  let container = document.getElementById("fridgeContainer");
  for(let i = 0; i<fridges.length; i++) {
    let html = "<div class = fridgeCircle id = " + i + ">";
    html = html + "<img src= images/fridge.svg id='fridgeImage'>";
    html = html + "<p>" + fridges[i].name + "</p>";
    html = html + "<p>" + fridges[i].address.street + "</p>";
    html = html + "<p>" + fridges[i].contact_phone + "</p>";
    html = html + "</div>";
    container.innerHTML = container.innerHTML + html;
  }

  let x = document.getElementById("itemSelection");
  x.style.display = "none";

  let buttons = document.getElementsByClassName("fridgeCircle");
  for(let button of buttons) {
    button.addEventListener("click",handleButton);
  }
}

function fillArrays(fridge) {
  for(item in fridge.items) {
    filters[fridge.items[item].type][filters[fridge.items[item].type].length] = item;
  }
  console.log(filters);
}

function handleButton(event) {
  currFridge = event.target.id;
  document.getElementById("name").innerText = fridges[currFridge].name;
  document.getElementById("adress").innerText = fridges[currFridge].address.street;
  document.getElementById("phone").innerText = fridges[currFridge].contact_phone;
  document.getElementById("myBar").style.width = calculateProgress(currFridge)+"%";
  document.getElementById("myBar").innerHTML = "<p>" + calculateProgress(currFridge)+"% </p>";

  let itemS = document.getElementById("itemSelection");
  let header = document.createElement("h1");
  header.innerText = "Items in the " + fridges[currFridge].name;
  itemS.prepend(header);
  itemS.style.display = "block";

  let fridgeS = document.getElementById("fridgeSelection");
  fridgeS.style.display = "none";

  fillArrays(fridges[currFridge]);
  handleTypeAmount();

  event.stopPropagation();
}

function handleTypeAmount() {
  let dropDown = document.getElementsByClassName("dropItem");
  for(x of dropDown) {
    let total = 0;
    x.append(" (" + filters[x.id].length + ")");
    x.addEventListener("click",loadItems);
  }
}

function processItemButtons() {
  let additionButtons = document.getElementsByClassName("itemButtonAdd");
  for(let button of additionButtons) {
    button.addEventListener("click",handleAdd);
  }
  
  let subtractButtons = document.getElementsByClassName("itemButtonSubtract");
  for(let button of subtractButtons) {
    button.addEventListener("click",handleSubtract);
  }
}

function handleAdd(event) {
  let cartItems = document.getElementById("cartItems");
  let id = event.target.id.replace("add","");
  let itemName = fridges[currFridge].items[filters[currFilter][id]].name;
  let quantity = fridges[currFridge].items[filters[currFilter][id]].quantity;

  if(cart[itemName] != null) {
    if(cart[itemName] != quantity) {
      cart[itemName]++;
    }
  }
  else {
    cart[itemName] = 1;
  }

  if(document.getElementById("item"+ currFilter + id) != null) {
    document.getElementById("item"+ currFilter + id).innerText = "x" + cart[itemName] + " " + itemName;
  }
  else {
    cartItems.innerHTML = cartItems.innerHTML + "<li id = item" + currFilter + id + ">" + "x" + cart[itemName] + " " + itemName + "</li>";
  }

  document.getElementById("item" + id).innerHTML = "<div class = 'itemNum' id ='item" + id + "'>" + cart[itemName] + "</div>";
}

function handleSubtract(event) {
  let cartItems = document.getElementById("cartItems");
  let id = event.target.id.replace("sub","");
  let itemName = fridges[currFridge].items[filters[currFilter][id]].name;

  console.log(itemName);

  if(cart[itemName] != null) {
    if(cart[itemName] <= 1) {
      cart[itemName] = 0;
      elem = document.getElementById("item"+ currFilter + id);
      elem.parentNode.removeChild(elem);
      document.getElementById("item" + id).innerHTML = "<div class = 'itemNum' id ='item" + id + "'>" + cart[itemName] + "</div>";
    }
    else {
      cart[itemName]--;
      document.getElementById("item"+ currFilter + id).innerText = "x" + cart[itemName] + " " + itemName;
      document.getElementById("item" + id).innerHTML = "<div class = 'itemNum' id ='item" + id + "'>" + cart[itemName] + "</div>";
    }
  }
}
 
function loadItems(event) {
  currFilter = event.target.id;
  if(filters[currFilter].length == 0) {
    return;
  }

  let table = document.getElementById("itemTable");
  table.innerHTML = "";
  let i = 0;
  for(let item of filters[currFilter]) {
    let imageURL = fridges[currFridge].items[item].img;
    let name = fridges[currFridge].items[item].name;
    let quantity = fridges[currFridge].items[item].quantity;

    let row = document.createElement("tr");

    let imageCell = document.createElement("td");
    imageCell.innerHTML = "<img src =" + imageURL + ">";
    row.appendChild(imageCell);

    let infoCell = document.createElement("td");
    infoCell.innerHTML = name + "</br>" + "Quantity: " + quantity + "</br>Pickup item: "
    row.appendChild(infoCell);

    let amount = 0;
    if(cart[fridges[currFridge].items[item].name] != null) {
      amount = cart[fridges[currFridge].items[item].name];
    }

    let buttonCell = document.createElement("td");
    buttonCell.innerHTML = "<button type ='button' class ='itemButtonAdd' id = 'add" + i + "'>+</button>" +
    "<div class = 'itemNum' id ='item" + i + "'>" +amount+ "</div>" +
    "<button type ='button' class ='itemButtonSubtract' id = 'sub" + i + "'>-</button>";
    row.appendChild(buttonCell);

    table.appendChild(row);
    i++;
  }
  processItemButtons();
}

function calculateProgress(fridgeID) {
  let total = 0;
  for(item in fridges[fridgeID].items) {
    total = total + fridges[fridgeID].items[item].quantity;
  }
  let percentage = (100 * total) / fridges[fridgeID].capacity;
  return 100 - Math.round(percentage);
}