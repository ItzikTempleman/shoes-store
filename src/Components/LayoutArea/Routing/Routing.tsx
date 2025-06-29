import "./Routing.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../../PageArea/Home/Home.tsx";
import {About} from "../../PageArea/About/About.tsx";
import {SuccessStories} from "../../PageArea/SuccessStories/SuccessStories.tsx";
import {Page404} from "../../PageArea/Page404/Page404.tsx";
import {EmployeeList} from "../../EmployeeArea/EmployeeList/EmployeeList.tsx";
import {EmployeeDetails} from "../../EmployeeArea/EmployeeDetails/EmployeeDetails.tsx";
import {AddEmployee} from "../../EmployeeArea/AddEmployee/AddEmployee.tsx";
import {EditEmployee} from "../../EmployeeArea/EditEmployee/EditEmployee.tsx";
import {SupplierList} from "../../SupplierArea/SupplierList/SupplierList.tsx";
import {SupplierDetails} from "../../SupplierArea/SupplierDetails/SupplierDetails.tsx";
import {EditSupplier} from "../../SupplierArea/EditSupplier/EditSupplier.tsx";
import {AddSupplier} from "../../SupplierArea/AddSupplier/AddSupplier.tsx";
import {ProductList} from "../../ProductArea/ProductList/ProductList.tsx";
import {ProductDetails} from "../../ProductArea/ProductDetails/ProductDetails.tsx";
import {EditProduct} from "../../ProductArea/EditProduct/EditProduct.tsx";
import {AddProduct} from "../../ProductArea/AddProduct/AddProduct.tsx";

export function Routing() {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Navigate to={"/home"}/>}/>
                <Route path="/home" element={<Home/>}/>

                <Route path="/success-stories" element={<SuccessStories/>}/>

                <Route path="/employees" element={<EmployeeList/>}/>
                <Route path="/employees/:id" element={<EmployeeDetails/>}/>
                <Route path="/employees/edit/:id" element={<EditEmployee/>}/>
                <Route path="/employees/new" element={<AddEmployee/>}/>

                <Route path="/suppliers" element={<SupplierList/>}/>
                <Route path="/suppliers/:id" element={<SupplierDetails/>}/>
                <Route path="/suppliers/edit/:id" element={<EditSupplier/>}/>
                <Route path="/suppliers/new" element={<AddSupplier/>}/>


                <Route path="/products" element={<ProductList/>}/>
                <Route path="/products/:id" element={<ProductDetails/>}/>
                <Route path="/products/edit/:id" element={<EditProduct/>}/>
                <Route path="/products/new" element={<AddProduct/>}/>


                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
