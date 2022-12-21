import { DataForm } from "./ui/DataForm.js";
import { TemperaturesList } from "./ui/TemperaturesList.js";
import { WeatherDataProcessor } from "./data/WeatherDataProcessor.js";


const params = {
    idForm: "form-request", 
    idCity: "city",
    idDateFrom: "date_from",
    idDateTo: "date_to", 
    idHourFrom: "hour_from", 
    idHourTo: "hour_to", 
    idErrorMessage: 'error_msg'
};
const weatherProcessor = new WeatherDataProcessor();
const dataForm = new DataForm(params);
const temperatureList = new TemperaturesList("weather-list");

dataForm.addHandler((dataFromForm) => {
    weatherProcessor.getData(dataFromForm, (data) => {
        temperatureList.showTemperatures(data);
    });
});
