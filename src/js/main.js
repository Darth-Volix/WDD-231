import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// Add the park name and link to the disclaimer
let disclaimer = document.querySelector(".disclaimer a");

disclaimer.innerHTML = parkData.fullName;
disclaimer.href = parkData.url;