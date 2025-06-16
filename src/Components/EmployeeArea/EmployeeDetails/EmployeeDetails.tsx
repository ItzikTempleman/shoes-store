import "./EmployeeDetails.css";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {employeeService} from "../../../Services/EmployeeService.ts";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {notify} from "../../../Utils/Notify.ts";

export function EmployeeDetails() {
    useTitle("Employee info")

    const params = useParams();
    const id = +params.id!;
    const navigate = useNavigate()
    const [employee, setEmployee] = useState<EmployeeModel>()

    useEffect(() => {
        employeeService.getOneEmployee(id)
            .then(dbEmployee =>
                setEmployee(dbEmployee)
            ).catch(err => console.log(err.message))
    }, [id]);


    async function deleteMe() {
        try {
            const areYouSure = confirm("Are you sure you want to delete?")
            if (!areYouSure) return
            await employeeService.deleteEmployee(id)
            notify.success("Employee has been deleted")
            navigate("/employees")
        } catch (err: unknown) {
            notify.error(err)
        }
    }

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


            <NavLink to="/employee"> Back</NavLink>

            <span> | </span>
            <NavLink to={"/employee/edit/" + employee?.id}> Edit</NavLink>
            <span> | </span>
            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>
        </div>
    );
}
