// Selectors
const pageWrapper = document.querySelector(".page-header");

// Create secondary navigation bar
const htmlElement = document.createElement("div");
htmlElement.classList.add("secondary-navigation");
htmlElement.innerHTML = `
    <div class = "navi__item">
    <img src="./images/spinner11 (1).svg" alt="time reload">
    <span> 30 Tage Gratis Rückversand </span>
    </div>

    <div class = "navi__item">
    <img src="./images/Icon awesome-heart (1).svg" alt="time reload">
    <span> Nachhaltige Produkte </span>
    </div>

    <div class = "navi__item image">
    <img src="./images/Trusted_Shops-Trustmark.png" alt="time reload">
    <span> 4.87/5 </span>
    </div>
  
   `;

// append the new element the body and header block
document.body.appendChild(htmlElement);
pageWrapper.appendChild(htmlElement);
console.log(pageWrapper);
