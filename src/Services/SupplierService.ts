import type {SupplierModel} from "../Models/SupplierModel.ts";
import axios, {type AxiosRequestConfig} from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import {notify} from "../Utils/Notify.ts";



class SupplierService {

    public async getAllSuppliers(): Promise<SupplierModel[]> {
        const response = await axios.get<SupplierModel[]>(appConfig.suppliersUrl)
        return response.data
    }

    public async getOneSupplier(id:number) :Promise<SupplierModel>{
        const response =await axios.get<SupplierModel>(appConfig.suppliersUrl +id)
        return response.data
    }

    public async addSupplier(supplier: SupplierModel): Promise<void> {
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        try {
            await axios.post<SupplierModel>(appConfig.suppliersUrl, supplier, options)
        } catch (err: unknown) {
            notify.error(err);
        }

    }

}

export const supplierService = new SupplierService();
