import { getParkData, parkInfoLinks} from "./parkService.mjs";

const parkData = getParkData();

// This code will use this template to display the park info
function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
  }

// This code will use this template to display the media cards
function mediaCardTemplate(info) {
  return `
  <div class="media-card">
    <a href="${info.link}">
      <img src="${info.image}" alt="${info.name}">
      <h3>${info.name}</h3>
    </a>
    <p>${info.description}</p>
  </div>`
}

function parkFooterTemplate(info) {
  const voice = getVoicePhone(info.contacts.phoneNumbers);
  
  return `
  <h3>Contact Info</h3>
  <h4>Phone:</h4>
  <p>${voice}</p>
`
}

function getVoicePhone(numbers) {
  const voice = numbers.find((number) => number.type === "Voice");
  return voice.phoneNumber;
}

function setHeaderInfo(data) {
  // Add the park name to the title of the webpage
  let title = document.querySelector("title");

  title.innerHTML = data.fullName;

  // Add the park name and link to the disclaimer
  let disclaimer = document.querySelector(".disclaimer a");

  disclaimer.innerHTML = data.fullName;
  disclaimer.href = data.url;

  // Add the hero banner image
  let heroBannerImage = document.querySelector('.hero-banner img');

  heroBannerImage.src = data.images[0].url;
  heroBannerImage.alt = data.images[0].altText;

  // Add the hero banner content
  let heroContent = document.querySelector('.hero-banner__content');

  heroContent.innerHTML = parkInfoTemplate(data);
}

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

function setFooter(data) {
  const footer = document.querySelector('#park-footer');
  footer.innerHTML = parkFooterTemplate(data);
}

setHeaderInfo(parkData);
setParkIntro(parkData);
setMediaCards(parkInfoLinks);
setFooter(parkData);