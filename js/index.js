// ITERATION 1

//const { product } = require("puppeteer");

function updateSubtotal(product) {
//console.log('Calculating subtotal, yey!');
const price = product.querySelector('.price span').innerText
const quantity = product.querySelector('.quantity input').value;

const total = price * quantity;

const subtotal = product.querySelector('.subtotal span').innerText = total;
 
return subtotal

}



function calculateAll() {
  // ITERATION 2
  
  const updateAllProducts = Array.from(document.getElementsByClassName('product'))
  let total = 0
  
  updateAllProducts.forEach((element)=>(total += updateSubtotal(element)))

  // ITERATION 3

  document.querySelector('#total-value span').textContent = total

  return total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const toRemove = target.parentNode.parentNode;
  toRemove.remove()

  calculateAll()
  
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = Array.from(document.getElementsByClassName('btn-remove'));

  removeBtn.forEach((element)=>{
  element.addEventListener('click', removeProduct)
})

// ITERATION 5

function createProduct() {
  //... your code goes here
}





  //... your code goes here
});
