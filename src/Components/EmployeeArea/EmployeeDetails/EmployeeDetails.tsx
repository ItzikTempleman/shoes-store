import "./EmployeeDetails.css";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {employeeService} from "../../../Services/EmployeeService.ts";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function EmployeeDetails() {
    useTitle("Employee info")
    const navigate=useNavigate()
    function returnToEmployees(){
        navigate("/employees")
    }

    const params=useParams();
    const id=+params.id!;
    const [employee, setEmployee]=useState<EmployeeModel>()

    useEffect(() => {
        employeeService.getOneEmployee(id)
            .then(dbEmployee=>
                setEmployee(dbEmployee)
            ).catch(err => console.log(err.message))
    }, [id]);

    return (
        <div className="EmployeeDetails">
            <div>
                <div>שם:</div>
                <span>{employee?.firstName} </span>
                <span>{employee?.lastName}</span>
            </div>

            <div>
                <div>תפקיד:</div>
                <span>{employee?.title}</span>
            </div>

            <div>
                <div>כתובת:</div>
                <span>{employee?.city}, {employee?.country} </span>
            </div>

            <div>
                <div>תאריך לידה:</div>
                <span>{employee?.birthDate}</span>
            </div>

            <div>
                <img src={employee?.imageUrl} alt={employee?.imageUrl}/>
            </div>


            <button onClick={returnToEmployees}>חזרה</button>
        </div>
    );
}
