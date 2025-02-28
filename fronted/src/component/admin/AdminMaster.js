import { Outlet } from "react-router-dom"
import AdminFooter from "./AdminFooter"
import AdminHeader from "./AdminHeader"

function AdminMaster(){
    return(
        <>
<AdminHeader/>
<Outlet/>
<AdminFooter/>
</>
    )
}
export default AdminMaster