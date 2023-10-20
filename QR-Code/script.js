let button = document.querySelector(".button");
let qr_code = document.querySelector(".qr-code");

button.addEventListener("click", () =>{
    let input = document.querySelector("#input_text");
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

function generate(user_input){
    qr_code.style = "";

    let qr_code = new QRCpde(qr_code, {
        text: '${input.value}',
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.correctLevel.H
    });

    let download = document.createElement("button");
    qr_code.appendChild(download);

    let link = document.createElement("a");
    link.setAttribute("download", "qr_code.png");
    link.innerHTML = `Download`;

    download.appendChild(link);

    let qr_img = document.querySelector(".qr-code img");
    let qr_canvas = document.querySelector("canvas");

    if (qr_img.getAttribute("src") === null){
        setTimeout(() => {
            link.setAttribute("href", `${qr_canvas.toDataURL()}`);
        }, 300);
    }
    else {
        setTimeout(() => {
            link.setAttribute("href", `${qr_img.getAttribute("src")}`);
        }, 300);
    }
}

generate({
    value: "https://codepen.io/coding_dev"
});