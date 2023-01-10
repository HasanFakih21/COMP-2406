let population = 2;
let weeks = 1;
console.log(population);
while(population<10000) {
    population = population*2;
    weeks++;
    console.log(population);
}

console.log("It will take " + weeks + " weeks for the insect population to exceed 10,000 insects.\n");

population = 2;
weeks = 1;

do {
    console.log(population);
    if(weeks%4 == 0) {
        population = population * 0.6;
    } 
    population = population * 2;
    weeks++;
} while(population*0.6<10000);
console.log(population);

console.log("It will take " + weeks + " weeks for the insect population to exceed 10,000 insects.\n");