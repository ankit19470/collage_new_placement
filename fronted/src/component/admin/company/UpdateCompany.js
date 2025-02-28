import { Form, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import ApiServices, { BASE_URL } from "../../ApiServices"
function UpdateCompany() {
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [description, setDescrition] = useState("")
    const [imageName, setimageName] = useState("")
    const [image, setImage] = useState({})
    const [previousImage, setPreviousImage] = useState("")

    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")

    // const changeName = ((event) => {
    //     setName(event.target.value)
    // })
    // const changeEmail = ((event) => {
    //     setEmail(event.target.value)
    // })
    // const changePassword = ((event) => {
    //     setPassword(event.target.value)
    // })
    const changeDescription = ((event) => {
        setDescrition(event.target.value)
    })
    const changeImage = ((event) => {
        setimageName(event.target.value)
        setImage(event.target.files[0])
    })
    const changeContact = ((event) => {
        setContact(event.target.value)
    })
    const changeAddress = ((event) => {
        setAddress(event.target.value)
    })
    let param = useParams()
    const id = param.id
    useEffect(() => {
        let data = {
            _id: id
        }
        // axios.post("http://localhost:1000/api/getsingle/company", data)
        ApiServices.singleCompany(data)
        .then((res) => {
            // console.log(res.data.data)
            // setName(res.data.data.name)
            // setEmail(res.data.data.email)
            setDescrition(res.data.data.Description)
            setContact(res.data.data.contact)
            setAddress(res.data.data.address)
            setPreviousImage(res.data.data.Logo)

        })
    }, [])
    const nav = useNavigate()
    const handleForm = ((e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("_id", id)
        // data.append("companyName", name)
        // data.append("Email", email)
        data.append("Description", description)
        data.append("address", address)
        data.append("contact", contact)
        if (!!imageName) {
            data.append("Logo", image)
        }
        // axios.post("http://localhost:1000/api/update/company", data)
      ApiServices.updateCompany(data)
            .then((res) => {
                console.log(res.data)
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    nav("/adminmaster/managecompany")
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Update Company<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-5px"}}>HOME/COMPANY</Link> </h1>
            </div>
          </div>
        </div>
      </div>
            <div className="container-fluid">
                <div className="container shadow"><h1 className="text-center py-2">Update Company</h1>
                    <form onSubmit={handleForm}>
{/* 
                        <div className="row">
                            <div className="col-6">Name <input value={name} onChange={changeName} className="form-control"></input></div>
                            <div className="col-6">Email <input value={email} onChange={changeEmail} className="form-control"></input></div>


                        </div> */}
                        <div className="row py-2">
                            {/* <div className="col-6">Password <input value={password} onChange={changePassword} className="form-control"></input></div> */}
                            <div className="col-6">Description <input value={description} onChange={changeDescription} className="form-control"></input></div>
                            <div className="col-6">Logo <input value={imageName} onChange={changeImage} type="file" className="form-control"></input></div>


                        </div>
                        <div className="row py-2">
                        <div className="col-6">Contact <input value={contact} onChange={changeContact} className="form-control"></input></div>

                            <div className="col-6"><img src={BASE_URL+ previousImage} style={{width:200}}></img></div>
                            


                        </div>
                        <div className="row">
                            <div className="col-12">Address <input value={address} onChange={changeAddress} className="form-control"></input></div>
                        </div>
                        <div className="row py-4">
                            <div className="col-12 text-center"><button className="btn btn-primary">Submit</button></div>


                        </div>


                    </form>

                </div>
            </div>
        </>
    )
}
export default UpdateCompany