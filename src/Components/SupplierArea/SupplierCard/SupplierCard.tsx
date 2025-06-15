import "./SupplierCard.css";
import type {SupplierModel} from "../../../Models/SupplierModel.ts";
import {useNavigate} from "react-router-dom";

type SupplierCardProps = {
    supplier: SupplierModel;
}

export function SupplierCard(props: SupplierCardProps) {

    const navigate = useNavigate()

    function navigateToDetails(){
        navigate("/suppliers/"+props.supplier.id);
    }

    return (
        <div className="SupplierCard" onClick={navigateToDetails}>
            <div>
                <div>שם ספק:</div>
                <span>{props.supplier.company} </span>
            </div>
            <br/>
            <div>
                <div>כתובת:</div>
                <span>{props.supplier.address}</span>
                <br/>
                <span>{ props.supplier.city}, {props.supplier.country}</span>
            </div>
            <img src={props.supplier.imageUrl}/>
        </div>
    );
}
