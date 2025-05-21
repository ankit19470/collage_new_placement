import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import ApiServices, { BASE_URL } from "../ApiServices"
function UpdateStudent() {
    const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [deptId, setdeptId] = useState("")
    const [deptIdData, setdepData] = useState([])

    const [contact, setContact] = useState("")
    const [image, setImage] = useState("")
    const [imageObj, setImageObj] = useState({})
    const [previousImage, setPreviousImage] = useState("")

    const [address, setAddress] = useState("")
    const [courseId, setcourse] = useState("")
    const [courseIdData, setcourseData] = useState([])
    const changeName = ((e) => {
        setName(e.target.value) 
    })
    // const changeEmail = ((e) => {
    //     setEmail(e.target.value)
    // })
    // const changePassword = ((e) => {
    //     setPassword(e.target.value)
    // })
    const changeDep = ((e) => {
        setdeptId(e.target.value)
    })
    const changeContact = ((e) => {
        setContact(e.target.value)
    })
    const changeImage = ((e) => {
        setImage(e.target.value)
        setImageObj(e.target.files[0])
    })
    const changeAddress = ((e) => {
        setAddress(e.target.value)
    })
    const changeCourse = ((e) => {
        setcourse(e.target.value)
    })
    useEffect(() => {
        // axios.post("http://localhost:1000/api/getall/department", deptIdData)
        ApiServices.manageDepartment(deptIdData)
        .then((res) => {
            // console.log(res)
            setdepData(res.data.data)
        })
    }, [])
    useEffect(() => {
        // axios.post("http://localhost:1000/api/getall/course", courseIdData)
        ApiServices.manageCourse(courseIdData)

        .then((res) => {
            setcourseData(res.data.data)
        })
    }, [])
    let param = useParams()
    const id = param.id
    useEffect(() => {
        let data = {
            _id: id
        }
        // axios.post("http://localhost:1000/api/singleget/student",data)
        ApiServices.singleStudent(data)
            .then((res) => {
                console.log(res)
                setName(res.data.data.name)
                // setEmail(res.data.data.email)
                // setPassword(res.data.data.password)
                setContact(res.data.data.contact)
                setAddress(res.data.data.address)
                setcourse(res.data.data.courseId?._id)
                setdeptId(res.data.data.departmentId?._id)
                setPreviousImage(res.data.data.profile)
            })
    }, [])
    const nav = useNavigate()
    const handleForm = ((e) => {
        e.preventDefault();
        let data = new FormData()
        data.append("_id", id)
        data.append("name", name)
        // data.append("email", email)
        // data.append("password", password)
        data.append("departmentId", deptId)
        data.append("courseId", courseId)
        data.append("contact", contact)
        data.append("address", address)
        if (!!image) {
            data.append("profile", imageObj)
        }
        // axios.post("http://localhost:1000/api/update/student", data)
        ApiServices.updateStudent(data)
            .then((res) => {
                console.log(res.data)
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    nav("/adminmaster/managestudent")
                } else {
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Update Student<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-5px"}}>HOME/STUDENT</Link> </h1>
            </div>
          </div>
        </div>
      </div>
            <div className="container-fluid">
                <div className="container py-2 p-5 shadow"><h1 className="text-center py-2">Update Student</h1>
                    <form onSubmit={handleForm}>

                        <div className="row">
                            {/* <div className="col-6">name <input value={name} onChange={changeName} className="form-control"></input></div> */}
                          
                            {/* <div className="col-6">Course <select value={courseId} onChange={changeCourse} className="form-control">
                                <option value={""} selected disabled>Choose Course</option>
                                {
                                    courseIdData.map((el, index) =>
                                    (
                                        <option value={el._id}>{el.courseName} ({el.courseCode})</option>
                                    ))
                                }
                            </select>
                            </div> */}
                            {/* <div className="col-1"></div> */}
                           
                            {/* <div className="col-6">Email <input value={email} onChange={changeEmail} className="form-control"></input></div> */}
                        </div>
                        <div className="row py-2">
                            {/* <div className="col-6">Password <input value={password} onChange={changePassword} className="form-control"></input></div> */}
                            <div className="col-6">Profile <input value={image} onChange={changeImage} type="file" className="form-control"></input></div>
                            <div className="col-6">Contact <input value={contact} onChange={changeContact} className="form-control"></input></div>
                            
                            {/* <div className="col-6">Department
                                <select value={deptId} onChange={changeDep} className="form-control">
                                    <option value={""} selected disabled>Choose Student</option>
                                    {
                                        deptIdData.map((el, index) =>
                                        (
                                            <option value={el._id}>{el.departmentName}</option>
                                        ))
                                    }
                                </select>
                            </div> */}
                            <img src={BASE_URL+previousImage} style={{width:200}} />

                        </div>
                        <div className="row py-2">
                            {/* <div className="col-6">Contact <input value={contact} onChange={changeContact} className="form-control"></input></div> */}
                            {/* <div className="col-2"></div> */}
                            <div className="col-12">Address <input value={address} onChange={changeAddress} className="form-control"></input></div>
                           
                            
                        </div>
                        {/* <div className="row">
                            <div className="col-6">Course <select value={courseId} onChange={changeCourse} className="form-control">
                                <option value={""} selected disabled>Choose Course</option>
                                {
                                    courseIdData.map((el, index) =>
                                    (
                                        <option value={el._id}>{el.courseName} ({el.courseCode})</option>
                                    ))
                                }
                            </select>
                            </div>
                        </div> */}

                        <div className="row py-3">
                            <div className="col-12  text-center"><button className="btn btn-primary">Submit</button></div>


                        </div>


                    </form>

                </div>
            </div>
        </>
    )
}
export default UpdateStudent