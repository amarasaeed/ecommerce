
// create object in array to store these values in div

let productsdata = [
    {
        img: "../images/1.jpg",
        name: "Half Running Set",
        price: "2000",
        desc: "A comfortable half running set for your daily workouts.",
        total: "2000",
    },
    {
        img: "../images/2.jpg",
        name: "Full Running Set",
        price: "3000",
        desc: "A full running set for all seasons.",
        total: "3000",
    },
    {
        img: "../images/3.jpg",
        name: "Winter Jacket",
        price: "4000",
        desc: "Stay warm with this cozy winter jacket.",
        total: "4000",
    },
    {
        img: "../images/4.jpg",
        name: "Summer Set",
        price: "3000",
        desc: "Light and airy summer wear.",
        total: "3000",
    },
    {
        img: "../images/5.jpg",
        name: "Spring Tracksuit",
        price: "5000",
        desc: "Perfect for springtime runs.",
        total: "5000",
    },
    {
        img: "../images/6.jpg",
        name: "Rain Jacket",
        price: "6000",
        desc: "Water-resistant jacket for rainy days.",
        total: "6000",
    },
    {
        img: "../images/7.jpg",
        name: "Casual Hoodie",
        price: "1000",
        desc: "Comfortable hoodie for casual wear.",
        total: "1000",
    },
    {
        img: "../images/8.jpg",
        name: "Gym Shorts",
        price: "3000",
        desc: "Durable shorts for intense gym sessions.",
        total: "3000",
    }
];
// select the div container and set it innerhtml by usi map function 
// it will take the values of img price a d name from above objetct
let products = document.getElementById('products');
products.innerHTML = productsdata.map((x) => {
    return `
        <div class="row" onclick="showDetails('${x.name}', '${x.img}', '${x.price}', '${x.desc}')">
            <div><img src="${x.img}"></div>
            <h5>sale</h5>
            <div class="heart" >
                <i  id="cartbtn"  class="fas fa-shopping-cart"   onclick="addToCart('${x.name}', '${x.img}', '${x.price}','${x.total}')" )></i>
            </div>
            <div class="rating"> 
              <i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>

            </div>
            <div class="price">
                <h4>${x.name}</h4>
                <p>${x.price}</p>
            </div>
            
        </div>
    `;
}).join("");
//  create a show detail function to display the details of product in detail page
function showDetails(name, img, price, desc) {
    localStorage.setItem('productName', name);
    localStorage.setItem('productImage', img);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productDescription', desc);
    window.location.href = '../html/productdetails.html';

}
// cartpage
let counter = document.getElementById('counter') //1 select the counter box
let storedNumber = localStorage.getItem('value')//2 get data from local storage and store it in variable
//3 check if there is any data or not 
if (storedNumber != null) {
    counter.innerText = storedNumber
}
else {
    counter.innerText = 0
}
//this function has been created for the purpose of adding that product in the cart page of which carticon we click
function addToCart(name, img, price, total) {

    let existingData = localStorage.getItem('data');
    let items = existingData ? existingData : '';
    let newItem = ` <tr class="cart-Item">
    <td id="image"><img src="${img}" alt=""  style="width: 70px;height: 70px; " ></td>
    <td id="name">${name}</td>
    <td class="price">3000</td>
    <td id="quantity"><span class="decrement" >-</span>
        <span id="one" class="count">1</span>
        <span class="increment">+</span></td>
    <td class="total">3000</td>
    <td><i class="fas fa-times removeItem" style="border: 1px solid black; border-radius: 100%; padding: 2px 6px 2px 5px; "></i>
    </td>
</tr>`
    items += newItem;
    localStorage.setItem('data', items)
    //4 convert the data type of  value which have gotten from local storage and save it in variable
    var cartNumber = (parseInt(localStorage.getItem('value'))) || 0
    //5 add 1 in the gotten value
    cartNumber++;
    //6 now add this new gotten value in the localstorage
    localStorage.setItem('value', cartNumber)
    //7 now again run the if else
    let storedNumber = localStorage.getItem('value')
    if (storedNumber != null) {
        counter.innerText = storedNumber
    }
    else {
        counter.innerText = 0

    }
    //this event has been used to stop the cart button to display the details of the product
    event.stopPropagation()
};
let sliderbtn = document.querySelector('.menu-btn')
let nav = document.querySelector('.nav')
let crossbtn=document.querySelector('.close')
sliderbtn.addEventListener('click', () => {
    nav.style.right = '0'
})
crossbtn.addEventListener('click',()=>{
    nav.style.right='-100%'
})
