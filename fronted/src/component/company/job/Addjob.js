import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ApiServices from "../../ApiServices"
import { Link } from "react-router-dom"
function Addjobs() {
    const [title, setTitle] = useState("")
    const [des, setdes] = useState("")
    const [salary, setsal] = useState("")
    const [exp, setexp] = useState("")
    // const [companyId, setcom] = useState("")
    const [companyIdData, setcomData] = useState([])


    // const changeCom = ((event) => {
    //     setcom(event.target.value)
    // })

    const changeTitle = ((event) => {
        setTitle(event.target.value)
    })
    const changeDes = ((event) => {
        setdes(event.target.value)
    })
    const changesalary = ((event) => {
        setsal(event.target.value)
    })
    const changeexp = ((event) => {
        setexp(event.target.value)
    })
useEffect(()=>{
    // axios.post("http://localhost:1000/api/getall/company",companyIdData)
    ApiServices.manageCompany(companyIdData)
    .then((res)=>{
        console.log(res.data.data)
        setcomData(res.data.data)
       

    })
},[])
    const handleForm = ((event) => {
        event.preventDefault();
        const userData=JSON.parse(sessionStorage.getItem("userData"))
        let data = {
            Title: title,
            Description: des,
            Salary: salary,
            Experience: exp,
            companyId:userData.companyId
        }
        // axios.post("http://localhost:1000/api/add/jobpost", data)
        ApiServices.addJob(data)
            .then((res) => {
             if(res.data.success==true){
                toast.success(res.data.message)
             }else{
                toast.error(res.data.message)
             }
            })
            .catch((err)=>{
                console.log(err)
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
                            <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Add Job<br /><Link to={"/companymaster/home"} className="nav-link" style={{ fontSize: "15px", marginLeft: "-20px" }}>HOME/JOB</Link> </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container py-3 p-5 shadow"><h1 className="text-center">Add Jobs</h1>
                    <form onSubmit={handleForm}>

                        <div className="row">
                            <div className="col-md-6">Job Title <input value={title} onChange={changeTitle} className="form-control"></input></div>
                            <div className="col-md-6">Salary <input value={salary} onChange={changesalary} className="form-control"></input></div>

                            {/* <div className="col-1"></div> */}

                            {/* <div className="col-6">Company <select value={companyId} onChange={changeCom} className="form-control">
                                <option value={""} selected disabled>Choose Compnay</option>
                            {
                              companyIdData.map((el,index)=>(
                                <option value={el._id}>{el.name}-{el.email}-{el.Description}-{el.address}-{el.contact}</option>
                              ))
                            }
                            </select></div> */}


                        </div>
                        <div className="row py-2">
                            <div className="col-md-6">Description <input value={des} onChange={changeDes} className="form-control"></input></div>
                            {/* <div className="col-2"></div> */}
                            <div className="col-md-6">Experience <input value={exp} onChange={changeexp} className="form-control"></input></div>


                        </div>

                        {/* <div className="row py-2">
                
                            <div className="col-6">Experience <input value={exp} onChange={changeexp} className="form-control"></input></div>


                        </div> */}

                        <div className="row py-3">
                            <div className="col-12 text-center"><button className="btn btn-primary">Submit</button></div>


                        </div>


                    </form>

                </div>
            </div>
        </>
    )
}
export default Addjobs