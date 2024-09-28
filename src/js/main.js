import { getParkData, parkInfoLinks} from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

const parkData = getParkData();

function setParkIntro(data) {
  // Add the park name and description to the intro section
  const parkIntro = document.querySelector('.intro');
  parkIntro.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setMediaCards(data) {
  // Add the media cards to the info section
  const mediaCardContainer = document.querySelector('.info');
  const html = data.map(mediaCardTemplate); // map replaces the for loop
  mediaCardContainer.innerHTML = html.join(''); // join replaces the += and '' replaces the "," that would be added between each card
}

// Call the functions to set the header, footer, park intro, and media cards
setHeaderFooter(parkData);
setParkIntro(parkData);
setMediaCards(parkInfoLinks);