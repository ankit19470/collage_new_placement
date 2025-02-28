// import axios from "axios"
// import { useEffect, useState } from "react"
// import { Link, useParams } from "react-router-dom"
// function SingleCourse() {
//     let param = useParams()
//     console.log(param.id)
//     const [data, setData] = useState({})
//     const id = param.id
//     const deptId = param.deptId
//     useEffect(() => {
//         let data = {
//             _id: id,
//             deptId:deptId
//         }
//         axios.post("http://localhost:1000/api/getsingle/course", data)
//             .then((res) => {
//                 console.log(res)
//                 setData(res.data.error)
                
//             })
//     }, [])
//     return (
//         <>
//           <div className="container">
//                 <div className="row text-center">
//                     <div className="col-md-4"></div>
//                     <div className="col-md-4 py-2"><h2>Single Course</h2></div>
//                     <div className="col-md-4 py-2 text-end">
//                         <Link to={"/adminmaster/managecourse"} className="btn btn-primary btn-lg ">Back</Link>
//                     </div>
//                 </div>
//                 <table class="table table-bordered table-hover">
//                     <tbody>
//                         <tr>
//                             <th>Course Name</th>
//                             <th>Course Code</th>
//                             <th>Department Name</th>
//                         </tr>
//                         <tr>
//                             <td>{data.courseName}</td>
//                             <td>{data.courseCode}</td>
//                             <td>{data.deptId?.departmentName}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     )
// }
// export default SingleCourse