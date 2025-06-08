import "./AddEmployee.css";
import {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {employeeService} from "../../../Services/EmployeeService.ts";


export function AddEmployee() {

    const {register, handleSubmit} = useForm<EmployeeModel>();
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
                <input type="text" {...register("firstName")} />
                <label>שם משפחה:</label>
                <input type="text" {...register("lastName")} />
                <label>תפקיד:</label>
                <input type="text" {...register("title")} />
                <label>עיר:</label>
                <input type="text" {...register("city")} />
                <label>מדינה:</label>
                <input type="text" {...register("country")} />
                <label>תאריך לידה:</label>
                <input type="text" {...register("birthDate")} />
                <label>העלאת תמונה:</label>
                <input type="file" accept="image/*" {...register("image")}/>

                <button>הוסף עובד</button>
            </form>
        </div>
    );
}
