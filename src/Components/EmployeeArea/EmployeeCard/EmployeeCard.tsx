import "./EmployeeCard.css";
import type {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {useNavigate} from "react-router-dom";

type EmployeeCardProps={
    employee:EmployeeModel;
}

export function EmployeeCard(props: EmployeeCardProps) {


    const navigate= useNavigate()

    function naviagteToDetails(){
        navigate("/employees/"+props.employee.id)
    }


    return (
        <div className="EmployeeCard" onClick={naviagteToDetails}>

            <div>
                <div>שם:</div>
                <span>{props.employee.firstName} </span>
                <span>{props.employee.lastName}</span>
            </div>
<br/>
            <div>
                <div>תפקיד:</div>
                <span>{props.employee.title}</span>
            </div>

        </div>
    );
}
