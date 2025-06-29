import "./ProductCard.css";
import type {ProductModel} from "../../../Models/ProductModel.ts";
import {useNavigate} from "react-router-dom";


type ProductCardProps = {
    product: ProductModel;
};


export function ProductCard(props: ProductCardProps) {
    const navigate = useNavigate();

    function navigateToProductDetails() {
        navigate("/products/" + props.product.id)
    }

    return (
        <div className="ProductCard" onClick={navigateToProductDetails}>
            <div>
                <span>{props.product.name}</span>
                <span>Price: {props.product.price}</span>
                <span>Stock: {props.product.stock}</span>
            </div>

            <div>
                <img src={props.product.imageUrl}/>
            </div>
        </div>
    );
}
