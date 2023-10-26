let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch{
                input.value = "error";
                string = "";
            }
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        }
        else if (e.target.innerHTML == "%") {
            string = string + "*1/100";
            input.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})