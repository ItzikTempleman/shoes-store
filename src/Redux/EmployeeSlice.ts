
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {EmployeeModel} from "../Models/EmployeeModel.ts";


function initEmployees(_: EmployeeModel[], payloadAction: PayloadAction<EmployeeModel[]>): EmployeeModel[] {
    return payloadAction.payload;
}


function addEmployee(currentState: EmployeeModel[], payloadAction: PayloadAction<EmployeeModel>): EmployeeModel[] {
    return [...currentState, payloadAction.payload];
}

function updateEmployee(currentState: EmployeeModel[], payloadAction: PayloadAction<EmployeeModel>): EmployeeModel[] {
    const newState = [...currentState];
    const employeeToUpdate = payloadAction.payload;

    const indexToUpdate = newState.findIndex(employee => employee.id === employeeToUpdate.id);
    newState[indexToUpdate] = employeeToUpdate
    return newState
}

function deleteEmployee(currentState: EmployeeModel[], payloadAction: PayloadAction<number>): EmployeeModel[] {
    const newState = [...currentState];
    const employeeToDelete = payloadAction.payload;
    const indexToDelete = newState.findIndex(employee => employee.id === employeeToDelete);
    newState.splice(indexToDelete, 1)
    return newState;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const employeeSlice = createSlice<EmployeeModel[]>(
    {
        name: "employeeSlices",
        initialState: [],
        reducers: {
            initEmployees, addEmployee, updateEmployee, deleteEmployee
        }
    }
)