import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import ApiServices from "../../ApiServices"
function AddCompany(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [description,setDescrition]=useState("")
    const [imageName,setimageName]=useState("")
    const [image,setImage]=useState({})
    const [contact,setContact]=useState("")
    const [address,setAddress]=useState("")
    
    const changeName=((event)=>{
        setName(event.target.value)
    })
    const changeEmail=((event)=>{
        setEmail(event.target.value)
    })
    const changePassword=((event)=>{
        setPassword(event.target.value)
    })
    const changeDescription=((event)=>{
        setDescrition(event.target.value)
    })
    const changeImage=((event)=>{
        setimageName(event.target.value)
        setImage(event.target.files[0])
    })
    const changeContact=((event)=>{
        setContact(event.target.value)
    })
    const changeAddress=((event)=>{
        setAddress  (event.target.value)
    })
    const nav=useNavigate()
const handleForm=((event)=>{
    event.preventDefault()
    let obj={
        headers:{
            Authorization:sessionStorage.getItem("token")
        }
    }
    let data=new FormData()
    data.append("name",name)
    data.append("email",email)
    data.append("password",password)
    data.append("Description",description)
    data.append("Logo",image)
    data.append("address",address)
    data.append("contact",contact)

// axios.post("http://localhost:1000/api/add/company",data,{obj})
ApiServices.addCompany(data)
.then((res)=>{
    console.log(res)
    if(res.data.success==true){
        toast.success(res.data.message)
        let data={
            email:email,
            password:password
          }
        //   axios.post("http://localhost:1000/api/login/company",data2)
        ApiServices.loginCompany(data)
          .then((res)=>{
            if(res.data.success==true){
                sessionStorage.setItem("userId",res.data._id)
                sessionStorage.setItem("token",res.data.token)
                localStorage.setItem("token",res.data.token)
                nav('/adminmaster/managecompany')
            }else{
                toast.error(res.data.message)
            }
          })
          .catch((err)=>{
            console.log(err)
          })
    }else{
        toast.error(res.data.message)
    }
})
.catch((err)=>{
    console.log(err)
})




})
    return(
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Add Company<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-5px"}}>HOME/COMPANY</Link> </h1>
            </div>
          </div>
        </div>
      </div>
             <div className="container-fluid">
                <div className="container shadow py-2 p-5"><h1 className="text-center">Add Company</h1>
                    <form onSubmit={handleForm}>
                    
                        <div className="row">
                            <div className="col-6">Name <input value={name} onChange={changeName} className="form-control"></input></div>
                            <div className="col-6">Email <input value={email} onChange={changeEmail}  className="form-control"></input></div>
                         

                        </div>
                        <div className="row py-2">
                            <div className="col-6">Password <input  value={password} onChange={changePassword}  className="form-control"></input></div>
                            <div className="col-6">Description <input  value={description} onChange={changeDescription}  className="form-control"></input></div>
                         

                        </div>
                        <div className="row py-2">
                            <div className="col-6">Logo <input value={imageName} onChange={changeImage} type="file" className="form-control"></input></div>
                            <div className="col-6">Contact <input value={contact} onChange={changeContact} className="form-control"></input></div>
                         

                        </div>
                        <div className="row">
                            <div className="col-12">Address <input  value={address} onChange={changeAddress}  className="form-control"></input></div>
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
export default  AddCompany