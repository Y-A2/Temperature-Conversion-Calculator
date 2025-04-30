document.getElementById("button").addEventListener("click", onClick);
document.getElementById("button1").addEventListener("click", onClick2);
function onClick() {
    let number = document.getElementById("input").value;
    let celsuis = (number - 32) * 5 / 9;
    let answer = celsuis.toFixed();
    document.getElementById("link").href = "https://www.google.com/";
    document.getElementById("button1").classList.remove("blue");
    document.getElementById("button").classList.add("colour");
    document.getElementById("input").value = "";
    document.getElementById("input1").value = "";
    document.getElementById("span").innerHTML = `${answer}°C`;
    document.getElementById("span1").innerHTML = "----"
    document.getElementById("img").src = "img/a.png";
    document.getElementById("img1").src = "";
    document.getElementById("img").classList.add("img");
    document.getElementById("img1").classList.remove("img");
}

function onClick2() {
    let number1 = document.getElementById("input1").value;
    let fahrenheit = (number1 * 9/5) + 32;
    let answer = fahrenheit.toFixed();
    document.getElementById("link").href = "https://www.google.com/"
    document.getElementById("button").classList.remove("colour");
    document.getElementById("button1").classList.add("blue");
    document.getElementById("input").value = "";
    document.getElementById("input1").value = "";
    document.getElementById("span1").innerHTML = `${answer}°F`;
    document.getElementById("span").innerHTML = "----";
    document.getElementById("img1").classList.add("img");
    document.getElementById("img").classList.remove("img");
    document.getElementById("img1").src = "img/a.png";
    document.getElementById("img").src = "";
}
