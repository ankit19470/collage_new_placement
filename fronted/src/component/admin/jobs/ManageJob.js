import axios from "axios"
import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices"
import { Link } from "react-router-dom"
function ManageJob(){
    const [data,setData]=useState([])
    useEffect(()=>{
            let data={
            status:true
        }
        // axios.post("http://localhost:1000/api/getall/jobpost")
        ApiServices.manageJob(data)
        .then((res)=>{
            setData(res.data.data)
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>View Job<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"0px"}}>HOME/JOB</Link> </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row text-center">
              <div className="col-md-4"></div>
              <div className="col-md-4 py-2"><h2>Manage Job</h2></div>
              <div className="col-md-4 text-end">
                  {/* <Link to={"/adminmaster/u"} className="btn btn-primary btn-lg ">Add</Link> */}
              </div>
          </div>
      <table class="table table-bordered table-hover">
  <tbody>
      <tr>
          <th>S no.</th>
          <th>Title</th>
          <th>Description</th>
          <th>Salary</th>
          <th>Experience</th>

      </tr>
      {
        data.map((el,index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{el.Title}</td>
                    <td>{el.Description}</td>
                    <td>{el.Salary}</td>
                    <td>{el.Experience}</td>



                </tr>
            )
        })
      }
  </tbody>
</table>  
      </div>

</>
    )
}
export default ManageJob