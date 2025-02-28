import { Form, Link } from "react-router-dom"
import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Modal from 'react-modal';
import { toast } from "react-toastify";
import ApiServices from "../../ApiServices";
function ViewJob() {
    const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [image, setImage] = useState("")
    const [imageObj, setImageObj] = useState({})
    const [jobId,setJobId]=useState("")

    const changeImage = ((event) => {
        setImage(event.target.value)
        setImageObj(event.target.files[0])
    })

    useEffect(() => {
        let data={
            status:true
        }
        // axios.post("http://localhost:1000/api/getall/jobpost")
        ApiServices.manageJob(data)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const customStyles = {
        content: {
            minwidth: '50%',
            height: '30%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        
        },
    };
    const handleApplication=(e)=>{
        e.preventDefault()
        // setIsModalOpen(false)
        let data=new FormData()
        data.append("Resume",imageObj)
        data.append("studentId",sessionStorage.getItem("studentId"))
        data.append("jobId",jobId)
        // axios.post("http://localhost:1000/api/add/application",data,{headers:{Authorization:sessionStorage.getItem("token")}})
        ApiServices.addapp(data)
        .then((res)=>{
                if(res.data.success==true){
                    toast.success(res.data.message)
                    setIsModalOpen(false)
                  
                }else{
                    toast.error(res.data.message)
                }
                setImage("")
                setImageObj({})
        })
        .catch((err)=>{
            console.log(err);
            setImage("")
            setImageObj({})
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Apply Job<br/><Link to={"/studentmaster/home"} className="nav-link" style={{fontSize:"15px",marginLeft:"0px"}}>HOME/APPLY</Link> </h1>
            </div>
          </div>
        </div>
      </div>
            <div className="container">
                <h1 className="text-center py-2">Apply Job</h1>
                <div className="row">

                    {
                        data.map((el, index) => {
                            return (
                                <>
                                    <div className="col-md-6 py-1">
                                        <div className="card" style={{ minWidth: "100px" }}>
                                            <div className="card-body">

                                                <h5 className="card-title">{el.Title}</h5>
                                                <p className="card-text">
                                                    {el.Description}
                                                </p>
                                                <p className="card-text">
                                                    {el.Salary}
                                                </p>
                                                <p className="card-text">
                                                    {el.Experience}
                                                </p>
                                                <p className="card-text">
                                                ({el.companyId.email})-({el.companyId.address})-({el.companyId.Description})-({el.companyId.contact})
                                                </p>
                                                <p className="card-text text-center">
                                                    <button onClick={() => { setJobId(el._id);setIsModalOpen(true) }} class="btn btn-primary">Apply</button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className="container">
                <Modal isOpen={isModalOpen} style={customStyles}>
                    <div className="row">
                        <div className="col-11">
                            <h1 className="text-center">Apply Job</h1>
                        </div>
                        <div className="col-1 text-end">
                            <button className="btn btn-danger text-end " onClick={() => { setIsModalOpen(false) }}>X</button>
                        </div>
                    </div>
                    <form onSubmit={handleApplication}>
                        <div className="row py-3">
                            <div className="col-2 py-2 text-center">
                                Resume
                            </div>
                            <div className="col-10 text-center">
                                <input type="file" value={image} onChange={changeImage} className="form-control"></input>
                            </div>
                            <div className="col-11 py-3 text-center">
                                <button className="btn btn-primary my-2" >Submit</button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </div>

        </>
    )
}
export default ViewJob