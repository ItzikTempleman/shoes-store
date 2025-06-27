import "./SupplierList.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {useEffect, useState} from "react";
import type {SupplierModel} from "../../../Models/SupplierModel.ts";
import {supplierService} from "../../../Services/SupplierService.ts";
import {SupplierCard} from "../SupplierCard/SupplierCard.tsx";


export function SupplierList() {



    useTitle("Suppliers")
    const [supplier, setSupplier]= useState<SupplierModel[]>([])

    useEffect(() => {

        supplierService.getAllSuppliers()
            .then(dbSupplier=>
                setSupplier(dbSupplier)
            )
            .catch(err =>console.log(err.message));
    }, []);

    return (
        <div className="SupplierList">
            <h3>רשימת הספקים שלנו:</h3>
            <br/>
            {
                supplier.map(s=> <SupplierCard key={s.id} supplier={s}/>)
            }
        </div>
    );
}
