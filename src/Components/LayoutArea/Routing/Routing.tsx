import "./Routing.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../../PageArea/Home/Home.tsx";
import {OurProducts} from "../../PageArea/OurProducts/OurProducts.tsx";
import {About} from "../../PageArea/About/About.tsx";
import {OurSuccessStories} from "../../PageArea/OurSuccessStories/OurSuccessStories.tsx";
import {Page404} from "../../PageArea/Page404/Page404.tsx";
import {EmployeeList} from "../../EmployeeArea/EmployeeList/EmployeeList.tsx";
import {EmployeeDetails} from "../../EmployeeArea/EmployeeDetails/EmployeeDetails.tsx";
import {AddEmployee} from "../../EmployeeArea/AddEmployee/AddEmployee.tsx";
import {EditEmployee} from "../../EmployeeArea/EditEmployee/EditEmployee.tsx";
import {SupplierList} from "../../SupplierArea/SupplierList/SupplierList.tsx";
import {SupplierDetails} from "../../SupplierArea/SupplierDetails/SupplierDetails.tsx";
import {EditSupplier} from "../../SupplierArea/EditSupplier/EditSupplier.tsx";
import {AddSupplier} from "../../SupplierArea/AddSupplier/AddSupplier.tsx";

export function Routing() {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Navigate to={"/home"}/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<OurProducts/>}/>
                <Route path="/success-stories" element={<OurSuccessStories/>}/>
                <Route path="/employees" element={<EmployeeList/>}/>
                <Route path="/employees/:id" element={<EmployeeDetails/>}/>
                <Route path="/employees/edit/:id" element={<EditEmployee/>}/>
                <Route path="/employees/new" element={<AddEmployee/>}/>

                <Route path="/suppliers" element={<SupplierList/>}/>
                <Route path="/suppliers/:id" element={<SupplierDetails/>}/>
                <Route path="/suppliers/edit/:id" element={<EditSupplier/>}/>
                <Route path="/suppliers/new" element={<AddSupplier/>}/>

                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
