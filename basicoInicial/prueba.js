import { Account } from "./account.js";
import {UberX} from "./UberX.js";


let chofer = new Account("2545","Pedro Castillo","002959161","Zyzz@hotmail.com","123456")
let optra = new UberX("1234","A1c",chofer,4,"Chevorelette", "Optra");
optra.printDataCar();


