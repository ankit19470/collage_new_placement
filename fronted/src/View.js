import axios from "axios"
import { useEffect, useState } from "react"

function View() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.post("http://localhost:1000/api/getall/course")
            .then((res) => {
                setData(res.data.data)
            }
            )
            .catch((err) => {
                console.log(err)
            })

    })
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>S no</th>
                                <th>Course Name</th>
                                <th>Course Code</th>
                            </tr>
                            {
                                data.map((el, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{el.courseName}</td>
                                            <td>{el.courseCode}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container-fluid py-5" >
                {
                    data.map((el, index) => {
                        return (
                            <div className="card" style={{ width: "18rem", }}>
                                <div className="card-body">
                                    <h5 className="card-title">{index + 1}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{el.courseName}</h6>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{el.courseCode}</h6>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    View Course
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            {
                                data.map((el, index) => {
                                  return(
                                    <>
                                    <p>{index+1}</p>
                                    <p>{el.courseName}</p>
                                    <p>{el.courseCode}</p>
                                    </>
                                  )
                                })
                            }

                        </a>
                    </li>
                </ul>
            </div>

        </>
    )
}
export default View