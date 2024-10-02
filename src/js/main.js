import { getParkData, getInfoLinks} from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

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

// function to intialize the page
async function init() {
  // Get the park data
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);

  // Set header, footer, park intro, and media cards
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setMediaCards(links);
}

// Call the init function to initialize the page
init();