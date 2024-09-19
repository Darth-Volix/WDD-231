import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// This code will use this template to display the park info
function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
  }

// Add the park name to the title of the webpage
let title = document.querySelector("title");

title.innerHTML = parkData.fullName;

// Add the park name and link to the disclaimer
let disclaimer = document.querySelector(".disclaimer a");

disclaimer.innerHTML = parkData.fullName;
disclaimer.href = parkData.url;

// Add the hero banner image
let heroBannerImage = document.querySelector('.hero-banner img');

heroBannerImage.src = parkData.images[0].url;
heroBannerImage.alt = parkData.images[0].altText;

// COME BACK TO THIS LATER