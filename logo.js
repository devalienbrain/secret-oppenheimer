const logoContainer = document.getElementById("logo-container");

const createdJsImg = document.createElement('img');

createdJsImg.src = "oppenheimer1.png";

logoContainer.appendChild(createdJsImg);

const imgInContainer = document.querySelector('#logo-container img');

imgInContainer.setAttribute('class', 'style-img');