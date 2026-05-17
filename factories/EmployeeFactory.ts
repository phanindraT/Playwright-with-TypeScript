import { Employee } from "../types/Employee";
import {randomNumberGenerator } from "../utils/RandomUtils"

export class EmployeeFactory{

    static create(): Employee{

        const randomId = randomNumberGenerator();
        return { 
            firstname : "Google AI",
            lastname : "Google AI Inc",
            employeeId : randomId
            
         }
    }
}