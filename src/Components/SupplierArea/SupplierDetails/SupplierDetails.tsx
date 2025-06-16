import "./SupplierDetails.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {SupplierModel} from "../../../Models/SupplierModel.ts";
import {useEffect, useState} from "react";
import {supplierService} from "../../../Services/SupplierService.ts";
import {notify} from "../../../Utils/Notify.ts";

export function SupplierDetails() {
    useTitle("Supplier info")


    const params = useParams();

    const id = +params.id!;
    const navigate = useNavigate()
    const [supplier, setSupplier] = useState<SupplierModel>()

    useEffect(() => {

        supplierService.getOneSupplier(id)
            .then(dbSupplier => {
                setSupplier(dbSupplier)
            }).catch(err => console.log(err.message))
    }, [id]);


    async function deleteSupplier() {
        try {
            const doDelete = confirm("Delete supplier?")
            if (!doDelete) return;

            await supplierService.deleteSupplier(id)
            notify.success("Supplier has been deleted")
            navigate("/suppliers")
        } catch (err: unknown) {
            notify.error(err)
        }
    }


    return (
        <div className="SupplierDetails">

            <div>
                <span>{supplier?.company} </span>
            </div>

            <div>
                <span className="supplierDetailsNameFont"> {supplier?.company} </span>
                <span className="supplierDetailsAddressFont">{supplier?.address}, {supplier?.city}, {supplier?.country}</span>
            </div>

            <div>
                <span>{supplier?.phone} </span>

            </div>
            <div>
                <img src={supplier?.imageUrl}/>
            </div>


            <NavLink to="/supplier"> Back</NavLink>

            <span> | </span>
            <NavLink to={"/suppliers/edit/" + supplier?.id}> Edit</NavLink>
            <span> | </span>
            <NavLink to="#" onClick={deleteSupplier}>Delete</NavLink>


        </div>
    );
}
