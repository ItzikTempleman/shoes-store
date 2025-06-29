import "./EditProduct.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import type {ProductModel} from "../../../Models/ProductModel.ts";
import {useNavigate, useParams} from "react-router-dom";
import {productService} from "../../../Services/ProductService.ts";
import {notify} from "../../../Utils/Notify.ts";
import {Button, TextField} from "@mui/material";

export function EditProduct() {
    useTitle("Edit product");

    const [image, setImage] = useState("");
    const {register, handleSubmit, setValue} = useForm<ProductModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.id!;

    useEffect(() => {
        productService.getOneProduct(id)
            .then(dbProduct => {
                    setValue("name", dbProduct.name);
                    setValue("price", dbProduct.price);
                    setValue("stock", dbProduct.stock);
                    setImage(dbProduct.imageUrl!);
                }
            )
            .catch(err => notify.error(err));
    }, []);


    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];
            product.id = id;
            notify.success("Product has been updated");
            navigate("/products/");
        } catch (err: unknown) {
            notify.error(err);
        }
    }

    return (
        <div className="EditProduct">
            <form onSubmit={handleSubmit(send)}>
                <TextField
                    label="Name" fullWidth inputProps={{minLength: 2, maxLength: 30}} required
                    placeholder="Name"{...register("name")}
                />
                <TextField
                    label="Price" fullWidth inputProps={{minLength: 2, maxLength: 30}} required
                    placeholder="Price" {...register("price")}
                />

                <TextField
                    label="Stock" fullWidth inputProps={{minLength: 5, maxLength: 20}} required
                    placeholder="Stock" {...register("stock")}
                />

                <img className="imagePreview" src={image}/>

                <TextField
                    variant="standard" fullWidth InputProps={{disableUnderline: true}} type="file"
                    inputProps={{accept: "image/*"}}{...register("image")}
                    onChange={(changeEvent) => {
                        const target = changeEvent.target as HTMLInputElement;
                        const file = target.files?.[0];
                        if (file) {
                            setImage(URL.createObjectURL(file));
                        }
                    }
                    }
                />

                <Button type="submit" color="primary" fullWidth variant="contained">Update product</Button>
            </form>
        </div>
    );
}
