import {setHeaderFooter} from "./setHeaderFooter.mjs";
import {getParkData} from "./parkService.mjs";
import {getAlerts} from "./parkService.mjs";
import {alertsTemplate} from "./templates.mjs";

async function init() {
  const parkData = await getParkData();
  const alerts = await getAlerts();
  
  setHeaderFooter(parkData);
  setAlerts(alerts);
}

function setAlerts(data) {
  // Add any alerts to the alerts section
  const alertsContainer = document.querySelector('.alerts');
  const html = data.map(alertsTemplate); // map replaces the for loop
  mediaCardContainer.innerHTML = html.join(''); // join replaces the += and '' replaces the "," that would be added between each card
}

init();

// Come back and make the alerts template!!!