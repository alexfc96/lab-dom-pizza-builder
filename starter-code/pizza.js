// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else{
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function($greenPep){
    if(state.greenPeppers){
      $greenPep.style.visibility = "visible";
    } else{
      $greenPep.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const lookingForSauce = document.querySelector(".sauce");
    if(state.whiteSauce) {
      lookingForSauce.classList.add("sauce-white");
    } else {
      lookingForSauce.classList.remove("sauce-white");
    } 
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const lookingForCrust = document.querySelector(".crust");
    if(state.glutenFreeCrust){
      lookingForCrust.classList.add("crust-gluten-free");
    } else{
      lookingForCrust.classList.remove("crust-gluten-free");
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
  const activePepperoni = document.querySelector(".btn-pepperonni");
  if(state.pepperonni){
    //document.querySelector('.btn.btn-pepperonni').classList.add(' active')
    activePepperoni.classList.add("active");
  } else{
    //document.querySelector('.btn.btn-pepperonni').classList.remove(' active')
    activePepperoni.classList.remove("active");
  }

  const activeMushrooms = document.querySelector(".btn-mushrooms");
  if(state.mushrooms){
    //document.querySelector('.btn.btn-mushrooms').classList.add(' active')
    activeMushrooms.classList.add("active")
  } else{
    //document.querySelector('.btn.btn-mushrooms').classList.remove(' active')
    activeMushrooms.classList.remove("active")
  }

  const activeGreenPeppers = document.querySelector(".btn-green-peppers");
  if(state.greenPeppers){
    activeGreenPeppers.classList.add("active")
  } else{
    activeGreenPeppers.classList.remove("active")
  }

  const activeWhiteSauce = document.querySelector(".btn-sauce");
  if(state.whiteSauce){
    activeWhiteSauce.classList.add("active")
  } else{
    activeWhiteSauce.classList.remove("active")
  }

  const activeGlutenFreeCrust = document.querySelector(".btn-crust");
  if(state.glutenFreeCrust){
    activeGlutenFreeCrust.classList.add("active")
  } else{
    activeGlutenFreeCrust.classList.remove("active")
  }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let sumOfIngredients = 10; //the base of cheese
  const ingredientsList = document.querySelector(".panel.price ul");
  ingredientsList.innerHTML = "";

  if(state.pepperonni){
    ingredientsList.innerHTML += `<li>${ingredients.pepperonni.price} ${ingredients.pepperonni.name}</li>`; //IMPORTANT put the special comas `` for entry into the variables
    sumOfIngredients = sumOfIngredients + ingredients.pepperonni.price;
  }
  if(state.mushrooms){
    ingredientsList.innerHTML += `<li>${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`; 
    sumOfIngredients = sumOfIngredients + ingredients.mushrooms.price;
  }
  if(state.greenPeppers){
    ingredientsList.innerHTML += `<li>${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`; 
    sumOfIngredients = sumOfIngredients + ingredients.greenPeppers.price;
  }
  if(state.whiteSauce){
    ingredientsList.innerHTML += `<li>${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`; 
    sumOfIngredients = sumOfIngredients + ingredients.whiteSauce.price;
  }
  if(state.glutenFreeCrust){
    ingredientsList.innerHTML += `<li>${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`; 
    sumOfIngredients = sumOfIngredients + ingredients.glutenFreeCrust.price;
  }
  

  const finalPrice = document.querySelector("strong");
  finalPrice.innerHTML = `${sumOfIngredients}` //the total suma of the differents ingredients

}


renderEverything()    //por defecto creo que esto venía activado(tenerlo en cuenta!!!)

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").onclick = function(){
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn.btn-green-peppers").onclick = function(){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function(){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function (){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}