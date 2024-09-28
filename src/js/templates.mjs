export function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
  }

export function mediaCardTemplate(info) {
  return `
  <div class="media-card">
    <a href="${info.link}">
      <img src="${info.image}" alt="${info.name}">
      <h3>${info.name}</h3>
    </a>
    <p>${info.description}</p>
  </div>`
}

export function parkFooterTemplate(info) {
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