import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ApiServices from "../../ApiServices"

function Dashboard(){
const [data,setData]=useState([])
useEffect(()=>{
  // let data1={
  //   status:true
  // }
    // axios.post("http://localhost:1000/api/admin/dashboard")
    ApiServices.dashBoard()
    .then((res)=>{
      console.log(res)
        setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
},[])
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>Admin Dashboard<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-20px"}}>HOME/DASHBOARD</Link> </h1>
            
            </div>
          </div>
        </div>
      </div>
     <div className="container-fluid" style={{overflow:"hidden"}}>
        <div className="container">
            <div className="row py-2">
                <div className="col-md-12 fw-bold text-center py-3"><h1 id="welcome">Welcome Admin</h1></div>
                <div className="col-md-1"></div>

                <div className="col-md-4 text-center py-5 shadow">
                    <Link to={"/adminMaster/managestudent"} style={{textDecoration:"none"}}><img src="/assets/logo/graduated.png" width="50px" style={{}}/><br/><h1>Total Student {data.totalstudent}
                    </h1></Link>
                
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4 shadow text-center py-5">
                <Link to={"/adminMaster/managecompany"} style={{textDecoration:"none"}}><img src="/assets/logo/office-building.png" width="50px" style={{}}/><br/><h1>Total Company {data.totalcompany}</h1></Link>
                </div>

                <div className="col-md-12 py-3 fw-bold text-center"></div>
                <div className="col-md-1"></div>

                         <div className="col-md-4 text-center  py-5 shadow">
                    <Link to={"/adminMaster/managecourse"} style={{textDecoration:"none"}}><img src="/assets/logo/edu.png" width="45px" style={{}}/><br/><h1>Total Course {data.totalcourse}</h1>
     
                    </Link>
                
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4 text-center  py-5 shadow">
                    <Link to={"/adminMaster/managedep"} style={{textDecoration:"none"}}><img src="/assets/logo/school.png" width="50px" style={{}}/><br/><h1>Total Department {data.totaldep}</h1>
     
                    </Link>
                
                </div>
                <div className="col-md-12 py-3 fw-bold text-center"></div>
                <div className="col-md-1"></div>

                         <div className="col-md-4 text-center  py-5 shadow">
                    <Link to={"/adminMaster/managejob"} style={{textDecoration:"none"}}><img src="/assets/logo/vacancy.png" width="45px" style={{}}/><br/><h1>Total Job {data.totaljob}</h1>
     
                    </Link>
                
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4 text-center  py-5 shadow">
                    <Link to={"/adminMaster/manageapp"} style={{textDecoration:"none"}}><img src="/assets/logo/application.png" width="50px" style={{}}/><br/><h1>Total Application {data.totalapp}</h1>
     
                    </Link>
                
                </div>

            </div>
        </div>
     </div>
     </>

    )
}
export default Dashboard