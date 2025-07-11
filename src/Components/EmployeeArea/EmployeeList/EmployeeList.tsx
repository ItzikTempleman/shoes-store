import "./EmployeeList.css";
import {useEffect, useState} from "react";
import type {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {employeeService} from "../../../Services/EmployeeService.ts";
import {EmployeeCard} from "../EmployeeCard/EmployeeCard.tsx";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function EmployeeList() {
    useTitle("Employees")
    const [employee, setEmployee]= useState<EmployeeModel[]>([])
    useEffect(() => {
        employeeService.getAllEmployees()
            .then(dbEmployee=>
                setEmployee(dbEmployee)
            ).catch(err =>console.log(err))
    }, []);
    return (
        <div className="EmployeeList">
            {employee.map(e => <EmployeeCard key={e.id} employee={e}/>)}
        </div>
    );
}
