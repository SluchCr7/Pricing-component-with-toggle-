let month = document.getElementById("text_monthly");
let year = document.getElementById("text_yearly");
let circle = document.getElementById("circle");
let switchcircle = document.getElementById("switch");

let price = document.querySelectorAll(".price");

switchcircle.addEventListener("click", () => {
    if (circle.classList.contains("left")) {
        circle.classList.remove("left");
        circle.classList.add("right");
        price.forEach((element) => {
            price[0].innerHTML = "$199.99";
            price[1].innerHTML = "$249.99";
            price[2].innerHTML = "$399.99";
        })
    } else {
        circle.classList.remove("right");
        circle.classList.add("left");
        price.forEach((element) => {
            price[0].innerHTML = "$19.99";
            price[1].innerHTML = "$24.99";
            price[2].innerHTML = "$39.99";
        })
    }
})

let list = document.querySelectorAll(".list li");