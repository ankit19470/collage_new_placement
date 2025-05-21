import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ApiServices from "../../ApiServices"
import { Link } from "react-router-dom"
function AddCourse() {
    const [coursename, setName] = useState("")
    const [coursecode, setCourse] = useState("")
    const [data1,setData1]=useState([])
    const [deptId,setDeptId]=useState("")

    const changeName = ((e) => {
        setName(e.target.value)
    })
    const changeCourse = ((e) => {
        setCourse(e.target.value)
    })
    useEffect(()=>{
        // axios.post("http://localhost:1000/api/getall/department", data1)
        ApiServices.manageDepartment()
        .then((res)=>{
        setData1(res.data.data)
    })
    },[])
    const handleForm = (e) => {
        e.preventDefault()
        let data = {
            courseName: coursename,
            courseCode: coursecode,
            deptId:deptId
        }
    
        // axios.post("http://localhost:1000/api/add/course", data)
        ApiServices.addCourse(data)
            .then((res) => {
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    setName("")
                    setCourse("")
                    setData1([])
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                console.log(err);
            })
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Course<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-5px"}}>HOME/COURSE</Link> </h1>
            </div>
          </div>
        </div>
      </div>

            <div className="container-fluid">
                <div className="container py-2 shadow"><h1 className="text-center py-2">Add Course</h1>
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
                            <div className="col-6"><input value={coursecode} onChange={changeCourse} className="form-control"></input></div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row">
                            <div className="col-1 text-end"></div>

                            <div className="col-2 text-end">Department</div>
                            <div className="col-6"><select value={deptId} onChange={(e)=>{setDeptId(e.target.value)}} className="form-control">
                                <option value={""} selected disabled>Choose Department</option>
                                {
                                data1.map((el,index)=>(
                                    <option value={el._id}>{el.departmentName}</option>
                                ))
                                }
                                </select></div>
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
export default AddCourse