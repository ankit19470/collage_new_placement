import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import ApiServices from "../../ApiServices"
import { Link} from "react-router-dom"

function UpdateCourse() {
    const [coursename, setCourse] = useState("")
    const [coursecode, setCode] = useState("")
    const [deptId, setdep] = useState("")
    const [deptData, setdepData] = useState([])

    const changeName = ((e) => {
        setCourse(e.target.value)
    })
    const changeCode = ((e) => {
        setCode(e.target.value)
    })
    const changedep = ((e) => {
        setdep(e.target.value)
    })
    useEffect(() => {
        axios.post("http://localhost:1000/api/getall/department", deptData)
            .then((res) => {
                console.log(res)
                setdepData(res.data.data)
             
            })
    }, [])
    let param = useParams()
    const id = param.id
    useEffect(() => {
        
        let data = {
            _id: id
        }
        // axios.post("http://localhost:1000/api/getsingle/course", data)
        ApiServices.singleCourse(data)
            .then((res) => {
                console.log(res)
                // set(res.data.error.id)
                setCourse(res.data.error.courseName)
                setCode(res.data.error.courseCode)
                setdep(res.data.error.deptId?._id)

                
            })
    }, [])
    const nav = useNavigate()
    const handleForm = ((e) => {
        e.preventDefault();
        let data = {
            _id: id,
            courseName: coursename,
            courseCode: coursecode,
            deptId:deptId
        }
        // axios.post("http://localhost:1000/api/update/course", data)
        ApiServices.updateCourse(data)
            .then((res) => {
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    nav("/adminmaster/managecourse")
                } else {
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Update Course<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-5px"}}>HOME/COURSE</Link> </h1>
            </div>
          </div>
        </div>
      </div>
            <div className="container-fluid">
                <div className="container py-2 shadow"><h1 className="text-center py-2">Update Course</h1>
                    <form onSubmit={handleForm}>
                        <div className="row">
                            <div className="col-1 text-end"></div>

                            <div className="col-2 text-end">Course name</div>
                            <div className="col-6"><input value={coursename} onChange={changeName} className="form-control"></input></div>
                            <div className="col-1"></div>



                        </div>
                        <div className="row py-3">
                            <div className="col-1 text-end"></div>

                            <div className="col-2 text-end">Course Code</div>
                            <div className="col-6"><input value={coursecode} onChange={changeCode} className="form-control"></input></div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row">
                            <div className="col-1 text-end"></div>

                            <div className="col-2 text-end">Department</div>
                            <div className="col-6">
                                <select value={deptId} onChange={changedep} className="form-control">
                                    <option value={""} selected disabled>choose Department</option>
                                    {
                                        deptData.map((el, index) => (
                                            <option value={el._id}>{el?.departmentName}</option>
                                        
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row py-3">
                            <div className="col-12 text-center"><button className="btn btn-primary">Submit</button></div>


                        </div>


                    </form>

                </div>
            </div>
        </>
    )
}
export default UpdateCourse