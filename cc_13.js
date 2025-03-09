let employeecount = 0; //start at 0 and use counter so each id is different 

function createElement(name, position) { //created a function createElement
    
    const employeeContainer = document.getElementById("employeeContainer"); 
    let card = document.createElement("div"); 
    
    card.setAttribute("class", "employeeCard"); 
    card.setAttribute("id", `employee${employeecount}`); 
    card.innerHTML = `<h3>${name}</h3><p>${position}</p>`;

    //Task 4 - Employee Card Removal with Event Bubblin
    card.addEventListener("click", () => {console.log(`Clicked ${card.id} - ${name}`)}) 

    removebutton = document.createElement("button");
    removebutton.textContent = "Remove employee"; 
    //removes card
    
    removebutton.addEventListener("click", (event) => { 
        employeeContainer.removeChild(card) 
        //removeChild card 
        event.stopPropagation(); 
        // Use stopPropagation() which STOPS EVENT FROM PROPAGATING(bubbling)
    });

    
      //Task 5 - Inline Editing for Employee Cards
      editbutton = document.createElement("button"); //made a Edit button
      editbutton.textContent = "Edit information"; //Adding the text
  
      editbutton.addEventListener("click", (event) => { // allows edit option
          saveButton = document.createElement("button"); 
          saveButton.textContent = "Save information"; //allows to add info and save it 
          card.replaceChild(saveButton, card.children[2]); 
          card.children[1].outerHTML += `<input value="${name}"><input value="${position}">`
      
          saveButton.addEventListener("click", (event) => { 
            //// Updates name and position with input values
              card.children[0].textContent = card.children[2].value 
              card.children[1].textContent = card.children[3].value 
              //sets name and position to input value 
          });
          event.stopPropagation();
      });
  
      card.appendChild(editbutton);
      card.appendChild(removebutton); 
      //appends remove button 
  
      employeeContainer.appendChild(card); 
      //Appends the employee card to the employeeContainer
    };
      createElement("SpongeBob", "Frycook");
      createElement("Squidward", "Cashier");
      createElement("Mr. Krabs", "Manager");
      //created elemetnts (used spongebob)