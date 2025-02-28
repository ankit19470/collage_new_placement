import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import ApiServices from "../ApiServices"
import { Link } from "react-router-dom"
function AddStudent() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")
    const [imageName, setImageName] = useState("")
    const [image, setImage] = useState({})
    const [courseId, setCourse] = useState("")
    const [courseIdData, setcourseData] = useState([])
    const [depId, setdep] = useState("")
    const [depIdData, setdepData] = useState([])

    const changeDep = ((event) => {
        setdep(event.target.value)
    })
    const changeCourse = ((event) => {
        setCourse(event.target.value)
    })
    const changeName = ((event) => {
        setName(event.target.value)
    })
    const changeEmail = ((event) => {
        setEmail(event.target.value)
    })
    const changePassword = ((event) => {
        setPassword(event.target.value)
    })
    const changeContact = ((event) => {
        setContact(event.target.value)
    })
    const changeAddress = ((event) => {
        setAddress(event.target.value)
    })
    const changeImage = ((event) => {
        setImageName(event.target.value)
        setImage(event.target.files[0])
    })
    useEffect(() => {
        let data = {
        }
        ApiServices.manageDepartment(data)
            .then((res) => {
                setdepData(res.data.data)
                // console.log(res)
            })
    }, [])
    useEffect(() => {
        if (!!depId) {
            let data = {
                deptId: depId
            }
            // axios.post("http://localhost:1000/api/getall/course", data)
            ApiServices.manageCourse(data)
                .then((res) => {
                    setcourseData(res.data.data)
                    // console.log(res)
                })
        }
    }, [depId])
    const nav = useNavigate()
    const handleForm = ((event) => {
        event.preventDefault()
        let data = new FormData()
        data.append("name", name)
        data.append("email", email)
        data.append("password", password)
        data.append("contact", contact)
        data.append("address", address)
        data.append("profile", image)
        data.append("departmentId", depId)
        data.append("courseId", courseId)

        // axios.post("http://localhost:1000/api/add/student", data, { obj })
        ApiServices.addStudent(data)
            // ApiServices
            .then((res) => {
                console.log(res);
                if (res.data.success == true) {
                    toast.success(res.data.message)


                    let data = {
                        email: email,
                        password: password
                    }
                    // axios.post("http://localhost:1000/api/login/student", data2)
                    ApiServices.loginStudent(data)

                        .then((res) => {
                            if (res.data.success == true) {
                                sessionStorage.setItem("userId", res.data._id)
                                sessionStorage.setItem("token", res.data.token)
                                localStorage.setItem("token", res.data.token)
                                nav('/adminmaster/managestudent')
                            } else {
                                toast.error(res.data.message)
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    })
    // const obj = {
    //     display: "block",
    //     margin: "20vh auto",
    //   }
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
                            <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Student<br /><Link to={"/adminmaster/dashboard"} className="nav-link" style={{ fontSize: "15px", marginLeft: "-5px" }}>HOME/STUDENT</Link> </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container py-2 p-5 shadow"><h1 className="text-center py-2">Add Student</h1>
                    <form onSubmit={handleForm}>

                        <div className="row">
                            <div className="col-6">name <input value={name} onChange={changeName} className="form-control"></input></div>
                            {/* <div className="col-1"></div> */}
                            <div className="col-6">Email <input value={email} onChange={changeEmail} className="form-control"></input></div>
                        </div>
                        <div className="row py-2">
                            <div className="col-6">Password <input value={password} onChange={changePassword} className="form-control"></input></div>
                            {/* <div className="col-2"></div> */}
                            <div className="col-6">Department <select value={depId} onChange={changeDep} className="form-control">
                                <option value={""} selected disabled>Choose Department</option>
                                {
                                    depIdData.map((el, index) => (
                                        <option value={el._id}>{el.departmentName}</option>

                                    ))
                                }
                            </select>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-6">Contact <input value={contact} maxLength={10} minLength={10} onChange={changeContact} className="form-control"></input></div>
                            {/* <div className="col-2"></div> */}
                            <div className="col-6">Profile <input value={imageName} onChange={changeImage} type="file" className="form-control"></input></div>
                        </div>
                        <div className="row">
                            <div className="col-6">Address <input value={address} onChange={changeAddress} className="form-control"></input></div>
                            <div className="col-6">Course <select value={courseId} onChange={changeCourse} className="form-control">
                                <option value={""} selected disabled>Choose Course</option>
                                {
                                    courseIdData.map((el, index) => (
                                        <option value={el._id}>{el.courseName}  ({el.courseCode})</option>
                                    ))
                                }
                            </select></div>
                        </div>
                        <div className="row py-3">
                            <div className="col-12  text-center"><button className="btn btn-primary">Submit</button></div>


                        </div>


                    </form>

                </div>
            </div>

        </>
    )
}
export default AddStudent