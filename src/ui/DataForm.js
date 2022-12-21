export class DataForm {
    #formElement;
    #cityElement;
    #dateFromElement;
    #dateToElement;
    #hourFromElement;
    #hourToElement;
    #errorMessageElement;

    constructor (params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#cityElement = document.getElementById(params.idCity);
        this.#dateFromElement = document.getElementById(params.idDateFrom);
        this.#dateToElement = document.getElementById(params.idDateTo);
        this.#hourFromElement = document.getElementById(params.idHourFrom);
        this.#hourToElement = document.getElementById(params.idHourTo);
        this.#errorMessageElement = document.getElementById(params.idErrorMessage);
        this.addOnChangeDateFrom();
        this.addOnChangeDateTo();
        this.addOnChangeHourFrom();
        this.addOnChangeHourTo();
    }

    addHandler(processFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const request = {}; 
            request.city = this.#cityElement.value;
            request.dateFrom = this.#dateFromElement.value;
            request.dateTo = this.#dateToElement.value;
            request.hourFrom = this.#hourFromElement.value;
            request.hourTo = this.#hourToElement.value;

            processFun(request);
        });
    }

    addOnChangeDateFrom() {
        this.#dateFromElement.addEventListener('change', (event) => {
            const value = event.target.value;
            const dateTo = this.#dateToElement.value;
            if(dateTo && value > dateTo) {
                showErrorMessage(event.target, "Date From Error", this.#errorMessageElement);
            }
        });
    }
    addOnChangeDateTo() {
        this.#dateToElement.addEventListener('change', (event) => {
            const value = event.target.value;
            const dateFrom = this.#dateFromElement.value;
            if(dateFrom && value < dateFrom) {
                showErrorMessage(event.target, "Date To Error", this.#errorMessageElement);
            }
        });
    }
    addOnChangeHourFrom() {
        this.#hourFromElement.addEventListener('change', (event) => {
            const value = +event.target.value;
            const hourTo = +this.#hourToElement.value;
            if(hourTo && value > hourTo) {
                showErrorMessage(event.target, "Hour From Error", this.#errorMessageElement);
            }
        })
    }
    addOnChangeHourTo() {
        this.#hourToElement.addEventListener('change', (event) => {
            const value = +event.target.value;
            const hourFrom = +this.#hourFromElement.value;
            if(hourFrom && value < hourFrom) {
                showErrorMessage(event.target, "Hour To Error", this.#errorMessageElement);
            }
        })
    }
}