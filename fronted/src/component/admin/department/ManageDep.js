import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import Modal from 'react-modal'
import { ClipLoader } from "react-spinners"
import ApiServices from "../../ApiServices"

function ManageDep() {
    const [data, setData] = useState([])
    const [isDelete, setIsDelete] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)
    const [id,setId]=useState("")
   
    useEffect(() => {

        // axios.post("http://localhost:1000/api/getall/department")
        ApiServices.manageDepartment()
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [isDelete])
    const deleteData = () => {
        let data = {
            _id: id,
        }
        // axios.post("http://localhost:1000/api/delete/department", data)
        ApiServices.deleteDep(data)
            .then((res => {
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    setIsDelete(true)
                } else {
                    toast.error(res.data.message)
                }
            }))
            .catch((err) => {
                console.log(err)
            })
        setIsDelete(false)
    }
    const customStyles = {
        content: {
            width: '50%',
            height: '40%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>View Department<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-20px"}}>HOME/DEPARTMENT</Link> </h1>
            </div>
          </div>
        </div>
      </div>
            <div className="container table-responsive" style={{ overflow: "hidden" }}>
                <div className="row text-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 py-2"><h2>Manage Department</h2></div>
                    {/* <div className="col-md-4 py-2 text-end">
                    <Link to={"/adminmaster/updatedep"} className="btn btn-primary btn-lg ">Add</Link>
                </div> */}


                </div>


                <table class="table table-bordered table-hover" style={{ minWidth: 100 }}>
                    <tbody>
                        <tr>
                            <th>S no.</th>
                            <th>Department Name</th>
                            {/* <th>View</th> */}
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>

                        {
                            data.map((el, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{el.departmentName}</td>
                                        {/* <td>
                                            <Link to={"/singleview/" + el._id}><i className="bi bi-eye btn btn-outline-primary"></i></Link>
                                        </td> */}
                                        <td><Link to={'/adminmaster/updatedep/' + el._id}><i className="bi bi-pen btn btn-outline-success "></i></Link> </td>
                                        <td><button className="btn btn-outline-danger" onClick={() => { setId(el._id);setModalOpen(true) }}><i className="bi bi-trash"></i></button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            
            <Modal isOpen={isModalOpen} style={customStyles}>
                <div className="d-flex justify-content-between">
                   <p>Do you really want to delete it?</p>
                    <button onClick={() => { setModalOpen(false) }}>Close</button>
                    <button onClick={() => { setModalOpen(false); deleteData() }}>Yes</button>
                </div>

            </Modal>

        </>
    )
}
export default ManageDep