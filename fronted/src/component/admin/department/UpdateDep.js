import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import ApiServices from "../../ApiServices"
import { Link } from "react-router-dom"
function UpdateDep(){
    const [name,setName]=useState("")
    let param=useParams()
    const id=param.id
useEffect(()=>{
    let data={
        _id:id
    }
 ApiServices.singleDep(data)
    .then((res)=>{
        setName(res.data.data.departmentName)
    })
},[])
const nav=useNavigate()
const handleForm=((e)=>{
    e.preventDefault()
    let data={
        _id:id,
        departmentName:name
    }
    ApiServices.updateDep(data)
    // axios.post("http://localhost:1000/api/update/department",data)
    .then((res)=>{
        if(res.data.success==true){
toast.success(res.data.message)
nav("/adminmaster/managedep")
        }else{
            toast.error(res.data.message)
        }
    })
})
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Update Department<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-20px"}}>HOME/DEPARTMENT</Link> </h1>
            </div>
          </div>
        </div>
      </div>
              <div className="container-fluid">
                <div className="container shadow py-2"><h1 className="text-center">Update Department</h1>
                    <form onSubmit={handleForm}>
                        <div className="row">

                            <div className="row py-3">
                                <div className="col-md-1"></div>
                                <div className="col-md-2   text-end">
                                    <label>Department Name</label>
                                </div>
                                <div className="col-md-6">
                                    <input value={name} onChange={(event)=>{setName(event.target.value)}} className="form-control"></input>
                                    

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
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}
export default UpdateDep