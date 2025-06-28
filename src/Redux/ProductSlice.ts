
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ProductModel} from "../Models/ProductModel.ts";


function initProduct(_: ProductModel[], payloadAction: PayloadAction<ProductModel[]>): ProductModel[] {
    return payloadAction.payload;
}


function addProduct(currentState: ProductModel[], payloadAction: PayloadAction<ProductModel>): ProductModel[] {
    return [...currentState, payloadAction.payload];
}

function updateProduct(currentState: ProductModel[], payloadAction: PayloadAction<ProductModel>): ProductModel[] {
    const newState = [...currentState];
    const productToUpdate = payloadAction.payload;

    const indexToUpdate = newState.findIndex(product => product.id === productToUpdate.id);
    newState[indexToUpdate] = productToUpdate
    return newState
}

function deleteProduct(currentState: ProductModel[], payloadAction: PayloadAction<number>): ProductModel[] {
    const newState = [...currentState];
    const productToDelete = payloadAction.payload;
    const indexToDelete = newState.findIndex(product => product.id === productToDelete);
    newState.slice(indexToDelete, 1)
    return newState;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const productSlice = createSlice<ProductModel[]>(
    {
        name: "productSlices",
        initialState: [],
        reducers: {
            initProduct, addProduct, updateProduct, deleteProduct
        }
    }
)