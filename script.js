let productsdata = [
    {
        img: "../images/1.jpg",
        name: "Half Running Set",
        price: "$99-$129",
        desc: "A comfortable half running set for your daily workouts."
    },
    {
        img: "../images/2.jpg",
        name: "Full Running Set",
        price: "$199-$229",
        desc: "A full running set for all seasons."
    },
    {
        img: "../images/3.jpg",
        name: "Winter Jacket",
        price: "$149-$179",
        desc: "Stay warm with this cozy winter jacket."
    },
    {
        img: "../images/4.jpg",
        name: "Summer Set",
        price: "$89-$109",
        desc: "Light and airy summer wear."
    },
    {
        img: "../images/5.jpg",
        name: "Spring Tracksuit",
        price: "$109-$139",
        desc: "Perfect for springtime runs."
    },
    {
        img: "../images/6.jpg",
        name: "Rain Jacket",
        price: "$129-$159",
        desc: "Water-resistant jacket for rainy days."
    },
    {
        img: "../images/7.jpg",
        name: "Casual Hoodie",
        price: "$79-$99",
        desc: "Comfortable hoodie for casual wear."
    },
    {
        img: "../images/8.jpg",
        name: "Gym Shorts",
        price: "$59-$79",
        desc: "Durable shorts for intense gym sessions."
    }
];

let products = document.getElementById('products');
products.innerHTML = productsdata.map((x) => {
    return `
        <div class="row" onclick="showDetails('${x.name}', '${x.img}', '${x.price}', '${x.desc || 'No description available.'}')">
            <div><img src="${x.img}"></div>
            <h5>sale</h5>
            <div class="heart">
                <i class='bx bx-heart'></i>
            </div>
            <div class="rating"> 
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
            </div>
            <div class="price">
                <h4>${x.name}</h4>
                <p>${x.price}</p>
            </div>
        </div>
    `;
}).join("");

function showDetails(name, img, price, desc) {
    localStorage.setItem('productName', name);
    localStorage.setItem('productImage', img);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productDescription', desc);
    window.location.href = '../html/productdetails.html'; // Adjust path if necessary
}
