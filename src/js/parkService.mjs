// Define the base URL for the National Park Service API.
const baseURL = "https://developer.nps.gov/api/v1/";

// Retrieve the API key from environment variables using Vite's `import.meta.env`.
const apiKey = import.meta.env.VITE_NPS_API_KEY;

// Function to fetch data about a specific park from the NPS API.
async function getJSON(url) {
  // Set up the request options for the fetch call, including the HTTP method and API key in the headers.
  const options = {
    method: "GET", // HTTP method to retrieve data
    headers: {
      "X-Api-Key": apiKey // Provide the API key for authentication
    }
  };

  let data = null; // Variable to hold the park data

  // Fetch data from the NPS API, targeting the 'parks' endpoint with a specific park code.
  const response = await fetch(baseURL + url, options);

  if (response.ok) {
    // If the response is successful, parse the JSON data from the response.
    data = await response.json();
  } else {
    // If the response is not successful, log an error message.
    console.log("Response not OK");
  }

  // Return the park data from the API response.
  return data;
}

export async function getParkData() {
  // Fetch the park data from the NPS API using the park code.
  const parkdata = await getJSON("parks?parkCode=glac");

  // Return the first park data object from the response.
  return parkdata.data[0];
}

export function getInfoLinks(data) {
// Update the image URLs in the parkInfoLinks array with the images from the park data, skipping the first image in the park data as it is already displayed.
const withUpdatedImages = parkInfoLinks.map((item, index) => {
  item.image = data[index + 2].url;
  return item;
});
return withUpdatedImages;
}

export async function getAlerts() {
  // Fetch the alerts data from the NPS API using the park code.
  const alerts = await getJSON("alerts?parkCode=glac");

  // Return the alerts data from the API response.
  return alerts;
}

export async function getVisitorCenterData() {
  // Fetch the visitor center data from the NPS API using the park code.
  const visitorCenters = await getJSON("visitorcenters?parkCode=glac");

  // Return the visitor center data from the API response.
  return visitorCenters;
}