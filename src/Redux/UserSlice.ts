import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {UserModel} from "../Models/user-model/UserModel";


function initUser(_currentState: UserModel, action: PayloadAction<UserModel>) {
    return action.payload;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function logoutUser(_: UserModel, _action: PayloadAction): UserModel | null {
    return null;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const userSlice = createSlice<UserModel>({
    name: "userSlice",
    initialState: new UserModel(),
    reducers: { initUser, logoutUser }
});