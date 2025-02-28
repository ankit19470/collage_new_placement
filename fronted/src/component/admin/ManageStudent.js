import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import * as qs from "qs"
import ApiServices, { BASE_URL } from "../ApiServices"
function ManageStudent() {
    const [data, setData] = useState([])
    const [isDelete, setIsDelete] = useState(false)
    useEffect(() => {
        // axios.post("http://localhost:1000/api/getall/student")
        ApiServices.manageStudent()
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [isDelete])
    const deleteData = ((id, status) => {
        let data = {
            _id: id,
            status:!status
        }
        // axios.post("http://localhost:1000/api/delete/student", qs.stringify(data))
        ApiServices.changeStatus(data)
            .then((res) => {
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    setIsDelete(true)
                } else {
                    toast.error(res.data.message)
                }
            })
        setIsDelete(false)
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>View Student<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-5px"}}>HOME/STUDENT</Link> </h1>
            </div>
          </div>
        </div>
      </div>
            <div className="container table-responsive">
                <div className="row text-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"><h2 className="py-2">Manage Student</h2></div>
                    {/* <div className="col-md-4 text-end py-2">
                    <Link to={"/adminmaster/UpdateStudent"} className="btn btn-primary btn-lg">Add</Link>
                </div> */}
                </div>
                <table class="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>S no.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Course</th>
                            <th>Contact</th>
                            <th>Profile</th>
                            <th>Address</th>
                            <th>Status</th>
                            {/* <th>View</th>    */}

                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {
                            data.map((el, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{el.name}</td>
                                        <td>{el.email}</td>
                                        <td>{el.departmentId?.departmentName}</td>
                                        <td>{el.courseId?.courseName} ({el.courseId?.courseCode})</td>
                                        <td>{el.contact}</td>
                                        <td><img src={BASE_URL+ el.profile} style={{ width: "200px", }} /></td>
                                        <td>{el.address}</td>
                                        {/* <td>{el.status.toString()}</td> */}
                                        <td>
                                            {el.status?"Active":"in-active"}
                                        </td>
                                        {/* <td><Link to={'/singlestudent/' + el._id}><i className="bi bi-eye btn btn-outline-primary"></i></Link></td> */}
                                        <td><Link to={'/adminmaster/updatestudent/' + el._id}><i className="bi bi-pencil btn btn-outline-success"></i></Link></td>
                                        <td><button className="btn btn-outline-danger" onClick={()=>{ deleteData(el._id,el.status) }}>Change Status</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )

}
export default ManageStudent