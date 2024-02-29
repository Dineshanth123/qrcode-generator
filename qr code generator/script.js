let imag = document.querySelector("img");
let input = document.querySelector("input");
let button = document.querySelector("button");
let api1 = "https://api.qrserver.com/v1/";
let api2 = "create-qr-code/?size=150x150&data=";

button.addEventListener("click", () => {
  //arrow function
  imag.src = `${api1}${api2}${input.value}`;
});
