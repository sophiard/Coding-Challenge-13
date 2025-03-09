// Task 2 - Employee Cards Dynamic Addition

let employeecount = 0; //start at 0 and use counter so each id is different 

function createElement(name, position) { //created a function createelement 
    
    const employeeContainer = document.getElementById("employeeContainer"); 
    //used to find employeee by id
    let card = document.createElement("div"); 
    
    card.setAttribute("class", "employeeCard"); 
    card.setAttribute("id", `employee${employeecount}`); 
    card.innerHTML = `<h3>${name}</h3><p>${position}</p>`;
};
    //set attributes 

//Test Case - Task 2

createElement("SpongeBob", "Frycook");
createElement("Squidward", "Cashier");
createElement("Mr. Krabs", "Manager");

//Task 3 - Bulk Update on Employee Cards

const employeeCardNodeList = document.querySelectorAll("employeeCard"); 
// used to select all elements with the class employee card
const employeeCardArray = Array.from(employeeCardNodeList); //Convert  into an array 

employeeCardArray.forEach(card => {
    card.style.backgroundColor = "light pink"; //changed background color
    card.style.border = "3px pink"; //added a border 
});