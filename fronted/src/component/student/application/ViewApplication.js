import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import ApiServices, { BASE_URL } from "../../ApiServices"
function ViewApplication() {
  const [data, setData] = useState([])
  useEffect(() => {
    const userData=JSON.parse(sessionStorage.getItem("userData"))
    let data={
      studentId:userData.studentId
    }
    // axios.post("http://localhost:1000/api/getall/application",data)
    ApiServices.manageApp(data)
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }, [])
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>View Apply<br/><Link to={"/studentmaster/home"} className="nav-link" style={{fontSize:"15px",marginLeft:"0px"}}>HOME/APPLY</Link> </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container table table-responsive">
      <h1 className="text-center">View Application</h1>
        {/* <div className="row text-center">
          <div className="col-md-4"></div>
          <div className="col-md-4"><h1>View Application</h1></div>
          <div className="col-md-4 text-end">
          </div>
        </div> */}
        <table class="table table-bordered table-hover">
          <tbody>
            <tr>
              <th>S no.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job Title</th>
              <th>Description</th>
              <th>Salary</th>
              <th>Resume</th>
              <th>Status</th>
            </tr>
            {
              data?.map((el, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{el.studentId.name}</td>
                    <td>{el.studentId.email}</td>
                    <td>{el.jobId.Title}</td>
                    <td>{el.jobId.Description}</td>
                    <td>{el.jobId.Salary}</td>
                    <td><Link to={BASE_URL + el.Resume}>View</Link></td>
                    <td>{el.status}</td>
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
export default ViewApplication