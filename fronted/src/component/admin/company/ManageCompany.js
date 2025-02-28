import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import * as qs from "qs"
import ApiServices from "../../ApiServices"
function ManageCompany() {
    const [data, setData] = useState([])
    const [isDelete, setIsDelete] = useState(false)
    useEffect(() => {
        // axios.post("http://localhost:1000/api/getall/company")
        ApiServices.manageCompany()
            .then((res) => {
                console.log(res)
                setData(res.data.data)


            })
            .catch((err) => {
                console.log(err)
            })
    }, [isDelete])
    const deleteData = ((id, status) => {
        let data = {    
            _id: id,
            status: !status
        }
        // axios.post("http://localhost:1000/api/delete/company", qs.stringify(data))
        ApiServices.deleteCompany(data)
            .then((res) => {
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    setIsDelete(true)
                } else {
                    toast.error(res.data.message)
                }
            })
        setIsDelete(false)
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>View Company<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-5px"}}>HOME/COMPANY</Link> </h1>
            </div>
          </div>
        </div>
      </div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 py-2"><h2>Manage Company</h2></div>
                    <div className="col-md-4 text-end py-2">
                        <Link to={"/adminmaster/Updatecompany"} className="btn btn-primary btn-lg ">Add</Link>
                    </div>


                </div>


                <table class="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>S no.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Logo</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Status</th>

                            {/* <th>View</th> */}
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {
                            data.map((el, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{el.name}</td>
                                        <td>{el.email}</td>
                                        <td>{el.Description}</td>
                                        <td><img src={"http://localhost:1000/" + el.Logo} style={{ width: "200px" }} /></td>
                                        <td>{el.contact}</td>
                                        <td>{el.address}</td>
                                        <td>
                                            {el.status ? "Active" : "in-active"}
                                        </td>
                                        {/* <td><Link to={'/singlecompany/' + el._id}><i className="bi bi-eye btn btn-outline-primary"></i></Link></td> */}
                                        <td><Link to={'/adminmaster/updatecompany/' + el._id}><i className="bi bi-pencil btn btn-outline-success"></i></Link></td>

                                        <td><button className="btn btn-outline-danger" onClick={() => { deleteData(el._id, el.status) }}>Change Status</button></td>



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
export default ManageCompany