import {useForm} from "react-hook-form";
import {ProductModel} from "../../../Models/ProductModel";
import {productService} from "../../../Services/ProductService";
import "./AddProduct.css";
import {useNavigate} from "react-router-dom";
import {notify} from "../../../Utils/Notify.ts";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {Button, TextField} from "@mui/material";

export function AddProduct() {
    useTitle("Add product")

    const {register, handleSubmit} = useForm<ProductModel>();
    const navigate = useNavigate();

    async function send(product: ProductModel) {

        try {
            product.image = (product.image as unknown as FileList)[0];
            await productService.addProduct(product);
            navigate("/products");
        } catch (err: unknown) {
            notify.error(err);
        }
    }

    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>
                <TextField label="שם מוצר" placeholder="שם מוצר" fullWidth {...register("name")}/>
                <TextField label="מחיר" placeholder="מחיר" fullWidth {...register("price")}/>
                <TextField label="מלאי" placeholder="מלאי" fullWidth {...register("stock")}/>
                <TextField type="file" fullWidth inputProps={{accept: "image/*"}} {...register("image")} />
                <Button type="submit" color="primary" fullWidth variant="contained">Add</Button>
            </form>
        </div>
    );
}
