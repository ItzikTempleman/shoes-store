import type {EmployeeModel} from "../Models/EmployeeModel.ts";
import axios, {type AxiosRequestConfig} from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import {notify} from "../Utils/Notify.ts";
import {store} from "../Redux/Store.ts";
import {employeeSlice} from "../Redux/EmployeeSlice.ts";

class EmployeeService {
    public async getAllEmployees(): Promise<EmployeeModel[]> {
        if (store.getState().employees.length > 0) return store.getState().employees;
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
        const dbEmployee = response.data;
        store.dispatch(employeeSlice.actions.initEmployees(dbEmployee));
        return dbEmployee;
    }

    public async getOneEmployee(id: number): Promise<EmployeeModel> {
        const employee = store.getState().employees.find(employee => employee.id === id);
        if (employee) return employee;
        const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id)
        const dbEmployee = response.data;
        return dbEmployee;
    }

    public async addEmployee(employee: EmployeeModel): Promise<void> {
        const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}}
        const response = await axios.post<EmployeeModel>(appConfig.employeesUrl, employee, options);
        const dbEmployee = response.data;
        store.dispatch(employeeSlice.actions.addEmployee(dbEmployee));
    }

    public async updateEmployee(employee: EmployeeModel): Promise<void> {
        const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}}
        try {
            const response = await axios.put<EmployeeModel>(appConfig.employeesUrl + employee.id, employee, options);
            const dbEmployee = response.data;
            store.dispatch(employeeSlice.actions.updateEmployee(dbEmployee));
        } catch (err: unknown) {
            notify.error(err)
        }
    }

    public async deleteEmployee(id: number): Promise<void> {
        await axios.delete<EmployeeModel>(appConfig.employeesUrl + id)
        store.dispatch(employeeSlice.actions.deleteEmployee(id));
    }
}

export const employeeService = new EmployeeService();