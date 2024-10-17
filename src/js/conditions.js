import {setHeaderFooter} from "./setHeaderFooter.mjs";
import {getParkData} from "./parkService.mjs";
import {getAlerts} from "./parkService.mjs";
import {alertTemplate} from "./templates.mjs";

async function init() {
  const parkData = await getParkData();
  const alerts = await getAlerts();
  console.log(alerts);
  
  setHeaderFooter(parkData);
  setAlerts(alerts.data);
}

function setAlerts(data) {
  // Add any alerts to the alerts section
  const alertsContainer = document.querySelector('.alerts > ul');
  const html = data.map(alertTemplate); // map replaces the for loop
  alertsContainer.innerHTML = html.join(''); // join replaces the += and '' replaces the "," that would be added between each card
}

init();

// Come back and make the alerts template!!!