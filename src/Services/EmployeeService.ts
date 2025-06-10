import type {EmployeeModel} from "../Models/EmployeeModel.ts";
import axios, {type AxiosRequestConfig} from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import {notify} from "../Utils/Notify.ts";

class EmployeeService {
    public async getAllEmployees(): Promise<EmployeeModel[]> {
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl)
        return response.data
    }

    public async getOneEmployee(id: number): Promise<EmployeeModel> {
        const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id)
        return response.data
    }


    public async addEmployee(employee: EmployeeModel): Promise<void> {
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        try {
            const response = await axios.post<EmployeeModel>(appConfig.employeesUrl, employee, options);
            console.log("✅ Backend responded:", response.data);
        } catch (err: unknown) {
            notify.error(err);
        }
    }
}

export const employeeService = new EmployeeService();
