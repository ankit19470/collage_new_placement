import axios from "axios"
import { useState } from "react"
import { Link, json, useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { toast } from "react-toastify"
import ApiServices from "../ApiServices"

function Student() {

  var [email, setEmail] = useState("")
  var [password, setPassword] = useState("")
  const [loading,setLoader]=useState(false)
  const changeEmail = (event) => {
    setEmail(event.target.value)
  }
  const changePassword = (event) => {
    setPassword(event.target.value)
  }
  const nav = useNavigate()
  const handleForm = (event) => {
    event.preventDefault()
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000);
    let data = {
      email: email,
      password: password
    }

    // axios.post("http://localhost:1000/api/login/student", data)
    ApiServices.loginStudent(data)
    .then((res) => {
      if (res.data.success == true) {
        if(res.data.data.status==true){
        sessionStorage.setItem("userData", JSON.stringify(res.data.data))
        sessionStorage.setItem("userId", res.data.data._id)
        sessionStorage.setItem("studentId", res.data.data.studentId)
        sessionStorage.setItem("token", res.data.token)
        localStorage.setItem("token", res.data.token)
        if (res.data.data.userType == 2) {
        toast.success(res.data.message)

          nav('/studentmaster/home')
        }
      }
        else {
          nav('/student')
           toast.error("You are not allowed to access this page")
        }
      } else {
        toast.error(res.data.message)
      }
    })
      .catch((err) => {
        console.log(err)
      })


  }
  const obj = {
    display: "block",
    margin: "20vh auto",
  }
  return (
   
      <div
        className="container text-center"
        style={{ paddingTop: 170, minWidth: 50 }}
      >
        <ClipLoader color="blue" size={50} loading={loading} cssOverride={obj} />
        <div className={loading==true?"d-none":""}>
        <form onSubmit={handleForm}>
  <div className="row" style={{ height: 400 }}>
    <div className="col-md-4" />
    <div
      className="col-md-4 shadow-lg bg-body-tertiary px-0"
      style={{ width: 420 }}
    >
   
      <p className="py-1"></p>
      <h1>Sign in</h1>
      <p>Please Enter Your Login and Your Password</p>
      <span className="fs-3">
        <i className="bi bi-person" id="io" />
      </span>
      <input value={email} onChange={changeEmail} id="in" placeholder="Email" /> <br /> <br />
      <span className="fs-3">
        <i className="bi bi-key" id="io" />
      </span>
      <input value={password} onChange={changePassword} id="in" placeholder="Password" /> <br /> <br />
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
        {/* <form onSubmit={handleForm}>
          <div className="row">
            <div className="col-md-4" />
            <div
              className="col-md-4 shadow-lg bg-body-tertiary px-0"
              style={{ width: 490 }}
            >
              <p style={{ textAlign: "end", background: "aliceblue", marginBottom: "0" }} className="fs-3 py-2 shadow-sm">
                <Link to={"/home"} className="nav-link">
                  <i className="bi bi-x-lg" />
                </Link>
              </p>
              <h1>Login</h1>
              <p>Please Enter Your Login and Your Password</p>
              <span className="fs-3">
                <i className="bi bi-person" id="io" />
              </span>
              <input value={email} onChange={changeEmail} id="in" placeholder="Email" /> <br /> <br />
              <span className="fs-3">
                <i className="bi bi-key" id="io" />
              </span>
              <input value={password} onChange={changePassword} id="in" placeholder="Password" /> <br /> <br />
              <button id="btn" className="btn btn-primary my-4">
                Login
              </button>
            </div>
            <div className="col-md-3" />
          </div>
        </form> */}
      </div>
    





  )
}
export default Student