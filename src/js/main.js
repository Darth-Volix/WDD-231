import { getParkData, parkInfoLinks} from "./parkService.mjs";

import { setHeaderFooter } from "./setHeaderFooter.mjs";

const parkData = getParkData();

function setParkIntro(data) {
  const parkIntro = document.querySelector('.intro');
  parkIntro.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setMediaCards(data) {
  const mediaCardContainer = document.querySelector('.info');
  const html = data.map(mediaCardTemplate);
  mediaCardContainer.innerHTML = html.join('');
}

setHeaderFooter(parkData);
setParkIntro(parkData);
setMediaCards(parkInfoLinks);