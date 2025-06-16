import "./AddSupplier.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import type {SupplierModel} from "../../../Models/SupplierModel.ts";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {notify} from "../../../Utils/Notify.ts";
import {supplierService} from "../../../Services/SupplierService.ts";
import {Button, TextField} from "@mui/material";

export function AddSupplier() {

    useTitle("Add supplier")
    const {register, handleSubmit} = useForm<SupplierModel>();
    const navigate = useNavigate();
    const [imageToPreview, setImageToPreview] = useState("")

    async function send(supplier: SupplierModel) {
        try {
            supplier.image = (supplier.image as unknown as FileList)[0];
            await supplierService.addSupplier(supplier);
            navigate("/suppliers");
            notify.success("ספק הוסף בהצלחה");
        } catch (err: unknown) {
            notify.error(err);
        }
    }

    return (
        <div className="AddSupplier">
            <form onSubmit={handleSubmit(send)}>
                <TextField
                    label="חברה"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="חברה"
                    {
                        ...register("company")
                    }/>

                <TextField
                    label="מדינה"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="מדינה"
                    {
                        ...register("country")
                    }/>

                <TextField
                    label="עיר"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="עיר"
                    {
                        ...register("city")
                    }/>

                <TextField
                    label="כתובת"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="כתובת"
                    {
                        ...register("address")
                    }/>

                <TextField
                    label="מספר טלפון"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="מספר טלפון"
                    {
                        ...register("phone")
                    }/>


                <TextField
                    variant="standard"
                    InputProps={{disableUnderline: true}}
                    type="file"
                    fullWidth
                    inputProps={
                        {accept: "image/*"}
                    }  {

                        ...register("image")
                    }
                    onChange={(it) => {
                        const target = it.target as HTMLInputElement;
                        const file = target.files?.[0];
                        if (file) {
                            setImageToPreview(URL.createObjectURL(file));
                        }
                    }
                    }/>

                <img src={imageToPreview}/>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                >הוסף ספק</Button>
            </form>
        </div>
    );
}
