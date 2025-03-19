// Mock sensor data
const sensorData = [
    { id: 1, name: "Temperature Sensor", value: "25°C" },
    { id: 2, name: "Humidity Sensor", value: "60%" },
    { id: 3, name: "Light Sensor", value: "300 lux" },
    { id: 4, name: "Motion Sensor", value: "No motion" },
];

// Function to display sensor data
function displaySensorData() {
    const sensorDataContainer = document.getElementById("sensor-data");

    // Clear existing content
    sensorDataContainer.innerHTML = "";

    // Loop through sensor data and create HTML elements
    sensorData.forEach((sensor) => {
        const sensorItem = document.createElement("div");
        sensorItem.className = "sensor-item";
        sensorItem.innerHTML = `
          <strong>${sensor.name}:</strong> ${sensor.value}
        `;
        sensorDataContainer.appendChild(sensorItem);
    });
}

// Update sensor data every 5 seconds (simulate real-time updates)
function updateSensorData() {
    // Simulate new data by modifying the mock data
    sensorData[0].value = `${Math.floor(Math.random() * 30 + 10)}°C`; // Random temperature
    sensorData[1].value = `${Math.floor(Math.random() * 50 + 30)}%`; // Random humidity

    // Re-render the sensor data
    displaySensorData();
}

// Initial display of sensor data
displaySensorData();

// Set interval to update sensor data every 5 seconds
setInterval(updateSensorData, 5000);