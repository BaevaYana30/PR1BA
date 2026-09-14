const title = document.getElementById("title");

const btn = document.getElementById("btn");

const input = document.getElementById("input");

const text = document.getElementById("text");

const count = document.getElementById("count");

btn.addEventListener("click", function () {

    title.textContent = "Кнопка нажата!";

    title.style.color = "white";

    document.body.style.backgroundColor = "orange";

});

btn.addEventListener("mouseover", function () {

    text.textContent = "Ты навела мышку!";

    text.style.color = "blue";

});

input.addEventListener("input", function () {

    text.textContent = "Ты написала: " + input.value;

    text.style.color = "purple";

    count.textContent = "Количество символов: " + input.value.length;

    if (input.value.length > 10) {

        count.style.color = "red";

    } else {

        count.style.color = "green";

    }

})