let button = document.querySelector(".button");
let qr_code = document.querySelector(".qr");

button.addEventListener("click", () =>{
    let input = document.querySelector("#input");
    if (input.value != "") {
        if (qr_code.childElementCount == 0) {
            generate(input);
        }
        else {
            qr_code.innerHTML = "";
            generate(input);
        }
    }
    else {
        qr_code.style = "display: none";
    }
});

function generate(input){
    qr_code.style = "";

    let qr_code = new QRCpde(qr_code, {
        text: '$'
    })
}