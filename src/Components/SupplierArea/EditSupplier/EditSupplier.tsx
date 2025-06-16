import "./EditSupplier.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import type {SupplierModel} from "../../../Models/SupplierModel.ts";
import {useNavigate, useParams} from "react-router-dom";
import {notify} from "../../../Utils/Notify.ts";
import {supplierService} from "../../../Services/SupplierService.ts";
import {Button, TextField} from "@mui/material";

export function EditSupplier() {
    useTitle("Edit supplier");
    const [image, setImage] = useState("");
    const {register, handleSubmit, setValue} = useForm<SupplierModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.id!;


    useEffect(() => {
        supplierService.getOneSupplier(id)
            .then(dataToSet => {
                    setValue("company", dataToSet.company)
                    setValue("city", dataToSet.city)
                    setValue("address", dataToSet.address)
                    setValue("phone", dataToSet.phone)
                    setValue("country", dataToSet.country)
                    setImage(dataToSet.imageUrl!)
                }
            ).catch(err => notify.error(err))
    }, []);


    async function update(supplier: SupplierModel) {
        try {
            supplier.image = (supplier.image as unknown as FileList)[0];
            supplier.id = id;
            await supplierService.updateSupplier(supplier);
            notify.success("Supplier updated successfully");
            navigate("/supplier/" + supplier.id);
        } catch (err) {
            notify.error(err);
        }
    }


    return (
        <div className="EditSupplier">
            <form onSubmit={handleSubmit(update)}>
                <TextField
                    label="שם חברה"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="שם חברה"
                    {
                        ...register("company")
                    }
                />


                <TextField
                    label="עיר"
                    inputProps={{minLength: 3, maxLength: 30}}
                    required
                    fullWidth
                    placeholder="עיר"
                    {
                        ...register("city")
                    }/>

                <TextField
                    label="מדינה"
                    fullWidth
                    inputProps={{minLength: 3, maxLength: 30}}
                    required
                    placeholder="מדינה"
                    {
                        ...register("country")
                    }/>

                <TextField
                    label="רחוב ומספר"
                    fullWidth
                    inputProps={{minLength: 3, maxLength: 30}}
                    required
                    placeholder="רחוב ומספר"
                    {
                        ...register("address")
                    }/>

                <TextField
                    label="מספר טלפון"
                    fullWidth
                    inputProps={{minLength: 7, maxLength: 11}}
                    type="tel"
                    placeholder="מספר טלפון"
                    {...register("phone")}
                />


                <img src={image}/>


                <TextField
                    variant="standard"
                    InputProps={{disableUnderline: true}}
                    type="file"
                    fullWidth
                    inputProps={{accept: "image/*"}}{...register("image")}
                    onChange={(changeEvent) => {
                        const target = changeEvent.target as HTMLInputElement;
                        const file = target.files?.[0];
                        if (file) {
                            setImage(URL.createObjectURL(file))
                        }
                    }
                    }
                />

                <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    variant="contained"
                >עדון ספק
                </Button>
            </form>
        </div>
    );
}
