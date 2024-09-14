const burgerMenu = document.querySelector('.burger_menu');
const burgerBtn =document.querySelector('.burger_btn');

burgerBtn.addEventListener('click', ()=>{
    
    if (burgerBtn.value == "open"){
    burgerMenu.style.right = "0%";
    
    burgerBtn.style.opacity = 0;
    burgerBtn.value = "close";
    setTimeout(() =>{
        burgerBtn.style.opacity = 1;
        burgerBtn.children[0].src = "https://odinkeane.github.io/web-developer/practical5/close.svg"
        burgerBtn.style.zIndex = 2;
    }, 500)
    
    } else {
        burgerMenu.style.right = "100%";
        burgerBtn.value = "open";
        
        burgerBtn.style.opacity = 0;
        setTimeout(() =>{
            burgerBtn.style.zIndex = 0;
            burgerBtn.style.opacity = 1;
            burgerBtn.children[0].src = "https://odinkeane.github.io/web-developer/practical5/burger.svg"
          
        }, 500) }
})


function request(url) {
    return fetch(url)
    .then((res) => {
    return res.json();
    })
    .then((data) => {
    return data;
    })
    .catch((error) => {
    console.log(error);
    });
   } 
const products = document.querySelector('.products');


let sliderElements;
const percent = 50;


window.addEventListener('load', async ()=>{
    const url = "data.json"
    const response = await request(url);
    
    showProduct(response.data);

    sliderElements = document.querySelectorAll('.slider_element');
    for (let i=0; i < sliderElements.length; i++){
        sliderElements[i].style.left = percent * i + "%";
    }
})


function showProduct(response){
    for (res of response){
        products.innerHTML += `
        <div class="slider_element">
            <div class="product">
                <img class="product_img" src='${res.urlImage}'>
                <h4>${res.name}</h4>
                <p class="product_price">$${res.price}</p>
            
            </div>
        </div>`;

        if (res.hot){
        products.children[products.children.length-1].children[0].innerHTML +=`
            <img class="product_hot" src=hot.svg>
            `
        }

    }
}

function right(){
if (sliderElements[sliderElements.length-1].style.left == "0%"){
    return;
}

for (let element of sliderElements){
    element.style.left = Number(element.style.left.replace("%", "")) -  percent + "%";
}
}

function left(){
    if (sliderElements[sliderElements.length-1].style.left == percent * (sliderElements.length-1) + "%"){
        return;
    }

    for (let element of sliderElements){
        element.style.left = Number(element.style.left.replace("%", "")) +  percent + "%";
    }
}