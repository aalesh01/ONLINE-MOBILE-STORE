var cartItems = JSON.parse(localStorage.getItem("cartItems"));

var totalP = 0;

cartItems.forEach((element, i) => {
    var card = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", element.image_url)

    var name = document.createElement("h3");
    name.innerText = element.name;

    var price = document.createElement("p");
    price.innerText = "Price: INR " + element.price;
    totalP += element.price;


    var rating = document.createElement("p");
    rating.innerText = "Rating: " + element.rating;

    var addToCartBT = document.createElement("button");
    addToCartBT.innerText = "Remove";
    addToCartBT.addEventListener("click", function () {
        cartItems.splice(i, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        document.location.reload();
    })

    card.append(image, name, price, rating, addToCartBT);

    document.getElementById("allCards").append(card);
});


var price = document.createElement("h3");
price.innerText = "Total Price:  " + totalP;

document.getElementById("tAmount").append(price);

document.getElementById("codeBT").addEventListener("click", function () {
    if (document.getElementById("code").value === "masai30") {
        var fPrice = document.createElement("h3");
        fPrice.innerText = "Final Price:  " + Math.round((totalP)- totalP * 0.3);
        document.getElementById("tAmount").append(fPrice);
    }
})


