// Żeby package się zamykało jak kliknę poza pole
const btn = document.querySelector(".page-burger");
const nav = document.querySelector(".menu");
const formInput = document.querySelectorAll(".calculator_form-row");
const dataInfo = document.querySelector(".calculator_data-info ul");
const total = document.querySelector(".total_bold-span");
const check = document.querySelectorAll(".bold-span");
const selectInput = document.querySelector(".select-input");
const selectDropdown = document.querySelector(".select-dropdown");
const checkboxes = document.querySelectorAll(".calculator_form-checkbox");
const dropdownSelection = selectDropdown.querySelectorAll("li");
const formAll = document.querySelectorAll(".calculator_form-rows");
btn.onclick = function() {
    btn.classList.toggle("is-clicked");
    nav.classList.toggle("is-show");
};
for(let i = 0; i < formInput.length; i++){
    formInput[i].addEventListener("change", handleChange);
    formInput[i].addEventListener("change", handleOpen);
    formInput[i].addEventListener("change", colorChange);
    function handleChange(event) {
        if (formInput[i].children[0].value % 1 === 0 && formInput[i].children[0].value > 0) {
            dataInfo.children[i].children[1].innerText = formInput[i].children[0].value + " * " + "$7";
            dataInfo.children[i].children[2].innerText = "$" + formInput[i].children[0].value * 7;
        }
    }
    function handleOpen(event) {
        if (formInput[i].children[0].value % 1 === 0 && formInput[i].children[0].value > 0) dataInfo.children[i].classList.add("open");
    }
    function colorChange(event) {
        formAll[i].children[0].style.color = "black";
    }
}
selectInput.addEventListener("mouseover", handleShow);
selectInput.addEventListener("click", handleShow);
function handleShow(event) {
    selectDropdown.classList.toggle("open");
    selectDropdown.parentElement.classList.toggle("open");
}
for(let i1 = 0; i1 < selectDropdown.children.length; i1++){
    selectDropdown.children[i1].addEventListener("click", changeColorLi);
    function changeColorLi(event) {
        selectInput.style.color = "black";
    }
}
for(let i2 = 0; i2 < checkboxes.length; i2++){
    const checkbox = checkboxes[i2].querySelector(".checkbox_input");
    checkbox.addEventListener("change", handleCheckbox);
    function handleCheckbox(event) {
        if (this.checked) dataInfo.children[i2 + 3].classList.add("open");
        else dataInfo.children[i2 + 3].classList.remove("open");
        for(let i = 0; i < check.length; i++)check[i].innerText = check[i].innerText.replace("$", "");
    }
}
dropdownSelection.forEach(function(el) {
    el.addEventListener("click", handleClick);
    function handleClick(event) {
        dataInfo.children[2].children[1].innerText = el.innerText;
        dataInfo.children[2].children[2].innerText = el.dataset.value;
        dataInfo.children[2].classList.add("open");
        selectDropdown.classList.remove("open");
        selectDropdown.parentElement.classList.remove("open");
        selectInput.innerText = el.innerText;
    }
});
for(let i3 = 0; i3 < formAll.length; i3++){
    formAll[i3].addEventListener("change", handleCheck);
    formAll[2].addEventListener("click", handleCheck);
    function handleCheck(event) {
        const array = [];
        for(let i = 0; i < check.length; i++)if (dataInfo.children[i].classList.contains("open") === true) {
            check[i].innerText = check[i].innerText.replace("$", "");
            array.push(Number(check[i].innerText));
            const arraySum = array.reduce(function(total, item) {
                return total + item;
            });
            total.innerText = "$" + arraySum;
        }
    }
}

//# sourceMappingURL=index.cea00a9b.js.map
