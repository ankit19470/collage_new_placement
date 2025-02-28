import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Modal from "react-modal"
import { toast } from "react-toastify"
import ApiServices, { BASE_URL } from "../../ApiServices"
function ManageJobs() {
    const [data, setData] = useState([])
    const [data1, setData1] = useState([])
    const [jobId,setJobId]=useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDelete,setIsDelete]=useState(false)
    useEffect(() => {
        const userData=JSON.parse(sessionStorage.getItem("userData"))
        let data={
            companyId:userData.companyId
        }
        // axios.post("http://localhost:1000/api/getall/jobpost",data)
        ApiServices.manageJob(data)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [isDelete])
    useEffect(() => {
        getData()
    }, [jobId])
    const getData=()=>{
        if(!!jobId){
            let data={
                jobId:jobId
            }
            // axios.post("http://localhost:1000/api/getall/application",data)
            ApiServices.manageApp(data)
                .then((res) => {
                    setData1(res.data.data)
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
    }
    const changeStatus = (id,status) => {
        let data = {
            _id: id,
            status:status
        }
        // axios.post("http://localhost:1000/api/changeStatus/application", data)
        ApiServices.jobChangeStatus(data)
            .then((res => {
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    getData()
                } else {
                    toast.error(res.data.message)
                }
            }))
            .catch((err) => {
                console.log(err)
            })
    }
    const deleteData=((id,status)=>{
        let data={
            _id:id,
            status:!status

        }
        // axios.post("http://localhost:1000/api/delete/jobpost",data)
        ApiServices.deleteJob(data)
        .then((res)=>{
            if(res.data.success==true){
                toast.success(res.data.message)
                setIsDelete(true)
            }else{
                toast.error(res.data.message)
            }
        })
        setIsDelete(false)
    })
    const customStyles = {
        content: {
            width: '80%',
            height: '40%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
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
                            <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>View Job<br /><Link to={"/companymaster/home"} className="nav-link" style={{ fontSize: "15px", marginLeft: "-20px" }}>HOME/JOB</Link> </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container table-responsive">
                <div className="row text-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 py-2"><h1>Manage Job</h1></div>
                    {/* <div className="col-md-4 text-end py-2">
                        <Link to={"/companymaster/updatejob"} className="btn btn-primary btn-lg ">Add</Link>
                    </div> */}
                </div>
                <table class="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>S no.</th>
                            <th>Job Title</th>
                            {/* <th>Description</th> */}
                            <th>Compnay Detail</th>
                            {/* <th>Address</th> */}
                            <th>Salary</th>
                            <th>Experience</th>
                            <th>Description</th>

                            {/* <th>View</th> */}
                            <th>Edit</th>
                            <th>Status</th>
                            <th>Application</th>
                            <th>Delete</th>


                        </tr>
                        {
                            data.map((el, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{el.Title}</td>
                                        {/* <td>{el.Description}</td> */}
                                        <td>({el.companyId.name})-({el.companyId.email})-({el.companyId.Description})-({el.companyId.address})-({el.companyId.contact})</td>
                                        {/* <td>{el.companyId.address}</td> */}

                                        <td>{el.Salary}</td>
                                        <td>{el.Experience}</td>
                                        <td>{el.Description}</td>

                                        {/* <td><Link to={'/singlejob/' + el._id}><i className="bi bi-eye btn btn-outline-primary"></i></Link></td> */}
                                        <td><Link to={'/companymaster/updatejob/' + el._id}><i className="bi bi-pencil btn btn-outline-success"></i></Link></td>
                                       <td>{el.status ? "Active" : "in-active"}</td>

                                        <td><button onClick={() => { setJobId(el._id);setIsModalOpen(true) }} className="btn btn-outline-primary">view</button></td>
                                        
                                        <td><button className="btn btn-outline-danger" onClick={()=>{
                                            deleteData(el._id,el.status)
                                        }}>Change Status</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="container">
                <Modal isOpen={isModalOpen} style={customStyles}>
                    <div className="row">
                        <div className="col-11">
                            <h1 className="text-center">View application</h1>
                        </div>
                        <div className="col-1 text-end">
                            <button className="btn btn-danger text-end " onClick={() => { setIsModalOpen(false) }}>X</button>
                        </div>
                    </div>
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th>S.no</th>
                                <th>Student</th>
                                
                                <th>Resume</th>
                                <th>Action</th>
                            </tr>
                            {
                                data1?.map((el, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>({el.studentId.name})-({el.studentId.email})-({el.studentId.address})-({el.studentId.contact})</td>
                                            <td><Link to={BASE_URL+ el.Resume } style={{width:"200px"}} >View</Link></td>
                                            <td>
                                                {el.status=="Pending"?
                                            <>
                                            <button onClick={()=>{changeStatus(el._id,"Short-Listed")}} className="btn btn-success">Short-List</button>
                                            <button onClick={()=>{changeStatus(el._id,"Rejected")}} className="btn btn-danger">Reject</button>
                                            </>    
                                            :
                                            el.status=="Short-Listed"?
                                            <>
                                            <button onClick={()=>{changeStatus(el._id,"Interviewed")}} className="btn btn-success">Interview</button>
                                            <button onClick={()=>{changeStatus(el._id,"Rejected")}} className="btn btn-danger">Reject</button>
                                            </>    
                                            :el.status=="Interviewed"?
                                            <>
                                            <button onClick={()=>{changeStatus(el._id,"Placed")}} className="btn btn-">Placed</button>
                                            <button onClick={()=>{changeStatus(el._id,"Rejected")}} className="btn btn-danger">Reject</button>
                                            </>    
                                            :
                                            el.status
                                            }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </Modal>
            </div>

        </>
    )
}
export default ManageJobs