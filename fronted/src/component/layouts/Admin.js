import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
import { Link } from "react-router-dom"
import axios from "axios"
import ApiServices from "../ApiServices"
import { useForm } from "react-hook-form"
function Admin() {
  // var [email, setEmail] = useState("")
  // var [password, setPassword] = useState("")
  var [loading, setLoader] = useState(false)
  const {register,handleSubmit,formState:{errors}}=useForm()
  // const changeEmail = (event) => {
  //   setEmail(event.target.value)
  // }
  // const changePassword = (event) => {
  //   setPassword(event.target.value)
  // }
  const nav = useNavigate()
  const handleForm = (data) => {
    // event.preventDefault()
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000)
    // let data = {
    //   email: email,
    //   password: password
    // }
    ApiServices.loginStudent(data)
      .then((res) => {
        if (res.data.success == true) {
          sessionStorage.setItem("userData", JSON.stringify(res.data.data))
          sessionStorage.setItem("userId", res.data._id)
          sessionStorage.setItem("token", res.data.token)
          localStorage.setItem("token", res.data.token)
          if (res.data.data.userType == 1) {
            toast.success(res.data.message)
            nav('/adminmaster/dashboard')
          } else {
            nav('/admin')
            toast.error("You are not allowed to acces this page")
          }
        }
        else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    // if(email == "admin@gmail.com" && password=="123"){
    //     nav("/adminmaster/dashboard")
    //     toast.success("Login successful")

    // }else{
    //     toast.error("invalid user");

    // }
  }
  const obj = {
    display: "block",
    margin: "20vh auto",
  }
  return (
    <>
      <div
        className="container text-center"
        style={{ paddingTop: 170, minWidth: 50, }}
      >
        <ClipLoader color="blue" loading={loading} size={50} cssOverride={obj}
        />
        <div className={loading==true?"d-none":""}>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="row" style={{ height: 400 }}>
            <div className="col-md-4" />
            <div
              className="col-md-4 shadow-lg bg-body-tertiary px-0"
              style={{ width: 420 }}
            >
              {/* <p style={{ textAlign: "end", background: "aliceblue", marginBottom: "0" }} className="fs-3 py-2 px-2 shadow-sm">
                <Link to={"/home"} className="nav-link">
                  <i className="bi bi-x-lg btn btn-info"></i>
                </Link>
              </p> */}
              <p className="py-1"></p>
              <h1>Sign in</h1>
              <p>Please Enter Your Login and Your Password</p>
              <span className="fs-3">
                <i className="bi bi-person" id="io" />
              </span>
              <input  id="in" placeholder="Email"  {...register("email", { required: true, pattern: /^[a-zA-z0-9\.\_\-]+\@+[a-zA-z0-9]+\.+[a-zA-z]{2,3}$/ })} /> 
         
              <br />      {errors.email && errors.email.type == "required" ? <span className="text-danger text-left">This is required</span> : ""}
              {errors.email && errors.email.type == "pattern" ? <span className="text-danger">Please enter a valid Email Address </span> : ""}<br />
              <span className="fs-3">
                <i className="bi bi-key" id="io" />
              </span>
              <input  id="in" placeholder="Password" {...register("password", { required: true,maxLength:10 })}  /> <br />  
                 {errors.password && errors.password.type == "required" ? <span className="text-danger">This is required</span> : ""}
              {errors.password && errors.password.type == "maxLength" ? <span className="text-danger">Length must be less than 10</span> : ""} <br />
              <button id="btn" className="btn btn-primary btn-lg my-4" style={{borderRadius:"999px"}}>
                Login
              </button><br/>
              
              <Link to="/home" id="btn">
                Go to Home
              </Link>
            </div>
            <div className="col-md-3" />
          </div>
        </form>
        </div>
      </div>


    </>
  )
}
export default Admin