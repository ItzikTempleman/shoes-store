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
            await axios.post<EmployeeModel>(appConfig.employeesUrl, employee, options);
        } catch (err: unknown) {
            notify.error(err);
        }
    }

    public async updateEmployee(employee: EmployeeModel): Promise<void> {
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        try {
            axios.put<EmployeeModel>(appConfig.employeesUrl + employee.id, employee, options)
            notify.success("Employee updated successfully")
        } catch (err: unknown) {
            notify.error(err)
        }

    }

    public async deleteEmployee(id: number): Promise<void> {
        await axios.delete<EmployeeModel>(appConfig.employeesUrl + id)
    }
}

export const employeeService = new EmployeeService();
