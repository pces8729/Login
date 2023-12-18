let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3")
let body = document.getElementById("gradient");

function setGradientFromInput() {
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color3.value
    + ")";

  css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradientFromInput);
color2.addEventListener("input", setGradientFromInput);
color3.addEventListener("input", setGradientFromInput);

// document.addEventListener("DOMContentLoaded", function() {

//   const colorInput3 = document.getElementById("colorInput3");
//   const backgroundDiv = document.body;

//   setGradient();

//   colorInput3.addEventListener("input", setGradientFromInput);

//   function setGradient() {
//     const color3 = colorInput3.value;
//     const rgb1 = hexToRgb(color1.value);
//     const rgb2 = hexToRgb(color2.value);
//     const rgb3 = hexToRgb(color3);

//  // Set background color
//   backgroundDiv.style.backgroundColor = `rgb(${rgb1.r}, ${rgb2.g}, ${rgb3.b})`;

//   css.textContent = backgroundDiv.style.background + ";";
//   }

//   function setGradientFromInput() {
//     setGradient();
//   }
// });

// // Function to convert hex color to RGB object
// function hexToRgb(hex) {
//   // Remove the hash if it exists
//   hex = hex.replace(/^#/, '');

//   // Parse the hex value into separate RGB values
//   const bigint = parseInt(hex, 16);
//   const r = (bigint >> 16) & 255;
//   const g = (bigint >> 8) & 255;
//   const b = bigint & 255;
//   // Return an object with the RGB values
//   return { r, g, b };

// };
