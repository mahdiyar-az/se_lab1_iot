/**
 * @jest-environment jsdom
 */

const { sensorData, updateSensorData, displaySensorData } = require('./script');

describe('updateSensorData', () => {
    beforeEach(() => {
        // Reset sensorData to its initial state before each test
        sensorData[0].value = "25°C";
        sensorData[1].value = "60%";
        sensorData[2].value = "300 lux";
        sensorData[3].value = "No motion";

        // Mock the DOM
        document.body.innerHTML = `
      <div id="sensor-data"></div>
    `;

        // Mock the displaySensorData function to track calls
        jest.spyOn({ displaySensorData }, 'displaySensorData').mockImplementation(() => {});
    });

    test('updates temperature and humidity values correctly', () => {
        // Call the function
        updateSensorData();

        // Check if the temperature value is updated correctly
        const temperature = parseInt(sensorData[0].value);
        expect(temperature).toBeGreaterThanOrEqual(10); // Minimum value is 10
        expect(temperature).toBeLessThanOrEqual(40); // Maximum value is 40 (10 + 30)

        // Check if the humidity value is updated correctly
        const humidity = parseInt(sensorData[1].value);
        expect(humidity).toBeGreaterThanOrEqual(30); // Minimum value is 30
        expect(humidity).toBeLessThanOrEqual(80); // Maximum value is 80 (30 + 50)
    });


});