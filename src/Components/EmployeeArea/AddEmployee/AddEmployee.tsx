import "./AddEmployee.css";
import {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {employeeService} from "../../../Services/EmployeeService.ts";


export function AddEmployee() {

    const {register, handleSubmit, formState: { isValid }} = useForm<EmployeeModel>();
    const navigate = useNavigate();

    async function send(employee: EmployeeModel) {
        try {
            employee.image = (employee.image as unknown as FileList)[0];
            await employeeService.addEmployee(employee);
            alert("משתמש הוסף בהצלחה")
            navigate("/employees")
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error("❌ Backend error:", err.message);
            } else {
                console.error("❌ Unknown error occurred:", err);
            }
            throw err;
        }
    }

    return (
        <div className="AddEmployee">
            <form onSubmit={handleSubmit(send)}>
                <label>שם פרטי:</label>
                <input type="text" {...register("firstName", { required: true })} />
                <label>שם משפחה:</label>
                <input type="text" {...register("lastName", { required: true })} />
                <label>תפקיד:</label>
                <input type="text" {...register("title", { required: true })} />
                <label>עיר:</label>
                <input type="text" {...register("city", { required: true })} />
                <label>מדינה:</label>
                <input type="text" {...register("country", { required: true })} />
                <label>תאריך לידה:</label>
                <input type="text" {...register("birthDate",{ required: true })} />
                <label>העלאת תמונה:</label>
                <input type="file" accept="image/*" {...register("image", { required: true })}/>

                <button type="submit" disabled={!isValid}>הוסף עובד</button>
            </form>
        </div>
    );
}
