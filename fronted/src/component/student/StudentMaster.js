import { Outlet } from "react-router-dom"
import StudentFooter from "./StudentFooter"
import StudentHeader from "./StudentHeader"

function StudentMaster() {
    return (
        <>
            <StudentHeader />
            <Outlet />
            <StudentFooter />
        </>
    )
}
export default StudentMaster