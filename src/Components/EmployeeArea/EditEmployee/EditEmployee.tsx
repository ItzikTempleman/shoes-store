import "./EditEmployee.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {useEffect, useState} from "react";
import type {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {employeeService} from "../../../Services/EmployeeService.ts";
import {notify} from "../../../Utils/Notify.ts";
import {Button, TextField} from "@mui/material";


export function EditEmployee() {
    useTitle("Edit employee");
    const [image, setImage] = useState("");
    const {register, handleSubmit, setValue} = useForm<EmployeeModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.id!;

    useEffect(() => {
        employeeService.getOneEmployee(id)
            .then(it => {
                    setValue("firstName", it.firstName)
                    setValue("lastName", it.lastName)
                    setValue("title", it.title)
                    setValue("city", it.city)
                    setValue("country", it.country)
                    setValue("birthDate", it.birthDate)
                    setImage(it.imageUrl!)
                }
            ).catch(err => notify.error(err));
    }, []);


    async function send(employee: EmployeeModel) {
        try {
            employee.image = (employee.image as unknown as FileList)[0];
            employee.id = id;
            await employeeService.updateEmployee(employee);
            notify.success("Employee updated successfully");
            navigate("/employees/" + employee.id)
        } catch (err: unknown) {
            notify.error(err);
        }
    }


    return (
        <div className="EditEmployee">
            <form onSubmit={handleSubmit(send)}>

                <TextField
                    label="שם פרטי"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="שם פרטי"
                    {
                        ...register("firstName")
                    }/>

                <TextField
                    label="שם משפחה"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="שם משפחה"
                    {
                        ...register("lastName")
                    }/>

                <TextField
                    label="תפקיד"
                    fullWidth
                    inputProps={{minLength: 5, maxLength: 20}}
                    required
                    placeholder="תפקיד"
                    {
                        ...register("title")
                    }/>

                <TextField
                    label="עיר"
                    inputProps={{minLength: 3, maxLength: 30}}
                    required
                    fullWidth
                    placeholder="עיר"
                    {
                        ...register("city")
                    }/>

                <TextField
                    label="מדינה"
                    fullWidth
                    inputProps={{minLength: 3, maxLength: 30}}
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

                <img src={image}/>


                <TextField
                    variant="standard"
                    InputProps={{disableUnderline: true}}
                    type="file"
                    fullWidth
                    inputProps={
                        {accept: "image/*"}
                    }  {

                        ...register("image")
                    }
                    onChange={(it) => {
                        const target = it.target as HTMLInputElement;
                        const file = target.files?.[0];
                        if (file) {
                            setImage(URL.createObjectURL(file));
                        }
                    }
                    }/>

                <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    variant="contained"
                >עדכן עובד</Button>
            </form>
        </div>
    );
}
