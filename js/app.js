const elFormProduct = document.querySelector(".js-form-product");
const elFormProductName = document.querySelector(".js-product-name");
const elFormProductPrice = document.querySelector(".js-product-price");
const elFormResult = document.querySelector(".js-form-result");

let ombor = [];

elFormProduct.addEventListener("submit", function (evt) {
    evt.preventDefault();

    ombor.push([elFormProductName.value, elFormProductPrice.value]);

    elFormProductName.value = null;
    elFormProductPrice.value = null;

    addProduct();

});

function addProduct() {

    let result = "";
    for (let i = 0; i < ombor.length; i++) {
        result +=
            "<li class='list-group-item list-item-action d-flex justify-content-between align-items-center'>" +
            "<div>" +
            "<p class='text-primary h4'>Mahsulot nomi: " + ombor[i][0] + "</p>" +
            "<p class='text-warning h4'>Mahsulot narxi: " + ombor[i][1] + " so'm</p>" +
            "</div>" +
            "<div>" +
            "<button class='btn btn-danger me-3' type='button' onclick='deletePage(" + i + ")'>Delete</button>" +
            "<button class='btn btn-success' type='button' onclick='EditPage(" + i + ")'>Edit</button>" +
            "</div>" +
            "</li>"
    }

    elFormResult.innerHTML = result;

}

function deletePage(index) {
    ombor.splice(index, 1);
    addProduct();

}

function EditPage(index) {
    ombor[index][0] = prompt("Mahsulot nomini kiriting: ")
    ombor[index][1] = prompt("Mahsulot narxi kiriting: ")
    addProduct();
}

    