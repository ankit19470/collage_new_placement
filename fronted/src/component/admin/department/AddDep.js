import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import ApiServices from "../../ApiServices"
import { ClipLoader } from "react-spinners"
import { Link } from "react-router-dom"
function AddDep() {
    const [depName, setDep] = useState("")
    var [loading, setLoader] = useState(false)
    const changeDepartment = ((event) => {
        setDep(event.target.value)
    })
    const handleForm = ((e) => {
        e.preventDefault()
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 2000)
        let data = {
            departmentName: depName
        }
        //  axios.post("http://localhost:1000/api/add/department",data)
        ApiServices.addDepartment(data)
            .then((res) => {
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    setDep("")
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    })
    const obj = {
        display: "block",
        margin: "20vh auto",
    }
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="/assets/logo/ctbanner.png"
                            className="card-img-bottom"
                            alt="..."
                            style={{ minHeight: "350px" }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Department<br /><Link to={"/adminmaster/dashboard"} className="nav-link" style={{ fontSize: "15px", marginLeft: "-20px" }}>HOME/DEPARTMENT</Link> </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container shadow py-2"><h1 className="text-center">Add Department</h1>
                    <div className="row">
                        <ClipLoader color="blue" loading={loading} size={50} cssOverride={obj} />
                        <div className={loading == true ? "d-none" : ""}>
                            <form onSubmit={handleForm}>
                                <div className="row py-3">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-2   text-end">
                                        <label>Department name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input value={depName} onChange={changeDepartment} className="form-control"></input>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-2">
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddDep