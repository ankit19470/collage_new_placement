import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
function UpdateJob(){
    const [title, setTitle] = useState("")
    // const [des, setdes] = useState("")
    const [salary, setsal] = useState("")
    const [exp, setexp] = useState("")
    // const [add,setAdd]=useState("")
    const [companyId, setcom] = useState("")
    const [companyIdData, setcomData] = useState([])
    const changeCom = ((event) => {
        setcom(event.target.value)
    })
    const changeTitle = ((event) => {
        setTitle(event.target.value)
    })
    // const changeDes = ((event) => {
    //     setdes(event.target.value)
    // })
    const changesalary = ((event) => {
        setsal(event.target.value)
    })
    const changeexp = ((event) => {
        setexp(event.target.value)
    })
    // const changeAdd=((e)=>{
    //     setAdd(e.target.value)
    // })
    useEffect(()=>{
        axios.post("http://localhost:1000/api/getall/company",companyIdData)
        .then((res)=>{
   
            setcomData(res.data.data)
        })
    },[])
    let param=useParams()
    const id=param.id
    useEffect(()=>{
        let data={
            _id:id
        }
        axios.post("http://localhost:1000/api/getsingle/jobpost",data)
        .then((res)=>{
            console.log(res)
            setTitle(res.data.data.Title)
            setexp(res.data.data.Experience)
            // setdes(res.data.data.Description)
            setsal(res.data.data.Salary)
            setcom(res.data.data.companyId._id)
            // setAdd(res.data.data.companyId?.address)
        })
    },[])
    const nav=useNavigate()
    const handleForm=((e)=>{
        e.preventDefault()
        let data={
            _id:id,
            companyId:companyId,
            // Description:des,
            Salary:salary,
            Experience:exp,
            Title:title,
            // address:add
            
            

        }
        axios.post("http://localhost:1000/api/update/jobpost",data)
        .then((res) => {
            console.log(res.data)
            if (res.data.success == true) {
                toast.success(res.data.message)
                nav("/companymaster/managejob")
            } else {
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
                            <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Update Job<br /><Link to={"/companymaster/home"} className="nav-link" style={{ fontSize: "15px", marginLeft: "-20px" }}>HOME/JOB</Link> </h1>
                        </div>
                    </div>
                </div>
            </div>
           <div className="container-fluid">
                <div className="container py-3 p-5 shadow"><h1 className="text-center py-2">Update Jobs</h1>
                    <form onSubmit={handleForm}>

                        <div className="row">
                            <div className="col-6">Job Title <input value={title} onChange={changeTitle} className="form-control"></input></div>

                            <div className="col-6">Experience <input value={exp} onChange={changeexp} className="form-control"></input></div>

                        </div>
                        <div className="row py-2">
                            {/* <div className="col-6">Description <input value={des} onChange={changeDes} className="form-control"></input></div> */}
                           

                            <div className="col-12">Salary <input value={salary} onChange={changesalary} className="form-control"></input></div>

                        </div>

                        {/* <div className="row py-2">
                            <div className="col-6">Salary <input value={salary} onChange={changesalary} className="form-control"></input></div>
                


                        </div> */}

                        <div className="row py-4">
                            <div className="col-12 text-center"><button className="btn btn-primary">Submit</button></div>


                        </div>


                    </form>

                </div>
            </div>
    </>
    )
}
export default UpdateJob