import type {ProductModel} from "../Models/ProductModel.ts";
import axios, {type AxiosRequestConfig} from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import {notify} from "../Utils/Notify.ts";
import {productSlice} from "../Redux/ProductSlice.ts";
import {store} from "../Redux/Store.ts";

class ProductService {
    public async getAllProducts(): Promise<ProductModel[]> {
        if (store.getState().products.length > 0) return store.getState().products;
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const dbProduct = response.data;
        store.dispatch(productSlice.actions.initProducts(dbProduct));
        return dbProduct;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        const product = store.getState().employees.find(product => product.id === id);
        if (product) return product;
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        const dbProduct = response.data
        return dbProduct;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}}
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const dbProduct = response.data;
        store.dispatch(productSlice.actions.addProduct(dbProduct));
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}}
        try {
            const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
            const dbProduct = response.data;
            store.dispatch(productSlice.actions.updateProduct(dbProduct));
        } catch (err: unknown) {
            notify.error(err)
        }
    }

    public async deleteProduct(id: number): Promise<void> {
      await axios.delete(appConfig.productsUrl + id);
        store.dispatch(productSlice.actions.deleteProduct(id));
    }
}

export const productService = new ProductService();