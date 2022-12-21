export class TemperaturesList {
    #weatherListElement;

    constructor(weatherListId) {
        this.#weatherListElement = document.getElementById(weatherListId);
    }
    showTemperatures(dataArray) {
        this.#weatherListElement.innerHTML = getRecordList(dataArray);
    }
}

function getRecordList(dataArray) {
    return dataArray.map(data => {
        return ` <div class="details-list">
            <p>Date: ${data.date} Time: ${data.hour} Temperature: ${data.temperature}</p>
        </div>`;
    });
}