import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, getAlerts, getVisitorCenterData } from "./parkService.mjs";
import { alertTemplate, visitorCenterTemplate, activityTemplate } from "./templates.mjs";

async function init() {
  const parkData = await getParkData();
  const alerts = await getAlerts();
  const visitorCenters = await getVisitorCenterData();
  const activities = parkData.activities;
  
  setHeaderFooter(parkData);
  setAlerts(alerts.data);
  setVisitorCenters(visitorCenters.data);
  setParkActivities(activities);
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

function setParkActivities(data) {
  // Add the park activities to the activities section
  const activitiesContainer = document.querySelector('.activities ul');
  const html = data.map(activityTemplate); // map replaces the for loop
  activitiesContainer.insertAdjacentHTML('beforeend', html.join(''));
}

init();