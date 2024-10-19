export function parkInfoTemplate(info) {
  // add the park name, designation, and states to the hero
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
  // add the image, name, and description to the media card
  return `
  <div class="media-card">
    <a href="${info.link}">
      <img src="${info.image}" alt="${info.name}">
      <h3>${info.name}</h3>
    </a>
    <p>${info.description}</p>
  </div>`
}

export function alertTemplate(alert) {
  let alertType = "";
  // most of the alerts are one word and line up with the icons nicely. "Park Closure" is the exception
  
  if (alert.category === "Park Closure") {
    alertType = "closure";
  } else {
    alertType = alert.category.toLowerCase();
  }
  
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/sprite.symbol.svg#alert-${alertType}"></use></svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}

export function visitorCenterTemplate(center) {
  // add the visitor center name, description, and directions to the visitor center section.
  return `
  <li class="visitor-center">
    <div>
    <h3>${center.name}</h3>
    <p>${center.description}</p>
    <p>${center.directionsInfo}</p>
    </div>
  </li>`;
}

export function activityTemplate(activity) {
  // add the activity name to the activity section
  return `
  <li class="activity">
    <p>${activity.name}</p>
  </li>`;
}