import { Outlet } from "react-router-dom"
import CompanyFooter from "./CompanyFooter"
import CompanyHeader from "./CompanyHeader"

function CompanyMaster(){
return(
    <>
    <CompanyHeader/>
    <Outlet/>
    <CompanyFooter/>
    </>
)
}
export default CompanyMaster