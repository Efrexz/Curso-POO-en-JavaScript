import {Car} from "./car.js";


export class UberX extends Car {
    constructor(id,license,driver,passengers, brand, model){
        super(id,license,driver,passengers)
        this.brand = brand;
        this.model = model;
    }

    printDataCar(){
        console.table(this.driver);
        console.log(this.driver.name);
        console.log(this.driver.document);
        console.log(this.brand,this.model);
    };
}

export default UberX;