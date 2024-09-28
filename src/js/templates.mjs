export function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

export function parkFooterTemplate(info) {
    // add the park phone number to the footer
    const voice = getVoicePhone(info.contacts.phoneNumbers);
    return `
    <h3>Contact Info</h3>
    <h4>Phone:</h4>
    <p>${voice}</p>
    `
}

function getVoicePhone(numbers) {
    // find the phone number with the type "Voice" (think of this like a "where" clause in SQL)
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
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