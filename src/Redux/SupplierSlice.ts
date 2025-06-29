
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {SupplierModel} from "../Models/SupplierModel.ts";


function initSuppliers(_: SupplierModel[], payloadAction: PayloadAction<SupplierModel[]>): SupplierModel[] {
    return payloadAction.payload;
}


function addSupplier(currentState: SupplierModel[], payloadAction: PayloadAction<SupplierModel>): SupplierModel[] {
    return [...currentState, payloadAction.payload];
}

function updateSupplier(currentState: SupplierModel[], payloadAction: PayloadAction<SupplierModel>): SupplierModel[] {
    const newState = [...currentState];
    const supplierToUpdate = payloadAction.payload;

    const indexToUpdate = newState.findIndex(supplier => supplier.id === supplierToUpdate.id);
    newState[indexToUpdate] = supplierToUpdate
    return newState
}

function deleteSupplier(currentState: SupplierModel[], payloadAction: PayloadAction<number>): SupplierModel[] {
    const newState = [...currentState];
    const supplierToDelete = payloadAction.payload;
    const indexToDelete = newState.findIndex(supplier => supplier.id === supplierToDelete);
    newState.slice(indexToDelete, 1)
    return newState;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const supplierSlice = createSlice<SupplierModel[]>(
    {
        name: "supplierSlices",
        initialState: [],
        reducers: {
            initSuppliers, addSupplier, updateSupplier, deleteSupplier
        }
    }
)