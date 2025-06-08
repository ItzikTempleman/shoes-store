import type {EmployeeModel} from "../Models/EmployeeModel.ts";
import axios, {type AxiosRequestConfig} from "axios";
import {appConfig} from "../Utils/AppConfig.ts";

class EmployeeService {
    public async getAllEmployees(): Promise<EmployeeModel[]> {
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl)
        const employees = response.data
        return employees
    }

    public async getOneEmployee(id: number): Promise<EmployeeModel> {
        const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id)
        const employees = response.data
        return employees
    }


    public async addEmployee(employee: EmployeeModel): Promise<void> {
        console.log("📤 Sending employee to backend:", employee);
        console.log("🧾 URL:", appConfig.employeesUrl);
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        try {
            const response = await axios.post<EmployeeModel>(
                appConfig.employeesUrl,
                employee,
                options
            );
            console.log("✅ Backend responded:", response.data);
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error("❌ Backend error:", err.message);
            } else {
                console.error("❌ Unknown error occurred:", err);
            }
            throw err;
        }
    }
}

export const employeeService = new EmployeeService();
