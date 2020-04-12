'use strict'
var nameOfProduct = document.querySelectorAll('.images > div > div >h4');
var priceOfProduct = document.querySelectorAll('.images > div > div >h5');
//the divs of images classes
var firstdivs = document.querySelectorAll('.images > div ');
var images = document.querySelectorAll('.images > div img');
var cupcakes = [];
var sweets = [];
var cakes = [];
var doughnuts = [];
var allbtn = document.getElementById('all');
var cakebtn = document.getElementById('cake');
var cupcakebtn = document.getElementById('cupcake');
var sweetbtn = document.getElementById('sweet');
var doughnutbtn = document.getElementById('doughnut');
var input = document.querySelector('input');
var searchbtn = document.querySelector('i');

//adding names and prices to products
for (var i = 0; i < images.length; i++){
    var name = images[i].getAttribute('src');
    if(name.includes('cup')){
        nameOfProduct[i].textContent = 'cupcake';
        priceOfProduct[i].textContent = '10$';
        cupcakes.push(images[i].parentElement)
    }
    else if(name.includes('cake')){
        nameOfProduct[i].textContent = 'cake';
        priceOfProduct[i].textContent = '12$';
        cakes.push(images[i].parentElement)
    }
    else if(name.includes('sweets')){
        nameOfProduct[i].textContent = 'sweets';
        priceOfProduct[i].textContent = '5$';
        sweets.push(images[i].parentElement);
    }
    else{
        nameOfProduct[i].textContent = 'doughnut';
        priceOfProduct[i].textContent = '20$';
        doughnuts.push(images[i].parentElement);
    }    
    
};

//creating functions for filtering
function showall(){
    for(var i = 0; i < firstdivs.length; i++){
        firstdivs[i].style.display = "block";
        firstdivs[i].className = ''
    }
    for(var i = 1; i < firstdivs.length; i = i+3){
        firstdivs[i].className = 'mid'
    }
}

function showcupcake(){
    for(var i = 0; i < firstdivs.length; i++){
        firstdivs[i].style.display = "none";
    }
    for(var i = 0; i < cupcakes.length; i++){
        cupcakes[i].style.display = 'block'
    }
    cupcakes[0].className = '';
    cupcakes[1].className = 'mid';
    cupcakes[2].className = ''
}

function showcake(){
    for(var i = 0; i < firstdivs.length; i++){
        firstdivs[i].style.display = "none";
    }
    for(var i = 0; i < cupcakes.length; i++){
        cakes[i].style.display = 'block'
    }
    cakes[0].className = '';
    cakes[1].className = 'mid';
    cakes[2].className = ''
}

function showsweet(){
    for(var i = 0; i < firstdivs.length; i++){
        firstdivs[i].style.display = "none";
    }
    for(var i = 0; i < cupcakes.length; i++){
        sweets[i].style.display = 'block'
    }
    sweets[0].className = '';
    sweets[1].className = 'mid';
    sweets[2].  className = ''    
}

function showdoughnut(){
    for(var i = 0; i < firstdivs.length; i++){
        firstdivs[i].style.display = "none";
    }
    for(var i = 0; i < cupcakes.length; i++){
        doughnuts[i].style.display = 'block'
    }
    doughnuts[0].className = '';
    doughnuts[1].className = 'mid';
    doughnuts[2].className = ''
}

function search(){
    var producttype = input.value;
      if(producttype === 'cake'){
          showcake();
      }else if(producttype === 'cupcake'){
          showcupcake()
      }else if(producttype === 'sweet'){
          showsweet()
      }else if(producttype === 'doughnut'){
          showdoughnut()
      }else if(producttype === 'all' || producttype == ''){
          showall()
      }else{
          alert('dosn\'t exsist')
      }
}

allbtn.addEventListener('click',showall);

cupcakebtn.addEventListener('click',showcupcake);

doughnutbtn.addEventListener('click',showdoughnut);

cakebtn.addEventListener('click',showcake);

sweetbtn.addEventListener('click',showsweet);

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      search()
  }
});


searchbtn.addEventListener('click',function(){
    search()
})
