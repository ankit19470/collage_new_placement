import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ApiServices from "../../ApiServices"
function ManageCourse() {
    const [data, setData] = useState([])
    const [isDelete,setIsDelete]=useState(false)
    useEffect( () => {
        // axios.post("http://localhost:1000/api/getall/course")
        ApiServices.manageCourse()
            .then((res) => {
                setData(res.data.data)
            }
            )
            .catch((err => {
                console.log(err)
            }))
    },[isDelete])
    const deleteData=((id)=>{
        let data={
            _id:id,
        }
        // axios.post("http://localhost:1000/api/delete/course",data)
        ApiServices.deleteCourse(data)
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>View Course<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-5px"}}>HOME/COURSE</Link> </h1>
            </div>
          </div>
        </div>
      </div>
            <div className="container table-responsive">
                <div className="row text-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 py-2"><h2>Manage Course</h2></div>
                    {/* <div className="col-md-4 text-end py-2">
                        <Link to={"/adminmaster/updatecourse"} className="btn btn-primary btn-lg ">Add</Link>
                    </div> */}
                </div>


                <table class="table table-bordered table-hover table-striped">
                    <tbody>
                        <tr>
                            <th>S no.</th>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Department</th>
                            {/* <th>View</th> */}
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        { data.map((el, index) => {
                                return (
                                    <tr>
                                
                                        <td>{index + 1}</td>
                                        <td>{el.courseName}</td>
                                        <td>{el.courseCode}</td>
                                        <td>{el.deptId?.departmentName}</td>

                                        {/* <td><Link to={'/singlecourse/'+el._id}><i className="bi bi-eye btn btn-outline-primary"></i></Link></td> */}

                                        <td><Link to={'/adminmaster/updatecourse/'+el._id}><i className="bi bi-pen btn btn-outline-success"></i></Link></td>
                                        <td><button className="btn btn-outline-danger" onClick={()=>{deleteData(el._id)}}><i className="bi bi-trash"></i></button></td>


                            
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
export default ManageCourse