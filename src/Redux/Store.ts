import type {ProductModel} from "../Models/ProductModel.ts";
import type {EmployeeModel} from "../Models/EmployeeModel.ts";
import type {SupplierModel} from "../Models/SupplierModel.ts";
import {configureStore} from "@reduxjs/toolkit";
import {productSlice} from "./ProductSlice.ts";
import {employeeSlice} from "./EmployeeSlice.ts";
import {supplierSlice} from "./SupplierSlice.ts";
import type {UserModel} from "../Models/user-model/UserModel.ts";
import {userSlice} from "./UserSlice.ts";

export type AppState = {
    products: ProductModel[],
    employees: EmployeeModel[],
    suppliers: SupplierModel[],
    user:UserModel
};


export const store = configureStore<AppState>(
    {
        reducer: {
            products: productSlice.reducer,
            employees: employeeSlice.reducer,
            suppliers: supplierSlice.reducer,
            user:userSlice.reducer
        }
    }
)