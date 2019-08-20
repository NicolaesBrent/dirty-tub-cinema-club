// hier komt je code
// console.log("Hallo wereld!");
const dButton =  document.getElementById('button')

/* Setting the Button Toggle ------------------------------*/

dButton.addEventListener("click", darkMode);

function darkMode() {
  let dB = document.getElementById('dark-body');
  dB.classList.toggle('dark-site');
  
  let dH1 = document.getElementById('dark-h1');
  dH1.classList.toggle("dark-h1");
  
 let dBu = document.getElementById('button');
 dBu.classList.toggle('dark-button')
  
  let dH2 = document.getElementById('dark-h2');
  dH2.classList.toggle("dark-h2");
  
  let dP = document.getElementById('dark-p');
  dP.classList.toggle("dark-p");
  
  let dSection = document.getElementById('dark-section');
  dSection.classList.toggle("dark-section");
  
  let dFooter = document.getElementById('dark-footer');
  dFooter.classList.toggle("dark-footer");
  
  let dLabel = document.getElementById('dark-label');
  dLabel.classList.toggle("dark-h1");
  
  let dA = document.getElementById('dark-a');
  dA.classList.toggle("dark-a");
}