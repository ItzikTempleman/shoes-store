import type {ProductModel} from "../Models/ProductModel.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


function initSupplier(currentState: SupplierModel[], payloadAction: PayloadAction<SupplierModel>): SupplierModel[] {
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
    const indexToDelete = newState.findIndex(supplier => supplier.id === supplierToDelete.id);
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
            initSupplier, addSupplier, updateSupplier, deleteSupplier
        }
    }
)