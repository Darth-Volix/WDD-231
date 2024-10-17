import {setHeaderFooter} from "./setHeaderFooter.mjs";
import {getParkData} from "./parkService.mjs";
import {getAlerts} from "./parkService.mjs";
import {getVisitorCenterData} from "./parkService.mjs";
import {alertTemplate} from "./templates.mjs";
import {visitorCenterTemplate} from "./templates.mjs";

async function init() {
  const parkData = await getParkData();
  const alerts = await getAlerts();
  const visitorCenters = await getVisitorCenterData();
  console.log(visitorCenters);
  
  setHeaderFooter(parkData);
  setAlerts(alerts.data);
  setVisitorCenters(visitorCenters.data);
}

function setAlerts(data) {
  // Add any alerts to the alerts section
  const alertsContainer = document.querySelector('.alerts ul');
  const html = data.map(alertTemplate); // map replaces the for loop
  alertsContainer.insertAdjacentHTML('beforeend', html.join(''));
}

function setVisitorCenters(data) {
  // Add the visitor centers to the visitor centers section
  const visitorCentersContainer = document.querySelector('.visitor ul');
  const html = data.map(visitorCenterTemplate); // map replaces the for loop
  visitorCentersContainer.insertAdjacentHTML('beforeend', html.join(''));
}

init();

// come back and fix visitor center issue