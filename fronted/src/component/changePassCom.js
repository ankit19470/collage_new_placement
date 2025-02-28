import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ApiServices from "./ApiServices"

function ChangePassCom() {
  const [oldPassword, setOld] = useState("")
  const [newPassword, setNew] = useState("")
  const [confirmPassword, setConfirm] = useState("")

  const changeOld = ((e) => {
    setOld(e.target.value)
  })
  const changeNew = ((e) => {
    setNew(e.target.value)
  })
  const changeConfirm = ((e) => {
    setConfirm(e.target.value)
  })
  const handleForm = ((e) => {
    e.preventDefault()
    let data = {
      currentPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
      _id:sessionStorage.getItem("userId")

    }
    // axios.post("http://localhost:1000/api/changepassword/user",data)
    ApiServices.changePassword(data)
      .then((res) => {
        if (res.data.success == true) {
          toast.success(res.data.message)
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })
  return (
    <>
      <div
        className="container text-center"
        style={{ paddingTop: 170, minWidth: 50, }}
      >
        {/* <ClipLoader color="blue" loading={loading} size={50} cssOverride={obj}
            /> */}
        {/* <div className={loading==true?"d-none":""}> */}
        <form onSubmit={handleForm}>
          <div className="row" style={{ height: 380 }}>
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
              {/* <p className="py-1"></p> */}
              <h2 className="my-3 py-1">Change Password</h2>
              {/* <p></p> */}
              {/* <span className="fs-3">
                    <i className="bi bi-person" id="io" />
                  </span> */}
              <input value={oldPassword} onChange={changeOld} placeholder="Old password" type="password" className="py-1" style={{ width: "250px" }} /> <br /> <br />
              {/* <span className="fs-3">
                    <i className="bi bi-key" id="io" />
                  </span> */}
              <input value={newPassword} onChange={changeNew} placeholder="New password" className="py-1" type="password" style={{ width: "250px" }} /> <br /> <br />
              <input value={confirmPassword} onChange={changeConfirm} placeholder="Confirm password" type="password" className="py-1" style={{ width: "250px" }} /> <br /> <br />

              <button id="btn" className="btn btn-primary btn-lg my-2 " style={{ borderRadius: "999px" }}>
                Update Password
              </button><br />


              <Link to="/companymaster/home" id="btn">
                <i class="bi bi-arrow-left"></i>  Go to Home
              </Link>
            </div>

          </div>
        </form>
      </div>
      {/* </div> */}


    </>
  )
}
export default ChangePassCom