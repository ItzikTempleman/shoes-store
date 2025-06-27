import type {ProductModel} from "../Models/ProductModel.ts";
import axios, {type AxiosRequestConfig} from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import {notify} from "../Utils/Notify.ts";

class ProductService {


    public async getAllProducts(): Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);

        const data = response.data

        return data
    }


    public async getOneProducts(id: number): Promise<ProductModel> {
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);

        const data = response.data

        return data
    }


    public async addProduct(product: ProductModel): Promise<void> {
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        await axios.post<ProductModel>(appConfig.productsUrl, product, options);
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        try {
            const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
            const data = response.data;

        } catch (err: unknown) {
            notify.error(err)
        }
    }


    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(appConfig.productsUrl + id);
    }

}

export const productService = new ProductService();
