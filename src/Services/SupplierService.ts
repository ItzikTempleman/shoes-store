import type {SupplierModel} from "../Models/SupplierModel.ts";
import axios, {type AxiosRequestConfig} from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import {notify} from "../Utils/Notify.ts";
import {store} from "../Redux/Store.ts";
import {supplierSlice} from "../Redux/SupplierSlice.ts";

class SupplierService {
    public async getAllSuppliers(): Promise<SupplierModel[]> {
        if (store.getState().suppliers.length > 0) return store.getState().suppliers;
        const response = await axios.get<SupplierModel[]>(appConfig.suppliersUrl)
        const dbSupplier = response.data;
        store.dispatch(supplierSlice.actions.initSuppliers(dbSupplier));
        return dbSupplier
    }

    public async getOneSupplier(id: number): Promise<SupplierModel> {
        const supplier = store.getState().suppliers.find(supplier => supplier.id === id);
        if (supplier) return supplier;
        const response = await axios.get<SupplierModel>(appConfig.suppliersUrl + id)
        const dbSupplier = response.data;
        return dbSupplier;
    }

    public async addSupplier(supplier: SupplierModel): Promise<void> {
        const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}}
        const response = await axios.post<SupplierModel>(appConfig.suppliersUrl, supplier, options);
        const dbSupplier = response.data;
        store.dispatch(supplierSlice.actions.addSupplier(dbSupplier));
    }

    public async updateSupplier(supplier: SupplierModel) {
        const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}};
        try {
            const response = await axios.put<SupplierModel>(appConfig.suppliersUrl + supplier.id, supplier, options);
            const dbSupplier = response.data;
            store.dispatch(supplierSlice.actions.updateSupplier(dbSupplier));
        } catch (err: unknown) {
            notify.error(err)
        }
    }

    public async deleteSupplier(id: number) {
        await axios.delete<SupplierModel>(appConfig.suppliersUrl + id);
        store.dispatch(supplierSlice.actions.deleteSupplier(id));
    }
}

export const supplierService = new SupplierService();