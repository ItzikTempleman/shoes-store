import "./AddEmployee.css";
import {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {employeeService} from "../../../Services/EmployeeService.ts";
import {notify} from "../../../Utils/Notify.ts";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {Button, TextField} from "@mui/material";


export function AddEmployee() {
    useTitle("Add Employee")
    const {register, handleSubmit} = useForm<EmployeeModel>();
    const navigate = useNavigate();

    async function send(employee: EmployeeModel) {
        try {
            employee.image = (employee.image as unknown as FileList)[0];
            await employeeService.addEmployee(employee);
            notify.success("משתמש הוסף בהצלחה");
            navigate("/employees")
        } catch (err: unknown) {
            notify.error(err);
        }
    }

    return (
        <div className="AddEmployee">
            <form onSubmit={handleSubmit(send)}>

                <TextField
                    label="שם פרטי"
                    fullWidth
                    inputProps={{ minLength: 2, maxLength: 30 }}
                    required
                    placeholder="שם פרטי"
                    {
                        ...register("firstName")
                    }/>

                <TextField
                    label="שם משפחה"
                    fullWidth
                    inputProps={{ minLength: 2, maxLength: 30 }}
                    required
                    placeholder="שם משפחה"
                    {
                        ...register("lastName")
                    }/>

                <TextField
                    label="תפקיד"
                    fullWidth
                    inputProps={{ minLength: 5, maxLength: 20 }}
                    required
                    placeholder="תפקיד"
                    {
                        ...register("title")
                    }/>

                <TextField
                    label="עיר"
                    inputProps={{ minLength: 3, maxLength: 30}}
                    required
                    fullWidth
                    placeholder="עיר"
                    {
                        ...register("city")
                    }/>

                <TextField
                    label="מדינה"
                    fullWidth
                    inputProps={{ minLength: 3, maxLength: 30}}
                    required
                    placeholder="מדינה"
                    {
                        ...register("country")
                    }/>

                <TextField
                    label="תאריך לידה"
                    fullWidth
                    placeholder="תאריך לידה"
                    {
                        ...register("birthDate")
                    }/>

                <TextField
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    type="file"
                    fullWidth
                    inputProps={
                        {accept: "image/*"}
                    }  {
                        ...register("image")
                    }/>

                <Button
                    color="primary"
                    fullWidth
                    variant="contained"
                >הוסף עובד</Button>
            </form>
        </div>
    );
}
