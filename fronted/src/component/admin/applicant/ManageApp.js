import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ApiServices, { BASE_URL } from "../../ApiServices"

function ManageApp() {
    const [data, setData] = useState([])
    useEffect(() => {
        // axios.post("http://localhost:1000/api/getall/application")
        ApiServices.manageApp()
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>View Application<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"0px"}}>HOME/APPLICATION</Link> </h1>
            </div>
          </div>
        </div>
      </div>
            <div className="container table-responsive">
                <div className="row text-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"><h2 className="py-1">Manage Applicant</h2></div>
                    <div className="col-md-4 text-end">
                        {/* <Link to={"/adminmaster/u"} className="btn btn-primary btn-lg ">Add</Link> */}
                    </div>
                </div>
                <table class="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>S no.</th>
                            <th>Student Detail</th>
                            <th>Company  Detail</th>
                            <th>Resume</th>
                            <th>status</th>

                        </tr>
                        {
                            data.map((el, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>({el.studentId?.name}) ({el.studentId?.email})  ({el.studentId?.contact})  ({el.studentId?.address})</td>
                                        <td>({el.jobId?.Title}) ({el.jobId?.Description})  ({el.jobId?.Salary})  ({el.jobId?.Experience})</td>
                                        <td><Link to={BASE_URL+el.Resume} style={{ width: "200px" }}>View</Link></td>
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
export default ManageApp