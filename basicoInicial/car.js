export class Car {
    constructor(id,license,driver,passengers){
        this.id = id;
        this.license = license;
        this.driver = driver;
        this._passengers = passengers;
    };

    get passenger() {
        return this._passengers
    };

    set passenger(passengers) {
        if (passengers != 4) {
            console.log("Debes tener 4 pasajeros")
        } else {
            this._passengers = passengers
        }
    }

        printDataCar(){
            console.table(this.driver);
            console.log(this.driver.name);
            console.log(this.driver.document);
        };
}




export default Car;