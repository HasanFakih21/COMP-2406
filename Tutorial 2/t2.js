let person = [
    {Name: "Joe Janson", Age: 23, Occupation: "Carpenter", Salary: "$80,000"},
    {Name: "Elizabeth Walker", Age: 31, Occupation: "Dentist", Salary: "$170,000"},
    {Name: "Harold Watson", Age: 19, Occupation: "Cashier", Salary: "$35,000"},
    {Name: "Jolene Logan", Age: 25, Occupation: "Banker", Salary: "$50,000"},
    {Name: "Kevin Stacey", Age: 45, Occupation: "Lawyer", Salary: "$130,000"},
]

let youngest = person[0];


function print_people(people){
    for(i = 0; i<people.length; i++) {
        if(youngest.Age > people[i].Age) {
            youngest = people[i];
        }
        console.log("Name: " + people[i].Name + ", Age: " + people[i].Age + ", Occupation: " + people[i].Occupation + ", Salary: " + people[i].Salary);
    }
}

print_people(person);
console.log("The youngest person is: " + youngest.Name + ", " + youngest.Occupation);





let blocks = document.querySelectorAll("div");

for (let block of blocks) {
    block.addEventListener("click", handleBlock);
}

function handleBlock(event){
	if(event.target.id == "block1"){
		document.getElementById("block1").style.visibility = "hidden";
        document.getElementById("block2").style.visibility = "visible";
	}
	else if(event.target.id == "block2"){
		document.getElementById("block2").style.visibility = "hidden";
        document.getElementById("block1").style.visibility = "visible";
	}
    event.stopPropagation();
}



let items = ["Almond Milk","Whole Milk","Salted Butter","Grapes","Apples","Bannanas","Spinach","Lettuce"];

let currItem = -1;

window.onload = function() {
	let list = document.getElementById("list");
    let loop = "";
    for(i = 0; i<items.length;i++) {
        loop = loop + "<li id = '" + i + "'>" + items[i] + "</li>";
    }
    list.innerHTML = loop;

    list = document.querySelectorAll("li");
    for (let item of list) {
        item.addEventListener("click", handleList);
    }
    document.getElementById("submit").addEventListener("click", addToCart)
};

let pointer;

function handleList(event){
    if(pointer!=null) {
        pointer.style.color = "teal";
    }
	currItem = event.target.id;
    event.target.style.color = "blue";
    pointer = event.target;
}

function addToCart(event){
    if(!(document.getElementById("numItems").value > 0)) {
        alert("Please enter a number");
    }
    else if (currItem == -1) {
        alert("Please select an item");
    }
    else {
        document.getElementById("cart").innerHTML = document.getElementById("cart").innerHTML + "<li>" + "x" + document.getElementById("numItems").value + " "+ items[currItem] + "</li>";
    }
    list = document.querySelectorAll("li");
}

