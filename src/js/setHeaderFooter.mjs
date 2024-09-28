import { parkInfoTemplate, parkFooterTemplate } from './templates.mjs';

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

function setFooter(data) {
    const footer = document.querySelector('#park-footer');
    footer.innerHTML = parkFooterTemplate(data);
}

export function setHeaderFooter(data) {
    setHeaderInfo(data);
    setFooter(data);
}